'use client';

import { useState } from 'react';

const categories = ['All', 'Startups', 'Tech', 'Business', 'Research'];

interface Props {
    onCategoryChange: (cat: string) => void;
    activeCategory: string;
}

export default function Navbar({ onCategoryChange, activeCategory }: Props) {
    const now = new Date();
    const dateStr = now.toLocaleDateString('en-US', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
    });

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
                    <span className="navbar-date" style={{ marginLeft: 'auto' }}>{dateStr}</span>
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
