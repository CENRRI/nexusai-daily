'use client';

import { useState } from 'react';
import { Article } from '@/lib/rss';
import Navbar from '@/components/Navbar';
import Ticker from '@/components/Ticker';
import HeroArticle from '@/components/HeroArticle';
import ArticleCard from '@/components/ArticleCard';
import Sidebar from '@/components/Sidebar';

interface Props {
    initialArticles: Article[];
    userEmail?: string | null;
}

export default function NewsFeed({ initialArticles, userEmail }: Props) {
    const [activeCategory, setActiveCategory] = useState('All');

    const filtered = activeCategory === 'All'
        ? initialArticles
        : initialArticles.filter((a) => a.category === activeCategory);

    const hero = filtered[0];
    const grid = filtered.slice(1);

    return (
        <>
            <Navbar onCategoryChange={setActiveCategory} activeCategory={activeCategory} userEmail={userEmail} />
            <Ticker />

            <div className="page-container">
                {/* Main Column */}
                <main>
                    {initialArticles.length === 0 ? (
                        <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-muted)' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📡</div>
                            <p>Unable to load news feeds. Please try again later.</p>
                        </div>
                    ) : (
                        <>
                            {hero && <HeroArticle article={hero} />}

                            <div className="section-title">Latest AI News</div>

                            <div className="news-grid" style={{ marginBottom: '0' }}>
                                {grid.slice(0, 3).map((article, i) => (
                                    <ArticleCard key={article.id} article={article} index={i} />
                                ))}
                            </div>

                            {/* In-feed advertisement */}
                            {grid.length > 3 && !userEmail && (
                                <div className="in-feed-ad" style={{ margin: '1.25rem 0' }}>
                                    <span className="in-feed-ad-label">Sponsored</span>
                                    <div className="in-feed-ad-content">
                                        🚀 <strong style={{ color: 'var(--text-primary)' }}>Build with AI faster</strong> — Try the #1 AI-powered development platform. Join 500K+ developers. <a href="#" style={{ color: 'var(--cyan)', textDecoration: 'none' }}>Start free →</a>
                                    </div>
                                </div>
                            )}

                            <div className="news-grid" style={{ marginBottom: '0' }}>
                                {grid.slice(3, 9).map((article, i) => (
                                    <ArticleCard key={article.id} article={article} index={i + 3} />
                                ))}
                            </div>

                            {/* Premium Upgrade Banner */}
                            {grid.length > 9 && !userEmail && (
                                <div style={{
                                    margin: '1.25rem 0',
                                    padding: '2rem',
                                    background: 'linear-gradient(135deg, rgba(8,13,26,0.95), rgba(0,212,255,0.05))',
                                    border: '1px solid rgba(0,212,255,0.2)',
                                    borderRadius: '16px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    gap: '2rem',
                                    flexWrap: 'wrap'
                                }}>
                                    <div style={{ flex: '1 1 300px' }}>
                                        <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#00D4FF', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>NexusAI Daily Pro</div>
                                        <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '8px' }}>Unlock the full potential of AI</h3>
                                        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                                            Get unlimited article access, zero ads, breaking news alerts, and our exclusive 7am daily briefing.
                                        </p>
                                    </div>
                                    <a href="/premium" style={{
                                        background: 'linear-gradient(135deg, #00D4FF, #7C3AED)',
                                        color: '#FFF',
                                        padding: '12px 24px',
                                        borderRadius: '8px',
                                        textDecoration: 'none',
                                        fontWeight: 700,
                                        fontSize: '0.95rem',
                                        whiteSpace: 'nowrap'
                                    }}>
                                        View Plans →
                                    </a>
                                </div>
                            )}

                            <div className="news-grid">
                                {grid.slice(9).map((article, i) => (
                                    <ArticleCard key={article.id} article={article} index={i + 9} />
                                ))}
                            </div>
                        </>
                    )}
                </main>

                <Sidebar trending={initialArticles.slice(0, 5)} userEmail={userEmail} />
            </div>

            <footer>
                <div className="footer-inner">
                    <div style={{ fontWeight: 700, fontSize: '1rem', background: 'linear-gradient(135deg, #00D4FF, #7C3AED)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                        NexusAI Daily
                    </div>
                    <nav className="footer-links">
                        <a href="/about" className="footer-link">About</a>
                        <a href="/privacy" className="footer-link">Privacy</a>
                        <a href="/terms" className="footer-link">Terms</a>
                        <a href="/advertise" className="footer-link">Advertise</a>
                        <a href="/contact" className="footer-link">Contact</a>
                        <a href="/premium" className="footer-link" style={{ color: '#00D4FF', fontWeight: 700 }}>⭐ Premium</a>
                    </nav>
                    <p>© 2026 NexusAI Daily. News aggregated from public RSS feeds.</p>
                    <p style={{ fontSize: '0.7rem' }}>Content belongs to respective publishers. NexusAI Daily is an independent news aggregator.</p>
                </div>
            </footer>
        </>
    );
}
