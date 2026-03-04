import Parser from 'rss-parser';

export interface Article {
    id: string;
    title: string;
    link: string;
    pubDate: string;
    source: string;
    sourceColor: string;
    imageUrl: string;
    description: string;
    category: string;
}

const FEEDS = [
    {
        url: 'https://techcrunch.com/category/artificial-intelligence/feed/',
        source: 'TechCrunch',
        color: '#00D4FF',
        category: 'Startups',
    },
    {
        url: 'https://www.theverge.com/ai-artificial-intelligence/rss/index.xml',
        source: 'The Verge',
        color: '#7C3AED',
        category: 'Tech',
    },
    {
        url: 'https://venturebeat.com/category/ai/feed/',
        source: 'VentureBeat',
        color: '#10B981',
        category: 'Business',
    },
    {
        url: 'https://www.wired.com/feed/category/artificial-intelligence/latest/rss',
        source: 'WIRED',
        color: '#F59E0B',
        category: 'Research',
    },
];

const FALLBACK_IMAGES = [
    'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80',
    'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80',
    'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&q=80',
    'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&q=80',
];

function extractImage(item: Parser.Item & { 'media:content'?: { $?: { url?: string } }; 'media:thumbnail'?: { $?: { url?: string } }; enclosure?: { url?: string } }): string {
    const content = item['media:content'];
    if (content?.$?.url) return content.$.url;
    const thumb = item['media:thumbnail'];
    if (thumb?.$?.url) return thumb.$.url;
    if (item.enclosure?.url && item.enclosure.url.match(/\.(jpg|jpeg|png|webp)/i)) {
        return item.enclosure.url;
    }
    const imgMatch = item.content?.match(/<img[^>]+src=["']([^"']+)["']/i);
    if (imgMatch) return imgMatch[1];
    return FALLBACK_IMAGES[Math.floor(Math.random() * FALLBACK_IMAGES.length)];
}

function stripHtml(html: string): string {
    return html.replace(/<[^>]*>/g, '').replace(/&[^;]+;/g, ' ').slice(0, 200).trim();
}

function determineCategory(title: string, desc: string): string {
    const text = (title + ' ' + desc).toLowerCase();

    // Research keywords
    if (text.match(/research|paper|study|university|mit|stanford|scientist|arxiv|model|training|architecture|experiment/)) {
        return 'Research';
    }
    // Startups keywords
    if (text.match(/startup|fund|seed|round|venture|founder|y combinator|series a|raised|incubator/)) {
        return 'Startups';
    }
    // Business keywords
    if (text.match(/business|enterprise|revenue|market|stock|shares|acquisition|ceo|earnings|b2b|corporate|investment|profit|economy|industry|executive|board|valuation|ipo|partnership|commercial|workforce|jobs|sales/)) {
        return 'Business';
    }

    // Default fallback to Tech
    return 'Tech';
}

export async function fetchAllArticles(): Promise<Article[]> {
    const parser = new Parser({
        customFields: {
            item: [['media:content', 'media:content'], ['media:thumbnail', 'media:thumbnail']],
        },
    });

    const results = await Promise.allSettled(
        FEEDS.map(async (feed) => {
            const parsed = await parser.parseURL(feed.url);
            return parsed.items.slice(0, 8).map((item, i): Article => {
                const title = item.title || 'Untitled';
                const description = stripHtml(item.contentSnippet || item.content || item.summary || '');
                return {
                    id: `${feed.source}-${i}-${Date.now()}`,
                    title,
                    link: item.link || '#',
                    pubDate: item.pubDate || new Date().toISOString(),
                    source: feed.source,
                    sourceColor: feed.color,
                    imageUrl: extractImage(item as Parser.Item & { 'media:content'?: { $?: { url?: string } }; 'media:thumbnail'?: { $?: { url?: string } }; enclosure?: { url?: string } }),
                    description,
                    category: determineCategory(title, description),
                };
            });
        })
    );

    const articles: Article[] = [];
    results.forEach((r) => {
        if (r.status === 'fulfilled') articles.push(...r.value);
    });

    // Shuffle to mix sources
    return articles.sort(() => Math.random() - 0.5);
}

export async function fetchByCategory(category: string): Promise<Article[]> {
    const all = await fetchAllArticles();
    if (category === 'All') return all;
    return all.filter((a) => a.category === category);
}
