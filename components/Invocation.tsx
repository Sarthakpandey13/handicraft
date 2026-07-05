import { invocation } from "@/lib/vedic";

export function Invocation() {
  return (
    <div
      style={{
        background: "linear-gradient(90deg, #5a1620, #7a1f2b, #5a1620)",
        color: "#f3e6c8",
        textAlign: "center",
        padding: "7px 1rem",
        fontSize: "12.5px",
        letterSpacing: "0.02em",
      }}
    >
      <span
        className="invocation-glow"
        aria-hidden="true"
        style={{
          display: "inline-block",
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "#e8b923",
          marginRight: 8,
          verticalAlign: "middle",
        }}
      />
      <span lang="sa" style={{ fontWeight: 600 }}>
        {invocation.sanskrit}
      </span>
      <span className="invocation-meaning" style={{ opacity: 0.75, marginLeft: 8 }}>
        — {invocation.meaning}
      </span>

      <style>{`
        .invocation-glow {
          animation: invocationPulse 2.2s ease-in-out infinite;
        }
        @keyframes invocationPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(232, 185, 35, 0.6); opacity: 0.7; }
          50% { box-shadow: 0 0 8px 3px rgba(232, 185, 35, 0.6); opacity: 1; }
        }
        @media (max-width: 640px) {
          .invocation-meaning { display: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          .invocation-glow { animation: none; }
        }
      `}</style>
    </div>
  );
}
