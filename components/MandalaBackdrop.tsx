const SPOKES = 16;
const DOTS = 12;

export function MandalaBackdrop() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      <svg
        className="mandala-spin"
        width="900"
        height="900"
        viewBox="0 0 200 200"
        style={{ opacity: 0.08, minWidth: 700 }}
      >
        <g stroke="#7a1f2b" fill="none" strokeWidth="0.5">
          <circle cx="100" cy="100" r="90" />
          <circle cx="100" cy="100" r="75" />
          <circle cx="100" cy="100" r="60" />
          {Array.from({ length: SPOKES }).map((_, i) => {
            const angle = (i * 360) / SPOKES;
            const rad = (angle * Math.PI) / 180;
            return (
              <line
                key={i}
                x1="100"
                y1="100"
                x2={100 + 90 * Math.cos(rad)}
                y2={100 + 90 * Math.sin(rad)}
              />
            );
          })}
          {Array.from({ length: DOTS }).map((_, i) => {
            const angle = (i * 360) / DOTS;
            const rad = (angle * Math.PI) / 180;
            const x = 100 + 75 * Math.cos(rad);
            const y = 100 + 75 * Math.sin(rad);
            return <circle key={i} cx={x} cy={y} r="6" fill="#b8860b" fillOpacity={0.5} />;
          })}
        </g>
      </svg>
      <style>{`
        .mandala-spin { animation: mandalaSpin 100s linear infinite; }
        @keyframes mandalaSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @media (prefers-reduced-motion: reduce) {
          .mandala-spin { animation: none; }
        }
      `}</style>
    </div>
  );
}
