import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Section,
    Text,
    Font,
} from '@react-email/components';
import * as React from 'react';

interface ArticleInfo {
    title: string;
    link: string;
    description: string;
    pubDate: string;
    source: string;
    imageUrl?: string;
}

interface DailyNewsletterProps {
    articles: ArticleInfo[];
}

export const DailyNewsletter = ({ articles = [] }: DailyNewsletterProps) => {
    return (
        <Html>
            <Head>
                <Font
                    fontFamily="Inter"
                    fallbackFontFamily="Helvetica"
                    webFont={{
                        url: "https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZhrib2Bg-4.ttf",
                        format: "woff2",
                    }}
                    fontWeight={400}
                    fontStyle="normal"
                />
            </Head>
            <Preview>Tus 5 noticias de Inteligencia Artificial más importantes del día.</Preview>
            <Body style={main}>
                <Container style={container}>
                    {/* Header */}
                    <Section style={header}>
                        <Heading style={heading}>NexusAI Daily</Heading>
                        <Text style={headerSub}>This Week in AI</Text>
                    </Section>

                    <Hr style={divider} />

                    {/* Articles Feed */}
                    {articles.map((article, idx) => (
                        <Section key={idx} style={articleSection}>
                            {article.imageUrl && (
                                <Img
                                    src={article.imageUrl}
                                    width="100%"
                                    height="220"
                                    alt={article.title}
                                    style={articleImage}
                                />
                            )}
                            <Text style={articleSource}>
                                {article.source.toUpperCase()}
                            </Text>
                            <Link href={article.link} style={articleTitleLink}>
                                {article.title}
                            </Link>
                            <Text style={articleExcerpt}>
                                {article.description.length > 200
                                    ? `${article.description.substring(0, 200)}...`
                                    : article.description}
                            </Text>
                        </Section>
                    ))}

                    <Hr style={divider} />

                    {/* Footer */}
                    <Section style={footer}>
                        <Text style={footerText}>
                            © {new Date().getFullYear()} NexusAI Daily. La inteligencia artificial al instante.
                        </Text>
                        <Text style={footerText}>
                            Has recibido este correo electrónico porque eres miembro de NexusAI Pro.
                            <Link href="https://nexusai-daily.vercel.app/dashboard" style={footerLink}>
                                Gestiona tu suscripción aquí
                            </Link>.
                        </Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
};

export default DailyNewsletter;

// --- Estilos en Linea (Requeridos para compatibilidad de correos electrónicos) ---

const main = {
    backgroundColor: '#f6f6f6',
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
    backgroundColor: '#ffffff',
    margin: '0 auto',
    padding: '20px 0 48px',
    marginBottom: '64px',
    maxWidth: '600px',
};

const header = {
    padding: '32px 32px 0px 32px',
    textAlign: 'center' as const,
};

const heading = {
    fontSize: '32px',
    lineHeight: '1.2',
    fontWeight: '800',
    color: '#0A0F1E',
    margin: '0',
    letterSpacing: '-1px',
};

const headerSub = {
    fontSize: '14px',
    color: '#1d1c1d',
    textTransform: 'uppercase' as const,
    letterSpacing: '2px',
    margin: '8px 0 24px 0',
    fontWeight: '600',
};

const divider = {
    borderTop: '2px solid #0A0F1E',
    margin: '0 32px',
};

const articleSection = {
    padding: '24px 32px',
};

const articleImage = {
    borderRadius: '4px',
    objectFit: 'cover' as const,
    marginBottom: '16px',
    backgroundColor: '#e0e0e0',
};

const articleSource = {
    fontSize: '11px',
    color: '#7C3AED',
    textTransform: 'uppercase' as const,
    letterSpacing: '1px',
    fontWeight: '700',
    margin: '0 0 8px 0',
};

const articleTitleLink = {
    fontSize: '20px',
    color: '#095db6', // Nature style blue
    fontWeight: '700',
    textDecoration: 'none',
    lineHeight: '1.4',
    display: 'block',
    marginBottom: '8px',
};

const articleExcerpt = {
    fontSize: '15px',
    lineHeight: '1.6',
    color: '#333333',
    margin: '0',
};

const footer = {
    padding: '32px',
    textAlign: 'center' as const,
};

const footerText = {
    fontSize: '12px',
    lineHeight: '1.5',
    color: '#666666',
    margin: '8px 0',
};

const footerLink = {
    color: '#095db6',
    textDecoration: 'underline',
};
