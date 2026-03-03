import { Article } from '@/lib/rss';
import { formatDistanceToNow } from 'date-fns';

interface Props {
    article: Article;
    index?: number;
}

export default function ArticleCard({ article, index = 0 }: Props) {
    const timeAgo = (() => {
        try {
            return formatDistanceToNow(new Date(article.pubDate), { addSuffix: true });
        } catch { return 'Recently'; }
    })();

    return (
        <a
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="article-card"
            style={{ animationDelay: `${index * 0.05}s` }}
        >
            <div className="card-image-wrap">
                <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="card-image"
                    onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80';
                    }}
                />
                <span
                    className="card-source-badge"
                    style={{ color: article.sourceColor, borderColor: article.sourceColor }}
                >
                    {article.source}
                </span>
            </div>

            <div className="card-body">
                {/* Category */}
                <span style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    textTransform: 'uppercase' as const,
                    letterSpacing: '0.08em',
                    color: '#00D4FF',
                }}>
                    {article.category}
                </span>

                {/* Title */}
                <h2 style={{
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    lineHeight: 1.4,
                    color: '#FFFFFF',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical' as const,
                    overflow: 'hidden',
                    margin: 0,
                }}>
                    {article.title}
                </h2>

                {/* Description */}
                <p style={{
                    fontSize: '0.88rem',
                    color: 'rgba(255,255,255,0.65)',
                    lineHeight: 1.6,
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical' as const,
                    overflow: 'hidden',
                    flex: 1,
                    margin: 0,
                }}>
                    {article.description}
                </p>

                {/* Footer */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '8px',
                    paddingTop: '8px',
                    borderTop: '1px solid rgba(255,255,255,0.07)',
                    fontSize: '0.78rem',
                    color: 'rgba(255,255,255,0.45)',
                }}>
                    <span>{timeAgo}</span>
                    <span style={{
                        color: '#00D4FF',
                        fontWeight: 600,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                    }}>
                        Read more →
                    </span>
                </div>
            </div>
        </a>
    );
}
