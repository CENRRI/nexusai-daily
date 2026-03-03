import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'NexusAI Daily — Your AI Intelligence Hub',
  description: 'Stay ahead of the artificial intelligence revolution. Real-time AI news, analysis, and briefings from the world\'s top tech sources.',
  keywords: 'AI news, artificial intelligence, machine learning, tech news, agentic AI, LLM, robotics',
  openGraph: {
    title: 'NexusAI Daily',
    description: 'Real-time AI news from 10,000+ sources — curated for tech professionals.',
    type: 'website',
    url: 'https://nexusai.daily',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NexusAI Daily',
    description: 'Real-time AI news for professionals.',
  },
  robots: 'index, follow',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense — uncomment once account approved */}
        {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXX" crossOrigin="anonymous"></script> */}
      </head>
      <body>{children}</body>
    </html>
  );
}
