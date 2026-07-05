export function OmWatermark() {
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
      <span
        className="om-watermark"
        style={{
          fontSize: "34rem",
          lineHeight: 1,
          color: "#7a1f2b",
          opacity: 0.05,
          fontFamily: "var(--font-cormorant), serif",
        }}
      >
        ॐ
      </span>
      <style>{`
        .om-watermark { animation: omPulse 8s ease-in-out infinite; }
        @keyframes omPulse {
          0%, 100% { opacity: 0.04; transform: scale(1); }
          50% { opacity: 0.07; transform: scale(1.03); }
        }
        @media (prefers-reduced-motion: reduce) {
          .om-watermark { animation: none; }
        }
      `}</style>
    </div>
  );
}
