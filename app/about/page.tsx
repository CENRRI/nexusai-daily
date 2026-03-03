'use client';

import Link from 'next/link';

const pageStyle: React.CSSProperties = {
    minHeight: '100vh',
    background: 'var(--bg-primary)',
    color: 'var(--text-primary)',
};

const containerStyle: React.CSSProperties = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '4rem 1.5rem',
};

const navStyle: React.CSSProperties = {
    position: 'sticky' as const,
    top: 0,
    background: 'rgba(8,13,26,0.9)',
    backdropFilter: 'blur(20px)',
    borderBottom: '1px solid rgba(255,255,255,0.07)',
    padding: '0 1.5rem',
    zIndex: 50,
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    height: '60px',
};

export default function AboutPage() {
    return (
        <div style={pageStyle}>
            <nav style={navStyle}>
                <Link href="/" style={{ textDecoration: 'none', fontWeight: 800, fontSize: '1.1rem', background: 'linear-gradient(135deg, #00D4FF, #7C3AED)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    ⚡ NexusAI Daily
                </Link>
                <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
                <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>About</span>
            </nav>

            <div style={containerStyle}>
                <div style={{ marginBottom: '3rem' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' as const, color: '#00D4FF', marginBottom: '12px' }}>About Us</div>
                    <h1 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#FFFFFF', lineHeight: 1.2, marginBottom: '1rem' }}>
                        Your AI Intelligence Hub
                    </h1>
                    <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>
                        NexusAI Daily is an independent news aggregator dedicated to keeping professionals, researchers, and enthusiasts ahead of the artificial intelligence revolution.
                    </p>
                </div>

                {[
                    {
                        title: '🎯 Our Mission',
                        content: 'We believe that access to quality AI information should not be limited to those who can afford premium subscriptions. NexusAI Daily aggregates the best AI news from trusted public sources — curated, organized, and delivered for free.',
                    },
                    {
                        title: '📡 How It Works',
                        content: 'We monitor public RSS feeds from the world\'s top technology publications including TechCrunch, The Verge, VentureBeat, and WIRED. Content is refreshed every 5 minutes, ensuring you always have access to the latest developments in AI.',
                    },
                    {
                        title: '⚖️ Content & Attribution',
                        content: 'NexusAI Daily does not create original content. All articles are sourced from their original publishers via public RSS feeds. We link directly to the original source for every article. We respect intellectual property rights and the hard work of journalists.',
                    },
                    {
                        title: '📬 Newsletter',
                        content: 'Our free daily briefing delivers the top 5 AI stories directly to your inbox every morning. No spam. No promotional content. Just signal, never noise.',
                    },
                    {
                        title: '💼 Advertising',
                        content: 'NexusAI Daily is supported by display advertising. We work with Google AdSense and direct advertisers to show relevant ads to our audience of AI professionals. We never sell your personal data.',
                    },
                ].map((section) => (
                    <div key={section.title} style={{ marginBottom: '2.5rem', padding: '1.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.07)' }}>
                        <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.75rem' }}>{section.title}</h2>
                        <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, fontSize: '0.95rem' }}>{section.content}</p>
                    </div>
                ))}

                <div style={{ textAlign: 'center' as const, marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                    <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem' }}>
                        Questions? Reach us at <a href="mailto:hello@nexusaidaily.com" style={{ color: '#00D4FF' }}>hello@nexusaidaily.com</a>
                    </p>
                    <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
                        {[['/', 'Home'], ['/privacy', 'Privacy'], ['/terms', 'Terms'], ['/contact', 'Contact']].map(([href, label]) => (
                            <Link key={href} href={href} style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '0.85rem', transition: 'color 0.2s' }}>
                                {label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
