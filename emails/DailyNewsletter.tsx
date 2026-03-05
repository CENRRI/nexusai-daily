import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Link,
    Preview,
    Section,
    Text,
    Font,
    Button,
} from '@react-email/components';
import * as React from 'react';

interface ArticleInfo {
    title: string;
    link: string;
    description: string;
    pubDate: string;
    source: string;
    category: string;
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
            <Preview>Su informe diario de noticias de Inteligencia Artificial.</Preview>
            <Body style={main}>
                <Container style={container}>
                    {/* Header: Logo and Title */}
                    <Section style={headerSection}>
                        <Text style={logoText}>NexusAI<span style={{ color: '#0066cc' }}>.daily</span></Text>
                        <Heading style={heading}>Su informe diario</Heading>
                        <Text style={headerSub}>
                            Estas son las {articles.length} historias que encontramos en las últimas 24 horas. Sintetizado a través de nuestras fuentes globales de IA.
                        </Text>
                    </Section>

                    {/* Main Articles */}
                    {articles.slice(0, 3).map((article, idx) => (
                        <Section key={idx} style={cardContainer}>
                            <Text style={categoryBadge}>
                                🔥 HOY EN IA / {article.category.toUpperCase()}
                            </Text>

                            <Heading as="h2" style={articleTitle}>
                                {article.title}
                            </Heading>

                            <Section style={summaryBox}>
                                <Text style={bulletPoint}>
                                    <span style={bulletDot}>•</span> {article.description.length > 300
                                        ? `${article.description.substring(0, 300)}...`
                                        : article.description}
                                </Text>
                            </Section>

                            <Section style={actionContainer}>
                                <Button href={article.link} style={primaryButton}>
                                    Lee la historia completa →
                                </Button>
                                {idx === 0 && (
                                    <Text style={feedbackText}>
                                        ¿Qué te pareció esto? 👍 👎
                                    </Text>
                                )}
                            </Section>
                        </Section>
                    ))}

                    <Hr style={divider} />

                    {/* Short News Feed */}
                    {articles.length > 3 && (
                        <Section style={newsListSection}>
                            <Heading as="h3" style={newsListTitle}>Noticias de la Web</Heading>
                            {articles.slice(3, 8).map((article, idx) => (
                                <Section key={idx} style={newsListItem}>
                                    <Text style={newsListText}>
                                        <strong>{article.title}</strong>{' '}
                                        <Link href={article.link} style={newsListLink}>
                                            Leer →
                                        </Link>
                                    </Text>
                                </Section>
                            ))}
                            <Section align="center" style={{ marginTop: '24px' }}>
                                <Button href="https://nexusai-daily.vercel.app" style={feedButton}>
                                    Ver todas las historias en tu feed →
                                </Button>
                            </Section>
                        </Section>
                    )}

                    {/* Promo Box */}
                    <Section style={promoBox}>
                        <Text style={promoBadge}>
                            ✨ Ayúdanos - comparte este boletín
                        </Text>
                        <Heading as="h3" style={promoTitle}>Modelos de Negocio en la nueva economía Agentic</Heading>
                        <Text style={promoText}>
                            Síguenos en nuestras redes sociales y comparte las noticias sobre Inteligencia Artificial
                            directamente desde NexusAI Daily. ¿Quieres desbloquear reportes corporativos?
                        </Text>
                        <Button href="https://nexusai-daily.vercel.app/dashboard" style={primaryButton}>
                            Hazte Premium Aquí →
                        </Button>
                    </Section>

                    {/* Footer */}
                    <Section style={footer}>
                        <Text style={footerText}>
                            Copyright © {new Date().getFullYear()} NexusAI. Todos los derechos reservados.<br />
                            Has recibido este correo electrónico porque eres miembro de NexusAI Pro.<br />
                            San Francisco, CA 94105
                        </Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
};

export default DailyNewsletter;

// --- Emojis and Rounded CSS Constants (Agentic.ai style clone) ---

const main = {
    backgroundColor: '#fafbfc',
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif',
};

const container = {
    margin: '0 auto',
    padding: '24px 0 48px',
    maxWidth: '600px',
};

const headerSection = {
    padding: '0 16px 24px',
};

const logoText = {
    fontSize: '20px',
    fontWeight: '700',
    color: '#111827',
    letterSpacing: '-0.5px',
    margin: '0 0 32px 0',
};

const heading = {
    fontSize: '28px',
    lineHeight: '1.2',
    fontWeight: '800',
    color: '#111827',
    margin: '0 0 12px 0',
    letterSpacing: '-1px',
};

const headerSub = {
    fontSize: '16px',
    lineHeight: '1.5',
    color: '#4B5563',
    margin: '0',
};

const cardContainer = {
    backgroundColor: '#ffffff',
    border: '1px solid #e5e7eb',
    borderRadius: '16px',
    padding: '24px',
    margin: '0 16px 24px',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
};

const categoryBadge = {
    fontSize: '11px',
    fontWeight: '700',
    color: '#4B5563',
    backgroundColor: '#f3f4f6',
    display: 'inline-block',
    padding: '4px 10px',
    borderRadius: '6px',
    margin: '0 0 16px 0',
    letterSpacing: '0.5px',
};

const articleTitle = {
    fontSize: '22px',
    fontWeight: '700',
    color: '#111827',
    margin: '0 0 16px 0',
    lineHeight: '1.3',
};

const summaryBox = {
    backgroundColor: '#f8fafc',
    borderLeft: '4px solid #3b82f6',
    padding: '16px',
    borderRadius: '0 8px 8px 0',
    margin: '0 0 20px 0',
};

const bulletPoint = {
    fontSize: '15px',
    lineHeight: '1.6',
    color: '#374151',
    margin: '0',
};

const bulletDot = {
    color: '#9ca3af',
    fontWeight: 'bold',
};

const actionContainer = {
    textAlign: 'center' as const,
};

const primaryButton = {
    backgroundColor: '#111827',
    color: '#ffffff',
    padding: '12px 24px',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '600',
    textDecoration: 'none',
    display: 'inline-block',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

const feedbackText = {
    fontSize: '13px',
    color: '#6B7280',
    marginTop: '16px',
    marginBottom: '0',
    fontWeight: '500',
};

const divider = {
    borderTop: '1px solid #e5e7eb',
    margin: '32px 16px',
};

const newsListSection = {
    padding: '0 16px 24px',
};

const newsListTitle = {
    fontSize: '18px',
    fontWeight: '700',
    color: '#111827',
    margin: '0 0 16px 0',
};

const newsListItem = {
    marginBottom: '12px',
    paddingBottom: '12px',
    borderBottom: '1px solid #f3f4f6',
};

const newsListText = {
    fontSize: '15px',
    lineHeight: '1.5',
    color: '#374151',
    margin: '0',
};

const newsListLink = {
    color: '#2563eb',
    textDecoration: 'none',
    fontWeight: '600',
};

const feedButton = {
    backgroundColor: '#111827',
    color: '#ffffff',
    padding: '12px 24px',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '600',
    textDecoration: 'none',
    display: 'inline-block',
};

const promoBox = {
    backgroundColor: '#fffdf0', // Pale yellow 
    border: '2px dashed #fcd34d',
    borderRadius: '16px',
    padding: '24px',
    margin: '24px 16px',
    textAlign: 'center' as const,
};

const promoBadge = {
    fontSize: '12px',
    fontWeight: '700',
    color: '#b45309',
    backgroundColor: '#fef3c7',
    display: 'inline-block',
    padding: '4px 12px',
    borderRadius: '12px',
    margin: '0 0 16px 0',
};

const promoTitle = {
    fontSize: '18px',
    fontWeight: '700',
    color: '#92400e',
    margin: '0 0 8px 0',
};

const promoText = {
    fontSize: '14px',
    lineHeight: '1.5',
    color: '#b45309',
    margin: '0 0 16px 0',
};

const footer = {
    padding: '0 16px',
    textAlign: 'center' as const,
};

const footerText = {
    fontSize: '12px',
    lineHeight: '1.6',
    color: '#9ca3af',
    margin: '0',
};
