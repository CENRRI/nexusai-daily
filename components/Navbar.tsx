'use client';

import { useState, useEffect } from 'react';

const categories = ['All', 'Startups', 'Tech', 'Business', 'Research'];

interface Props {
    onCategoryChange: (cat: string) => void;
    activeCategory: string;
    userEmail?: string | null;
}

export default function Navbar({ onCategoryChange, activeCategory, userEmail }: Props) {
    const [dateStr, setDateStr] = useState('');

    useEffect(() => {
        const now = new Date();
        setDateStr(now.toLocaleDateString('en-US', {
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
        }));
    }, []);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-inner">
                    <a href="/" className="logo">
                        <div className="logo-icon">⚡</div>
                        <span className="logo-text">NexusAI Daily</span>
                    </a>
                    <div className="live-badge">
                        <span className="live-dot"></span>
                        Live
                    </div>
                    <span className="navbar-date" style={{ marginLeft: 'auto', marginRight: '1rem' }}>{dateStr}</span>

                    {userEmail ? (
                        <a href="/dashboard" className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-sm font-bold text-white uppercase ml-4 shadow-[0_0_15px_rgba(0,212,255,0.3)] hover:scale-105 transition-transform" title="My Dashboard">
                            {userEmail.charAt(0)}
                        </a>
                    ) : (
                        <a href="/login" className="px-4 py-1.5 rounded-lg bg-[#ffffff10] border border-[#ffffff20] text-sm text-white hover:bg-[#ffffff20] transition-colors ml-4">
                            Sign In
                        </a>
                    )}
                </div>
            </nav>
            <div className="category-bar">
                <div className="category-bar-inner">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`cat-btn ${activeCategory === cat ? 'active' : ''}`}
                            onClick={() => onCategoryChange(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
}
