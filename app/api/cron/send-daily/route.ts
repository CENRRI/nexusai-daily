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
        // Safe fallback if the RESEND_API_KEY is not yet populated
        if (!process.env.RESEND_API_KEY) {
            console.error('RESEND_API_KEY is missing from environment variables.');
            return NextResponse.json({ error: 'Resend API key missing' }, { status: 500 });
        }

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

        // Only send to the admin/test user during Resend Onboarding to avoid 403 Forbidden crashes
        const emails = users.map(u => u.email).filter(Boolean) as string[];

        // Ensure the recipient is the verified Resend email to prevent batch failure
        const targetEmail = emails.includes('cedatabi@gmail.com') ? 'cedatabi@gmail.com' : emails[0];

        if (!targetEmail) {
            return NextResponse.json({ message: 'No valid subscribers' });
        }

        console.log(`[Cron] Assembling agentic newsletter for ${targetEmail}...`);

        const { data, error: sendError } = await resend.emails.send({
            from: 'NexusAI Daily <onboarding@resend.dev>',
            to: [targetEmail],
            subject: '🚨 Tus 5 noticias clave de IA (Agentic Report) 🤖',
            react: DailyNewsletter({ articles: top5 }) as React.ReactElement,
        });

        if (sendError) {
            console.error('Resend Error Output:', JSON.stringify(sendError));
            return NextResponse.json({ error: sendError.message }, { status: 500 });
        }

        console.log(`[Cron] Newsletter successfully dispatched to ${targetEmail}.`);
        return NextResponse.json({ message: 'Success', recipients: 1, data });

    } catch (error: any) {
        console.error('Cron job catastrophic error:', error);
        return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
    }
}
