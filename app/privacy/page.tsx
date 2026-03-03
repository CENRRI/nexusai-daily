import Link from 'next/link';

export const metadata = {
    title: 'Privacy Policy — NexusAI Daily',
    description: 'Privacy policy for NexusAI Daily. Learn how we collect and use data.',
};

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

const sectionStyle: React.CSSProperties = {
    marginBottom: '2.5rem',
};

const h2Style: React.CSSProperties = {
    fontSize: '1.15rem',
    fontWeight: 700,
    color: '#FFFFFF',
    marginBottom: '0.75rem',
    paddingBottom: '8px',
    borderBottom: '1px solid rgba(0,212,255,0.2)',
};

const pStyle: React.CSSProperties = {
    color: 'rgba(255,255,255,0.65)',
    lineHeight: 1.8,
    fontSize: '0.95rem',
    marginBottom: '0.75rem',
};

const ulStyle: React.CSSProperties = {
    color: 'rgba(255,255,255,0.65)',
    lineHeight: 1.8,
    fontSize: '0.95rem',
    paddingLeft: '1.5rem',
};

export default function PrivacyPage() {
    const date = 'March 3, 2026';

    return (
        <div style={pageStyle}>
            <nav style={{ position: 'sticky' as const, top: 0, background: 'rgba(8,13,26,0.9)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.07)', padding: '0 1.5rem', zIndex: 50, display: 'flex', alignItems: 'center', gap: '1rem', height: '60px' }}>
                <Link href="/" style={{ textDecoration: 'none', fontWeight: 800, fontSize: '1.1rem', background: 'linear-gradient(135deg, #00D4FF, #7C3AED)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    ⚡ NexusAI Daily
                </Link>
                <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
                <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>Privacy Policy</span>
            </nav>

            <div style={containerStyle}>
                <div style={{ marginBottom: '3rem' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' as const, color: '#00D4FF', marginBottom: '12px' }}>Legal</div>
                    <h1 style={{ fontSize: '2.2rem', fontWeight: 900, color: '#FFFFFF', marginBottom: '0.5rem' }}>Privacy Policy</h1>
                    <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem' }}>Last updated: {date}</p>
                </div>

                <div style={sectionStyle}>
                    <p style={pStyle}>
                        NexusAI Daily ("we", "us", or "our") operates the website nexusaidaily.com ("the Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal information when you use our Service.
                    </p>
                </div>

                <div style={sectionStyle}>
                    <h2 style={h2Style}>1. Information We Collect</h2>
                    <p style={pStyle}>We collect several types of information for various purposes to provide and improve our Service:</p>
                    <ul style={ulStyle}>
                        <li><strong style={{ color: '#FFFFFF' }}>Email address</strong> — if you subscribe to our newsletter</li>
                        <li><strong style={{ color: '#FFFFFF' }}>Usage data</strong> — pages visited, time on site, browser type (via Google Analytics)</li>
                        <li><strong style={{ color: '#FFFFFF' }}>Cookies</strong> — small files stored on your device to improve your experience</li>
                        <li><strong style={{ color: '#FFFFFF' }}>Log data</strong> — IP address, browser version, time and date of visits</li>
                    </ul>
                </div>

                <div style={sectionStyle}>
                    <h2 style={h2Style}>2. How We Use Your Information</h2>
                    <ul style={ulStyle}>
                        <li>To send you our daily AI news briefing (newsletter subscribers only)</li>
                        <li>To analyze site traffic and improve our service</li>
                        <li>To serve relevant advertisements via Google AdSense</li>
                        <li>To detect and prevent fraud or abuse</li>
                    </ul>
                </div>

                <div style={sectionStyle}>
                    <h2 style={h2Style}>3. Google AdSense & Cookies</h2>
                    <p style={pStyle}>
                        We use Google AdSense to serve advertisements. Google may use cookies to serve ads based on your prior visits to our site and other websites. You may opt out of personalized advertising by visiting{' '}
                        <a href="https://www.google.com/settings/ads" style={{ color: '#00D4FF' }} target="_blank" rel="noopener noreferrer">Google Ads Settings</a>.
                    </p>
                    <p style={pStyle}>
                        Third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to our website or other websites. Google's use of advertising cookies enables it and its partners to serve ads based on visits to our site and/or other sites on the Internet.
                    </p>
                </div>

                <div style={sectionStyle}>
                    <h2 style={h2Style}>4. Data Sharing</h2>
                    <p style={pStyle}>We do not sell, trade, or rent your personal data to third parties. We may share aggregated, non-personally identifiable information for analytics purposes. We use the following third-party services:</p>
                    <ul style={ulStyle}>
                        <li>Google Analytics — website analytics</li>
                        <li>Google AdSense — display advertising</li>
                        <li>Mailchimp/ConvertKit — newsletter delivery (for subscribers only)</li>
                    </ul>
                </div>

                <div style={sectionStyle}>
                    <h2 style={h2Style}>5. Your Rights (GDPR / CCPA)</h2>
                    <p style={pStyle}>Depending on your location, you may have the following rights:</p>
                    <ul style={ulStyle}>
                        <li>Right to access the personal data we hold about you</li>
                        <li>Right to request deletion of your data</li>
                        <li>Right to opt out of newsletter communications at any time</li>
                        <li>Right to opt out of personalized advertising</li>
                    </ul>
                    <p style={pStyle}>To exercise any of these rights, contact us at <a href="mailto:privacy@nexusaidaily.com" style={{ color: '#00D4FF' }}>privacy@nexusaidaily.com</a></p>
                </div>

                <div style={sectionStyle}>
                    <h2 style={h2Style}>6. Data Retention</h2>
                    <p style={pStyle}>
                        Newsletter subscriber emails are retained until you unsubscribe. Analytics data is retained according to Google Analytics default policies (26 months). You may request deletion of your data at any time.
                    </p>
                </div>

                <div style={sectionStyle}>
                    <h2 style={h2Style}>7. Children's Privacy</h2>
                    <p style={pStyle}>
                        Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13.
                    </p>
                </div>

                <div style={sectionStyle}>
                    <h2 style={h2Style}>8. Changes to This Policy</h2>
                    <p style={pStyle}>
                        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. Changes are effective immediately upon posting.
                    </p>
                </div>

                <div style={sectionStyle}>
                    <h2 style={h2Style}>9. Contact Us</h2>
                    <p style={pStyle}>If you have any questions about this Privacy Policy, contact us at:</p>
                    <p style={{ ...pStyle, color: '#00D4FF' }}>privacy@nexusaidaily.com</p>
                </div>

                <div style={{ textAlign: 'center' as const, marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
                        {[['/', 'Home'], ['/about', 'About'], ['/terms', 'Terms'], ['/contact', 'Contact']].map(([href, label]) => (
                            <Link key={href} href={href} style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '0.85rem' }}>
                                {label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
