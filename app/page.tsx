import { createClient } from '@/lib/supabase/server';
import NewsFeed from '@/components/NewsFeed';

export default async function HomePage() {
  const supabase = await createClient();
  const { data: { session } } = await supabase.auth.getSession();

  // Next.js Route Handlers logic moved directly here since page is Server Side now
  let apiUrl = 'https://nexusai-daily.vercel.app/api/news';
  if (process.env.NODE_ENV === 'development') {
    apiUrl = 'http://localhost:3000/api/news';
  }

  let articles = [];
  try {
    const res = await fetch(apiUrl, { next: { revalidate: 300 } });
    articles = await res.json();
  } catch (error) {
    console.error("Fetch error:", error)
  }

  return <NewsFeed initialArticles={articles} userEmail={session?.user?.email} />;
}
