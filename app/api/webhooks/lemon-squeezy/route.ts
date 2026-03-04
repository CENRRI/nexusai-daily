import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

// Use the master key to bypass row level security and write directly from the server
const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: NextRequest) {
    try {
        const defaultSecret = process.env.LEMON_SQUEEZY_WEBHOOK_SECRET || 'nexus_secret_2026_xoxo';
        const secret = defaultSecret;
        const bodyText = await req.text();

        // Lemon Squeezy signs Webhooks with HMAC SHA256
        const signature = req.headers.get('x-signature');

        if (!signature) {
            return NextResponse.json({ error: 'Missing signature' }, { status: 401 });
        }

        const hmac = crypto.createHmac('sha256', secret);
        const digest = Buffer.from(hmac.update(bodyText).digest('hex'), 'utf8');
        const signatureBuffer = Buffer.from(signature, 'utf8');

        if (digest.length !== signatureBuffer.length || !crypto.timingSafeEqual(digest, signatureBuffer)) {
            return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
        }

        const payload = JSON.parse(bodyText);
        const eventName = payload.meta.event_name;
        const eventData = payload.data.attributes;

        // The user's email provided during checkout
        const userEmail = eventData.user_email;
        const orderId = eventData.order_id?.toString() || payload.data.id;
        const planName = eventData.product_name;

        console.log(`[Webhook] Processing ${eventName} for ${userEmail}`);

        if (eventName === 'order_created' || eventName === 'subscription_created' || eventName === 'subscription_updated') {
            const status = eventData.status || 'active'; // Default to active for one-time orders

            const { error } = await supabaseAdmin
                .from('subscriptions')
                .upsert({
                    user_email: userEmail,
                    lemon_squeezy_id: payload.data.id,
                    order_id: orderId,
                    status: status,
                    plan_name: planName,
                    updated_at: new Date().toISOString()
                }, {
                    onConflict: 'user_email'
                });

            if (error) {
                console.error('Supabase Error:', error);
                return NextResponse.json({ error: 'Failed to update database' }, { status: 500 });
            }

        } else if (eventName === 'subscription_cancelled' || eventName === 'subscription_expired') {
            const { error } = await supabaseAdmin
                .from('subscriptions')
                .update({ status: 'canceled', updated_at: new Date().toISOString() })
                .eq('user_email', userEmail);

            if (error) {
                console.error('Supabase Error:', error);
                return NextResponse.json({ error: 'Failed to cancel subscription in database' }, { status: 500 });
            }
        }

        return NextResponse.json({ message: 'Webhook processed successfully' });

    } catch (error) {
        console.error('Webhook processing error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
