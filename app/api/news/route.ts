import { fetchAllArticles } from '@/lib/rss';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic'; // Force refresh to see category fixes immediately
export const revalidate = 0;

export async function GET() {
    try {
        const articles = await fetchAllArticles();
        return NextResponse.json(articles);
    } catch (error) {
        console.error('RSS fetch error:', error);
        return NextResponse.json([], { status: 500 });
    }
}
