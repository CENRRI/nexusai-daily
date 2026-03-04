'use client';

import Link from 'next/link';
import { useState } from 'react';

// ────────────────────────────────────────────────
// CONFIGURATION — Lemon Squeezy Payment Links
const STRIPE_LINKS = {
    monthly: 'https://ghost-influencer.lemonsqueezy.com/checkout/buy/7d202de7-e4f8-4eec-a8e9-4fb3a6125543',
    yearly: 'https://buy.stripe.com/REPLACE_WITH_YOUR_YEARLY_LINK', // PENDING
};
// ────────────────────────────────────────────────

type Plan = {
    name: string;
    price: { monthly: number; yearly: number };
    badge?: string;
    features: string[];
    cta: string;
    ctaStyle: string;
};

const plans: Record<string, Plan> = {
    free: {
        name: 'Free',
        price: { monthly: 0, yearly: 0 },
        features: [
            '✓ All public AI news',
            '✓ 5-article daily limit (soft)',
            '✓ Category filters',
            '✓ Newsletter signup',
            '✗ Unlimited access',
            '✗ Daily AI briefing email',
            '✗ Early access to news',
            '✗ No ads experience',
        ],
        cta: 'Current Plan',
        ctaStyle: 'outline',
    },
    pro: {
        name: 'Pro',
        price: { monthly: 9, yearly: 79 },
        badge: '🔥 Most Popular',
        features: [
            '✓ Unlimited article access',
            '✓ Daily AI briefing (7am email)',
            '✓ Breaking news alerts',
            '✓ Early access — 2h before public',
            '✓ No advertisements',
            '✓ Full archive (6 months)',
            '✓ Priority newsletter delivery',
            '✓ Cancel anytime',
        ],
        cta: 'Start Pro',
        ctaStyle: 'primary',
    },
    team: {
        name: 'Team',
        price: { monthly: 29, yearly: 249 },
        badge: '💼 Best for Teams',
        features: [
            '✓ Everything in Pro',
            '✓ Up to 5 team seats',
            '✓ Shared digest for teams',
            '✓ Weekly AI industry report',
            '✓ Custom topic filters',
            '✓ API access (beta)',
            '✓ Dedicated Slack channel',
            '✓ Invoice billing',
        ],
        cta: 'Start Team Trial',
        ctaStyle: 'purple',
    },
};

const faq = [
    { q: 'Can I cancel anytime?', a: 'Yes. Cancel from your account settings with one click. No questions asked. You keep access until the end of your billing period.' },
    { q: 'How is the daily briefing delivered?', a: 'We send a curated email every morning at 7am (ET) with the top 5 AI stories of the day, handpicked from our 15+ sources.' },
    { q: 'What payment methods do you accept?', a: 'All major credit/debit cards (Visa, Mastercard, Amex) and PayPal via Stripe. Invoices available on Team plan.' },
    { q: 'Do you offer refunds?', a: 'If you are unsatisfied within the first 7 days, we will issue a full refund, no questions asked.' },
    { q: 'Is there a free trial?', a: 'Yes — the Free tier is always available. Pro and Team plans offer a 7-day money-back guarantee.' },
];

export default function PremiumPage() {
    const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly');
    const yearSaving = Math.round(((9 * 12 - 79) / (9 * 12)) * 100);

    return (
        <div style={{ minHeight: '100vh', background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
            {/* Navbar */}
            <nav style={{ position: 'sticky' as const, top: 0, background: 'rgba(8,13,26,0.95)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.07)', padding: '0 1.5rem', zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '60px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <Link href="/" style={{ textDecoration: 'none', fontWeight: 800, fontSize: '1.1rem', background: 'linear-gradient(135deg, #00D4FF, #7C3AED)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                        ⚡ NexusAI Daily
                    </Link>
                    <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
                    <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>Premium</span>
                </div>
                <Link href="/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '0.85rem' }}>← Back to News</Link>
            </nav>

            <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '5rem 1.5rem' }}>

                {/* Hero */}
                <div style={{ textAlign: 'center' as const, marginBottom: '3.5rem' }}>
                    <div style={{ display: 'inline-block', background: 'linear-gradient(135deg, rgba(0,212,255,0.15), rgba(124,58,237,0.15))', border: '1px solid rgba(0,212,255,0.3)', borderRadius: '99px', padding: '6px 18px', fontSize: '0.8rem', fontWeight: 700, color: '#00D4FF', marginBottom: '1.5rem', letterSpacing: '0.08em', textTransform: 'uppercase' as const }}>
                        Premium Plans
                    </div>
                    <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, color: '#FFFFFF', lineHeight: 1.15, marginBottom: '1rem' }}>
                        Stay ahead of the<br />
                        <span style={{ background: 'linear-gradient(135deg, #00D4FF, #7C3AED)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>AI revolution</span>
                    </h1>
                    <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.6)', maxWidth: '560px', margin: '0 auto 2rem', lineHeight: 1.7 }}>
                        Get unlimited access, daily briefings, and zero ads. Everything you need to stay at the forefront of AI.
                    </p>

                    {/* Billing toggle */}
                    <div style={{ display: 'inline-flex', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '4px', gap: '4px' }}>
                        {(['monthly', 'yearly'] as const).map((b) => (
                            <button key={b} onClick={() => setBilling(b)} style={{ padding: '8px 20px', borderRadius: '8px', border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: '0.85rem', fontFamily: "'Outfit', sans-serif", background: billing === b ? 'linear-gradient(135deg, #00D4FF, #7C3AED)' : 'transparent', color: billing === b ? '#fff' : 'rgba(255,255,255,0.5)', transition: 'all 0.2s', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                {b === 'monthly' ? 'Monthly' : 'Yearly'}
                                {b === 'yearly' && <span style={{ background: '#10B981', color: '#fff', fontSize: '0.65rem', fontWeight: 800, padding: '2px 6px', borderRadius: '99px' }}>-{yearSaving}%</span>}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Plans */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem', marginBottom: '4rem' }}>
                    {Object.entries(plans).map(([key, plan]) => {
                        const isPro = key === 'pro';
                        const price = plan.price[billing];
                        const isFree = price === 0;

                        return (
                            <div key={key} style={{ position: 'relative' as const, background: isPro ? 'linear-gradient(145deg, rgba(0,212,255,0.08), rgba(124,58,237,0.12))' : 'rgba(255,255,255,0.03)', border: `1px solid ${isPro ? 'rgba(0,212,255,0.4)' : 'rgba(255,255,255,0.08)'}`, borderRadius: '16px', padding: '2rem', display: 'flex', flexDirection: 'column' as const }}>
                                {plan.badge && (
                                    <div style={{ position: 'absolute' as const, top: '-12px', left: '50%', transform: 'translateX(-50%)', background: isPro ? 'linear-gradient(135deg, #00D4FF, #7C3AED)' : 'rgba(124,58,237,0.8)', color: '#fff', fontSize: '0.72rem', fontWeight: 800, padding: '4px 14px', borderRadius: '99px', whiteSpace: 'nowrap' as const }}>
                                        {plan.badge}
                                    </div>
                                )}

                                <div style={{ marginBottom: '1.5rem' }}>
                                    <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: isPro ? '#00D4FF' : '#FFFFFF', marginBottom: '0.75rem' }}>{plan.name}</h2>
                                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                                        <span style={{ fontSize: '2.8rem', fontWeight: 900, color: '#FFFFFF', fontFamily: 'Inter, sans-serif' }}>{isFree ? 'Free' : `$${price}`}</span>
                                        {!isFree && <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem' }}>/{billing === 'yearly' ? 'yr' : 'mo'}</span>}
                                    </div>
                                    {!isFree && billing === 'yearly' && (
                                        <div style={{ fontSize: '0.78rem', color: '#10B981', marginTop: '4px' }}>
                                            Billed annually — saves ${key === 'pro' ? (9 * 12 - 79) : (29 * 12 - 249)}/yr
                                        </div>
                                    )}
                                </div>

                                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column' as const, gap: '10px', marginBottom: '2rem', flex: 1 }}>
                                    {plan.features.map((f) => {
                                        const isIncluded = f.startsWith('✓');
                                        return (
                                            <li key={f} style={{ fontSize: '0.88rem', color: isIncluded ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.25)', display: 'flex', gap: '8px' }}>
                                                <span style={{ color: isIncluded ? '#10B981' : 'rgba(255,255,255,0.2)', flexShrink: 0 }}>{isIncluded ? '✓' : '✗'}</span>
                                                <span>{f.slice(2)}</span>
                                            </li>
                                        );
                                    })}
                                </ul>

                                {isFree ? (
                                    <Link href="/" style={{ display: 'block', textAlign: 'center' as const, padding: '12px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}>
                                        {plan.cta}
                                    </Link>
                                ) : (
                                    <a
                                        href={key === 'pro' ? STRIPE_LINKS.monthly : STRIPE_LINKS.yearly}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => {
                                            const href = key === 'pro' ? STRIPE_LINKS.monthly : STRIPE_LINKS.yearly;
                                            if (href.includes('REPLACE_WITH')) {
                                                e.preventDefault();
                                                alert('⚠️ Modo de demostración: Este es un enlace de prueba.\n\nFalta configurar el enlace Anual en app/premium/page.tsx');
                                            }
                                        }}
                                        style={{ display: 'block', textAlign: 'center' as const, padding: '13px', borderRadius: '10px', background: isPro ? 'linear-gradient(135deg, #00D4FF, #7C3AED)' : 'linear-gradient(135deg, #7C3AED, #4F46E5)', color: '#fff', textDecoration: 'none', fontWeight: 700, fontSize: '0.95rem', transition: 'opacity 0.2s' }}
                                    >
                                        {plan.cta} →
                                    </a>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Features comparison blurb */}
                <div style={{ background: 'rgba(0,212,255,0.04)', border: '1px solid rgba(0,212,255,0.15)', borderRadius: '16px', padding: '2rem', marginBottom: '4rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem', textAlign: 'center' as const }}>
                    {[
                        { icon: '⚡', label: 'Real-time feeds', desc: '15+ sources refreshed every 5 min' },
                        { icon: '📬', label: 'Daily briefing', desc: '7am daily digest in your inbox' },
                        { icon: '🚫', label: 'No ads', desc: 'Zero interruptions, pure content' },
                        { icon: '🔔', label: 'Breaking alerts', desc: 'Be first when AI makes history' },
                    ].map((f) => (
                        <div key={f.label}>
                            <div style={{ fontSize: '1.8rem', marginBottom: '8px' }}>{f.icon}</div>
                            <div style={{ fontWeight: 700, color: '#FFFFFF', fontSize: '0.9rem', marginBottom: '4px' }}>{f.label}</div>
                            <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.78rem' }}>{f.desc}</div>
                        </div>
                    ))}
                </div>

                {/* FAQ */}
                <div>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '1.5rem', textAlign: 'center' as const }}>Frequently Asked Questions</h2>
                    <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '1rem' }}>
                        {faq.map((item) => (
                            <div key={item.q} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '10px', padding: '1.25rem' }}>
                                <div style={{ fontWeight: 700, color: '#FFFFFF', marginBottom: '6px', fontSize: '0.95rem' }}>{item.q}</div>
                                <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.88rem', lineHeight: 1.6 }}>{item.a}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <div style={{ textAlign: 'center' as const, marginTop: '4rem', padding: '3rem', background: 'linear-gradient(135deg, rgba(0,212,255,0.08), rgba(124,58,237,0.08))', border: '1px solid rgba(0,212,255,0.2)', borderRadius: '20px' }}>
                    <h2 style={{ fontSize: '1.8rem', fontWeight: 900, color: '#FFFFFF', marginBottom: '0.75rem' }}>Ready to go Pro?</h2>
                    <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '1.75rem', fontSize: '0.95rem' }}>Join thousands of AI professionals who start every day with NexusAI Daily.</p>
                    <a href={STRIPE_LINKS.monthly} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', background: 'linear-gradient(135deg, #00D4FF, #7C3AED)', color: '#fff', fontWeight: 700, fontSize: '1rem', padding: '14px 36px', borderRadius: '12px', textDecoration: 'none' }}>
                        Start Pro — $9/month →
                    </a>
                    <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.78rem', marginTop: '12px' }}>7-day money-back guarantee • No commitment • Cancel anytime</p>
                </div>
            </div>
        </div>
    );
}
