'use client';

import { useState, useEffect } from 'react';
import { Article } from '@/lib/rss';

const TOOLS = [
    { emoji: '🤖', name: 'Cursor', desc: 'AI-powered code editor', href: 'https://cursor.sh', tag: 'Try Free' },
    { emoji: '📝', name: 'Notion AI', desc: 'Write, plan & organize', href: 'https://notion.so', tag: 'Popular' },
    { emoji: '🎨', name: 'Midjourney', desc: 'AI image generation', href: 'https://midjourney.com', tag: 'Hot' },
    { emoji: '⚡', name: 'Perplexity', desc: 'AI-powered search', href: 'https://perplexity.ai', tag: 'Free' },
];

const LS_KEY = 'nexusai_subscribed_email';

interface Props {
    trending: Article[];
}

export default function Sidebar({ trending }: Props) {
    const [email, setEmail] = useState('');
    // Initialize from localStorage so subscription persists across sessions
    const [submitted, setSubmitted] = useState(false);
    const [subscribedEmail, setSubscribedEmail] = useState('');

    useEffect(() => {
        const saved = localStorage.getItem(LS_KEY);
        if (saved) {
            setSubmitted(true);
            setSubscribedEmail(saved);
        }
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            localStorage.setItem(LS_KEY, email);
            setSubscribedEmail(email);
            setSubmitted(true);
        }
    };

    return (
        <aside className="sidebar">
            {/* Ad Banner */}
            <div className="ad-banner">
                <div className="ad-label">Advertisement</div>
                <div className="ad-placeholder">
                    {/* Google AdSense goes here */}
                    Google AdSense — 300×90
                </div>
            </div>

            {/* Newsletter */}
            <div className="newsletter-widget">
                <div className="newsletter-icon">📬</div>
                <h3 className="newsletter-title">Daily AI Briefing</h3>
                <p className="newsletter-subtitle">Get the top 5 AI stories delivered every morning. No spam, ever.</p>
                {submitted ? (
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '1.5rem', marginBottom: '6px' }}>✅</div>
                        <div style={{ color: '#10B981', fontWeight: 700, fontSize: '0.9rem', marginBottom: '4px' }}>
                            ¡Ya estás suscrito!
                        </div>
                        <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem' }}>
                            {subscribedEmail}
                        </div>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <input
                            className="newsletter-input"
                            type="email"
                            placeholder="your@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button className="newsletter-btn" type="submit">
                            Get Free Briefings →
                        </button>
                        <div className="newsletter-privacy">🔒 No spam. Unsubscribe anytime.</div>
                    </form>
                )}
            </div>

            {/* ⭐ Premium Upgrade CTA */}
            <div style={{
                background: 'linear-gradient(135deg, rgba(124,58,237,0.2), rgba(0,212,255,0.1))',
                border: '1px solid rgba(124,58,237,0.4)',
                borderRadius: '12px',
                padding: '1.25rem',
                textAlign: 'center' as const,
            }}>
                <div style={{ fontSize: '1.4rem', marginBottom: '6px' }}>⭐</div>
                <div style={{ fontWeight: 800, color: '#FFFFFF', fontSize: '0.95rem', marginBottom: '6px' }}>
                    Go Pro — $9/month
                </div>
                <ul style={{ listStyle: 'none', textAlign: 'left' as const, fontSize: '0.8rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: '1rem' }}>
                    <li>✓ Unlimited access + No ads</li>
                    <li>✓ Daily 7am AI briefing email</li>
                    <li>✓ Breaking news alerts</li>
                    <li>✓ 2h early access to news</li>
                </ul>
                <a
                    href="/premium"
                    style={{ display: 'block', background: 'linear-gradient(135deg, #00D4FF, #7C3AED)', color: '#fff', fontWeight: 700, fontSize: '0.85rem', padding: '10px', borderRadius: '8px', textDecoration: 'none', transition: 'opacity 0.2s' }}
                >
                    View Plans →
                </a>
                <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)', marginTop: '8px' }}>
                    7-day money-back guarantee
                </div>
            </div>

            {/* Trending */}
            <div className="sidebar-widget">
                <div className="section-title">Trending Now</div>
                <ul className="trending-list">
                    {trending.slice(0, 5).map((article, i) => (
                        <li key={article.id}>
                            <a href={article.link} target="_blank" rel="noopener noreferrer" className="trending-item">
                                <span className="trending-num">0{i + 1}</span>
                                <div>
                                    <div className="trending-title">{article.title}</div>
                                    <div className="trending-source" style={{ color: article.sourceColor }}>{article.source}</div>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Affiliate Tools */}
            <div className="sidebar-widget">
                <div className="section-title">Top AI Tools</div>
                <div className="tools-list">
                    {TOOLS.map((tool) => (
                        <a key={tool.name} href={tool.href} target="_blank" rel="noopener noreferrer sponsored" className="tool-link">
                            <span className="tool-emoji">{tool.emoji}</span>
                            <div className="tool-info">
                                <div className="tool-name">{tool.name}</div>
                                <div className="tool-desc">{tool.desc}</div>
                            </div>
                            <span className="tool-tag">{tool.tag}</span>
                        </a>
                    ))}
                </div>
            </div>

            {/* Square Ad */}
            <div className="ad-banner">
                <div className="ad-label">Sponsored</div>
                <div className="ad-placeholder" style={{ height: '250px' }}>
                    Google AdSense — 300×250
                </div>
            </div>
        </aside>
    );
}
