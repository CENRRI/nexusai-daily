const HEADLINES = [
    'OpenAI releases new reasoning model with 200K context',
    'Google DeepMind announces breakthrough in protein folding',
    'Anthropic raises $2B in latest funding round',
    'Meta open-sources new LLaMA variant with 405B parameters',
    'Microsoft Copilot now integrated into all Office 365 apps',
    'NVIDIA reveals next-gen AI chip at GTC 2026',
    'Mistral AI expands to enterprise customers in LATAM',
    'AI agents now handle 40% of customer service at major banks',
];

const wrapStyle: React.CSSProperties = {
    background: 'rgba(10, 16, 35, 0.98)',
    borderTop: '1px solid rgba(0, 212, 255, 0.25)',
    borderBottom: '1px solid rgba(255,255,255,0.07)',
    padding: '12px 0',
    overflow: 'hidden',
    position: 'relative',
    zIndex: 10,
};

const innerStyle: React.CSSProperties = {
    display: 'flex',
    gap: '4rem',
    animation: 'ticker-scroll 40s linear infinite',
    width: 'max-content',
};

const itemStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    whiteSpace: 'nowrap',
    fontSize: '0.95rem',
    fontWeight: 500,
    color: '#FFFFFF',
    letterSpacing: '0.01em',
    fontFamily: "'Outfit', sans-serif",
};

const dotStyle: React.CSSProperties = {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    background: '#00D4FF',
    flexShrink: 0,
    boxShadow: '0 0 6px rgba(0,212,255,0.6)',
};

export default function Ticker() {
    const doubled = [...HEADLINES, ...HEADLINES];

    return (
        <div style={wrapStyle}>
            <div style={innerStyle}>
                {doubled.map((headline, i) => (
                    <div key={i} style={itemStyle}>
                        <span style={dotStyle}></span>
                        <span>{headline}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
