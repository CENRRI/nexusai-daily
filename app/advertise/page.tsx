'use client';

import Link from 'next/link';

export default function AdvertisePage() {
    const adFormats = [
        { name: 'Leaderboard Banner', size: '728×90', placement: 'Header — above the fold', cpm: '$8–14', icon: '📊' },
        { name: 'Medium Rectangle', size: '300×250', placement: 'Sidebar — always visible', cpm: '$6–12', icon: '📦' },
        { name: 'In-Feed Native', size: 'Full width', placement: 'Between news articles', cpm: '$10–18', icon: '📰' },
        { name: 'Newsletter Sponsor', size: 'Email slot', placement: 'Daily briefing (5,000+ subs)', cpm: '$25–40 CPM', icon: '📬' },
    ];

    const stats = [
        { label: 'Monthly Readers', value: '50K+', icon: '👥' },
        { label: 'Avg. Time on Site', value: '4:30 min', icon: '⏱️' },
        { label: 'Newsletter Subscribers', value: '5,000+', icon: '📩' },
        { label: 'Primary Audience', value: 'Tech Pros', icon: '💼' },
    ];

    return (
        <div style={{ minHeight: '100vh', background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
            <nav style={{ position: 'sticky' as const, top: 0, background: 'rgba(8,13,26,0.9)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.07)', padding: '0 1.5rem', zIndex: 50, display: 'flex', alignItems: 'center', gap: '1rem', height: '60px' }}>
                <Link href="/" style={{ textDecoration: 'none', fontWeight: 800, fontSize: '1.1rem', background: 'linear-gradient(135deg, #00D4FF, #7C3AED)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    ⚡ NexusAI Daily
                </Link>
                <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
                <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>Advertise</span>
            </nav>

            <div style={{ maxWidth: '900px', margin: '0 auto', padding: '4rem 1.5rem' }}>
                {/* Hero */}
                <div style={{ textAlign: 'center' as const, marginBottom: '4rem' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' as const, color: '#00D4FF', marginBottom: '12px' }}>Advertise With Us</div>
                    <h1 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#FFFFFF', lineHeight: 1.2, marginBottom: '1rem' }}>
                        Reach 50,000+ AI Professionals
                    </h1>
                    <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto' }}>
                        NexusAI Daily connects your brand with decision-makers, engineers, investors, and researchers at the forefront of artificial intelligence.
                    </p>
                </div>

                {/* Stats */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', marginBottom: '3rem' }}>
                    {stats.map((stat) => (
                        <div key={stat.label} style={{ background: 'rgba(0,212,255,0.05)', border: '1px solid rgba(0,212,255,0.2)', borderRadius: '12px', padding: '1.5rem', textAlign: 'center' as const }}>
                            <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>{stat.icon}</div>
                            <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#00D4FF', fontFamily: 'Inter, sans-serif' }}>{stat.value}</div>
                            <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', marginTop: '4px' }}>{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Ad Formats */}
                <div style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '1.5rem' }}>📐 Ad Formats & Pricing</h2>
                    <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '1rem' }}>
                        {adFormats.map((fmt) => (
                            <div key={fmt.name} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' as const }}>
                                <span style={{ fontSize: '1.5rem' }}>{fmt.icon}</span>
                                <div style={{ flex: 1 }}>
                                    <div style={{ fontWeight: 700, color: '#FFFFFF', fontSize: '1rem' }}>{fmt.name}</div>
                                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>{fmt.placement} • {fmt.size}</div>
                                </div>
                                <div style={{ background: 'rgba(124,58,237,0.2)', border: '1px solid rgba(124,58,237,0.4)', borderRadius: '8px', padding: '6px 14px', color: '#C084FC', fontWeight: 700, fontSize: '0.9rem', whiteSpace: 'nowrap' as const }}>
                                    {fmt.cpm}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Audience */}
                <div style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.1), rgba(0,212,255,0.05))', border: '1px solid rgba(124,58,237,0.25)', borderRadius: '16px', padding: '2rem', marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '1.5rem' }}>🎯 Our Audience</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        {[
                            ['Software Engineers & Developers', '38%'],
                            ['AI/ML Researchers', '22%'],
                            ['Tech Founders & CTOs', '18%'],
                            ['Product Managers', '12%'],
                            ['Investors & VCs', '10%'],
                        ].map(([role, pct]) => (
                            <div key={role} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>{role}</span>
                                <span style={{ color: '#00D4FF', fontWeight: 700, fontSize: '0.9rem' }}>{pct}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div style={{ textAlign: 'center' as const, padding: '2.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.75rem' }}>Ready to Get Started?</h2>
                    <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>Drop us an email and we'll send you our full media kit within 24 hours.</p>
                    <a
                        href="mailto:ads@nexusaidaily.com?subject=Advertising Inquiry"
                        style={{ display: 'inline-block', background: 'linear-gradient(135deg, #00D4FF, #7C3AED)', color: 'white', fontWeight: 700, fontSize: '1rem', padding: '14px 32px', borderRadius: '10px', textDecoration: 'none', transition: 'opacity 0.2s' }}
                    >
                        📩 Contact Our Ad Team
                    </a>
                    <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem', marginTop: '14px' }}>ads@nexusaidaily.com • Response within 24h</p>
                </div>
            </div>
        </div>
    );
}
