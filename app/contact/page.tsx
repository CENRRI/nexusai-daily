'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
    const [form, setForm] = useState({ name: '', email: '', subject: 'General', message: '' });
    const [sent, setSent] = useState(false);

    const subjects = ['General Inquiry', 'Advertising', 'Content Issue', 'Privacy Request', 'Newsletter', 'Other'];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Opens native email client with prefilled data
        const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
        const subject = encodeURIComponent(`[NexusAI Daily] ${form.subject}`);
        window.location.href = `mailto:hello@nexusaidaily.com?subject=${subject}&body=${body}`;
        setSent(true);
    };

    const inputStyle: React.CSSProperties = {
        width: '100%',
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,255,255,0.12)',
        borderRadius: '10px',
        padding: '12px 16px',
        color: '#FFFFFF',
        fontSize: '0.95rem',
        fontFamily: "'Outfit', sans-serif",
        outline: 'none',
        marginBottom: '1rem',
        transition: 'border-color 0.2s',
    };

    const labelStyle: React.CSSProperties = {
        display: 'block',
        fontSize: '0.8rem',
        fontWeight: 600,
        color: 'rgba(255,255,255,0.6)',
        marginBottom: '6px',
        textTransform: 'uppercase' as const,
        letterSpacing: '0.06em',
    };

    return (
        <div style={{ minHeight: '100vh', background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
            <nav style={{ position: 'sticky' as const, top: 0, background: 'rgba(8,13,26,0.9)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.07)', padding: '0 1.5rem', zIndex: 50, display: 'flex', alignItems: 'center', gap: '1rem', height: '60px' }}>
                <Link href="/" style={{ textDecoration: 'none', fontWeight: 800, fontSize: '1.1rem', background: 'linear-gradient(135deg, #00D4FF, #7C3AED)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    ⚡ NexusAI Daily
                </Link>
                <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
                <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>Contact</span>
            </nav>

            <div style={{ maxWidth: '760px', margin: '0 auto', padding: '4rem 1.5rem' }}>
                <div style={{ marginBottom: '3rem' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' as const, color: '#00D4FF', marginBottom: '12px' }}>Get In Touch</div>
                    <h1 style={{ fontSize: '2.2rem', fontWeight: 900, color: '#FFFFFF', marginBottom: '0.75rem' }}>Contact Us</h1>
                    <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                        Have a question, partnership proposal, or content issue? We&apos;d love to hear from you.
                    </p>
                </div>

                {/* Quick contacts */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
                    {[
                        { icon: '📬', label: 'General', email: 'hello@nexusaidaily.com' },
                        { icon: '💼', label: 'Advertising', email: 'ads@nexusaidaily.com' },
                        { icon: '🔒', label: 'Privacy', email: 'privacy@nexusaidaily.com' },
                    ].map((c) => (
                        <a key={c.label} href={`mailto:${c.email}`} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '1rem', textAlign: 'center' as const, textDecoration: 'none', transition: 'border-color 0.2s' }}>
                            <div style={{ fontSize: '1.5rem', marginBottom: '6px' }}>{c.icon}</div>
                            <div style={{ fontWeight: 700, color: '#FFFFFF', fontSize: '0.9rem' }}>{c.label}</div>
                            <div style={{ color: '#00D4FF', fontSize: '0.78rem', marginTop: '4px' }}>{c.email}</div>
                        </a>
                    ))}
                </div>

                {/* Form */}
                {sent ? (
                    <div style={{ textAlign: 'center' as const, padding: '3rem', background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.3)', borderRadius: '16px' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✉️</div>
                        <h2 style={{ color: '#10B981', fontSize: '1.3rem', fontWeight: 800, marginBottom: '0.5rem' }}>Message sent!</h2>
                        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>Your email client should have opened. We typically respond within 24 hours.</p>
                        <button onClick={() => setSent(false)} style={{ marginTop: '1.5rem', background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.6)', borderRadius: '8px', padding: '8px 20px', cursor: 'pointer', fontSize: '0.85rem' }}>
                            Send another
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '2rem' }}>
                        <h2 style={{ color: '#FFFFFF', fontSize: '1.15rem', fontWeight: 700, marginBottom: '1.5rem' }}>Send a Message</h2>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 1rem' }}>
                            <div>
                                <label style={labelStyle}>Your Name</label>
                                <input style={inputStyle} type="text" placeholder="John Doe" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                            </div>
                            <div>
                                <label style={labelStyle}>Your Email</label>
                                <input style={inputStyle} type="email" placeholder="you@example.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                            </div>
                        </div>

                        <label style={labelStyle}>Subject</label>
                        <select
                            style={{ ...inputStyle, cursor: 'pointer' }}
                            value={form.subject}
                            onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        >
                            {subjects.map((s) => <option key={s} value={s} style={{ background: '#111827' }}>{s}</option>)}
                        </select>

                        <label style={labelStyle}>Message</label>
                        <textarea
                            style={{ ...inputStyle, height: '140px', resize: 'vertical' as const }}
                            placeholder="Tell us what's on your mind..."
                            value={form.message}
                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                            required
                        />

                        <button
                            type="submit"
                            style={{ width: '100%', background: 'linear-gradient(135deg, #00D4FF, #7C3AED)', color: 'white', fontWeight: 700, fontSize: '1rem', fontFamily: "'Outfit', sans-serif", border: 'none', borderRadius: '10px', padding: '14px', cursor: 'pointer' }}
                        >
                            Send Message →
                        </button>
                        <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem', textAlign: 'center' as const, marginTop: '10px' }}>
                            This will open your email client to send via hello@nexusaidaily.com
                        </p>
                    </form>
                )}
            </div>
        </div>
    );
}
