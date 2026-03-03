import Link from 'next/link';

export const metadata = {
    title: 'Terms of Service — NexusAI Daily',
    description: 'Terms of service for NexusAI Daily news aggregator.',
};

export default function TermsPage() {
    const date = 'March 3, 2026';

    return (
        <div style={{ minHeight: '100vh', background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
            <nav style={{ position: 'sticky' as const, top: 0, background: 'rgba(8,13,26,0.9)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.07)', padding: '0 1.5rem', zIndex: 50, display: 'flex', alignItems: 'center', gap: '1rem', height: '60px' }}>
                <Link href="/" style={{ textDecoration: 'none', fontWeight: 800, fontSize: '1.1rem', background: 'linear-gradient(135deg, #00D4FF, #7C3AED)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    ⚡ NexusAI Daily
                </Link>
                <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
                <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>Terms of Service</span>
            </nav>

            <div style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 1.5rem' }}>
                <div style={{ marginBottom: '3rem' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' as const, color: '#00D4FF', marginBottom: '12px' }}>Legal</div>
                    <h1 style={{ fontSize: '2.2rem', fontWeight: 900, color: '#FFFFFF', marginBottom: '0.5rem' }}>Terms of Service</h1>
                    <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem' }}>Last updated: {date}</p>
                </div>

                {[
                    {
                        title: '1. Acceptance of Terms',
                        content: 'By accessing NexusAI Daily ("the Site"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Site.',
                    },
                    {
                        title: '2. Description of Service',
                        content: 'NexusAI Daily is a news aggregation service that collects and displays publicly available content from third-party RSS feeds. We do not create original content. All articles link to their original source publications.',
                    },
                    {
                        title: '3. Content & Intellectual Property',
                        content: 'All article content displayed on NexusAI Daily belongs to its respective original publishers. NexusAI Daily claims no ownership over third-party content. The NexusAI Daily brand, logo, and original design elements are the property of NexusAI Daily.',
                    },
                    {
                        title: '4. Disclaimer of Warranties',
                        content: 'The Site is provided "as is" without warranties of any kind. We do not guarantee the accuracy, completeness, or timeliness of any content aggregated from third-party sources. NexusAI Daily is not responsible for any errors or omissions in third-party content.',
                    },
                    {
                        title: '5. Limitation of Liability',
                        content: 'NexusAI Daily shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of the Site or inability to access the Site, including any decisions made based on content displayed on the Site.',
                    },
                    {
                        title: '6. Advertising',
                        content: 'The Site displays advertisements from Google AdSense and potentially direct advertisers. Advertisements are clearly labeled. NexusAI Daily is not responsible for the content of third-party advertisements.',
                    },
                    {
                        title: '7. Newsletter',
                        content: 'By subscribing to our newsletter, you consent to receive email communications from NexusAI Daily. You can unsubscribe at any time by clicking the unsubscribe link in any email. We will not share your email address with third parties.',
                    },
                    {
                        title: '8. External Links',
                        content: 'The Site contains links to third-party websites. These links are provided for your convenience. NexusAI Daily has no control over the content of those sites and accepts no responsibility for them.',
                    },
                    {
                        title: '9. Changes to Terms',
                        content: 'We reserve the right to modify these Terms at any time. Continued use of the Site after changes are posted constitutes acceptance of the revised terms.',
                    },
                    {
                        title: '10. Contact',
                        content: 'For any questions regarding these Terms, contact us at: legal@nexusaidaily.com',
                    },
                ].map((section) => (
                    <div key={section.title} style={{ marginBottom: '1.75rem' }}>
                        <h2 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.5rem', borderBottom: '1px solid rgba(0,212,255,0.15)', paddingBottom: '6px' }}>
                            {section.title}
                        </h2>
                        <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, fontSize: '0.95rem' }}>{section.content}</p>
                    </div>
                ))}

                <div style={{ textAlign: 'center' as const, marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.07)', display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
                    {[['/', 'Home'], ['/about', 'About'], ['/privacy', 'Privacy'], ['/contact', 'Contact']].map(([href, label]) => (
                        <Link key={href} href={href} style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '0.85rem' }}>{label}</Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
