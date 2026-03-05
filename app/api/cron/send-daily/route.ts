import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { DailyNewsletter } from '@/emails/DailyNewsletter';
import { fetchAllArticles } from '@/lib/rss';
import { createClient } from '@supabase/supabase-js';
import * as React from 'react';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
    // Verify Vercel Cron Secret to prevent unauthorized public execution
    // (Only runs if you have CRON_SECRET configured in Vercel, very secure)
    const authHeader = request.headers.get('authorization');
    if (
        process.env.CRON_SECRET &&
        authHeader !== `Bearer ${process.env.CRON_SECRET}`
    ) {
        return new NextResponse('Unauthorized', { status: 401 });
    }

    try {
        const resend = new Resend(process.env.RESEND_API_KEY);

        // 1. Fetch the Top 5 most recent AI news
        const articles = await fetchAllArticles();
        const top5 = articles.slice(0, 5);

        // 2. Fetch all registered users from Supabase Auth
        const supabaseAdmin = createClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL as string,
            process.env.SUPABASE_SERVICE_ROLE_KEY as string
        );

        const { data: { users }, error: dbError } = await supabaseAdmin.auth.admin.listUsers();

        if (dbError) {
            console.error('Database Error:', dbError);
            return NextResponse.json({ error: 'Failed to fetch subscribers' }, { status: 500 });
        }

        const emails = users.map(u => u.email).filter(Boolean) as string[];

        if (emails.length === 0) {
            return NextResponse.json({ message: 'No subscribers found. Skipping.' });
        }

        console.log(`[Cron] Assembling newsletter for ${emails.length} subscribers...`);

        // 3. Assemble and dispatch emails using Resend Batch API
        // This ensures every user gets their own private email (no BBC exposure)
        const batchPayload = emails.map(email => ({
            from: 'NexusAI Daily <onboarding@resend.dev>', // Resend testing domain wrapper
            to: [email],
            subject: 'NexusAI Daily: Tus 5 noticias clave de IA 🤖',
            react: DailyNewsletter({ articles: top5 }) as React.ReactElement,
        }));

        const { data, error: sendError } = await resend.batch.send(batchPayload);

        if (sendError) {
            console.error('Resend Error:', sendError);
            return NextResponse.json({ error: sendError }, { status: 500 });
        }

        console.log(`[Cron] Newsletter successfully dispatched to ${emails.length} users.`);
        return NextResponse.json({ message: 'Success', recipients: emails.length, data });

    } catch (error) {
        console.error('Cron job catastrophic error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
