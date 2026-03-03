import { Article } from '@/lib/rss';
import { formatDistanceToNow } from 'date-fns';
import Image from 'next/image';

interface Props {
    article: Article;
}

export default function HeroArticle({ article }: Props) {
    const timeAgo = (() => {
        try {
            return formatDistanceToNow(new Date(article.pubDate), { addSuffix: true });
        } catch { return 'Recently'; }
    })();

    return (
        <a href={article.link} target="_blank" rel="noopener noreferrer" className="hero-article" style={{ display: 'block' }}>
            <img
                src={article.imageUrl}
                alt={article.title}
                className="hero-image"
                onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80';
                }}
            />
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <span className="hero-badge">🔥 Top Story</span>
                <h1 className="hero-title">{article.title}</h1>
                <div className="hero-meta">
                    <span style={{ color: article.sourceColor, fontWeight: 700 }}>{article.source}</span>
                    <span>•</span>
                    <span>{timeAgo}</span>
                    <span>•</span>
                    <span>{article.category}</span>
                </div>
            </div>
        </a>
    );
}
