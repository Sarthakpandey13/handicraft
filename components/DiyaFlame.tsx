export function DiyaFlame({ size = 40 }: { size?: number }) {
  const height = Math.round(size * 1.3);
  return (
    <div aria-hidden="true" style={{ width: size, height, display: "inline-block" }}>
      <svg viewBox="0 0 40 52" width={size} height={height}>
        <defs>
          <linearGradient id="diya-flame-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffe08a" />
            <stop offset="55%" stopColor="#f5a623" />
            <stop offset="100%" stopColor="#c9481c" />
          </linearGradient>
        </defs>
        <ellipse cx="20" cy="34" rx="17" ry="7" fill="#b8860b" />
        <ellipse cx="20" cy="32.5" rx="12.5" ry="4.2" fill="#7a1f2b" />
        <g className="diya-flame-flicker" style={{ transformOrigin: "20px 30px" }}>
          <path d="M20 8 C27 17 27 25 20 31 C13 25 13 17 20 8 Z" fill="url(#diya-flame-gradient)" />
        </g>
      </svg>
      <style>{`
        .diya-flame-flicker {
          animation: diyaFlicker 1.6s ease-in-out infinite;
        }
        @keyframes diyaFlicker {
          0%, 100% { transform: scaleY(1) scaleX(1) rotate(0deg); opacity: 1; }
          25% { transform: scaleY(1.08) scaleX(0.94) rotate(-2deg); opacity: 0.95; }
          50% { transform: scaleY(0.93) scaleX(1.06) rotate(1.5deg); opacity: 1; }
          75% { transform: scaleY(1.05) scaleX(0.96) rotate(-1deg); opacity: 0.92; }
        }
        @media (prefers-reduced-motion: reduce) {
          .diya-flame-flicker { animation: none; }
        }
      `}</style>
    </div>
  );
}
