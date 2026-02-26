'use client';

interface GaugeChartProps {
  score: number;
  maxScore?: number;
}

export default function GaugeChart({ score, maxScore = 100 }: GaugeChartProps) {
  const cx = 120;
  const cy = 130;
  const R = 95;
  const sw = 20;
  const START = 150;  // 8 o'clock in SVG degrees (clockwise from 3 o'clock)
  const TOTAL = 240;  // total sweep in degrees

  const toRad = (d: number) => (d * Math.PI) / 180;

  const pt = (angleDeg: number) => ({
    x: cx + R * Math.cos(toRad(angleDeg)),
    y: cy + R * Math.sin(toRad(angleDeg)),
  });

  const arc = (startDeg: number, sweepDeg: number): string => {
    const s = pt(startDeg);
    const e = pt(startDeg + sweepDeg);
    const large = sweepDeg > 180 ? 1 : 0;
    return `M${s.x.toFixed(2)} ${s.y.toFixed(2)} A${R} ${R} 0 ${large} 1 ${e.x.toFixed(2)} ${e.y.toFixed(2)}`;
  };

  const valSweep = (Math.min(score, maxScore) / maxScore) * TOTAL;
  const tip = pt(START + valSweep);

  return (
    <svg viewBox="0 0 240 195" className="w-full" aria-label={`Score: ${score}`}>
      {/* Arrow marker for dashed line */}
      <defs>
        <marker id="arr" markerWidth="5" markerHeight="4" refX="5" refY="2" orient="auto">
          <polygon points="0 0, 5 2, 0 4" fill="#94A3B8" />
        </marker>
      </defs>

      {/* Background track */}
      <path
        d={arc(START, TOTAL)}
        fill="none"
        stroke="#E2ECF5"
        strokeWidth={sw}
        strokeLinecap="round"
      />

      {/* Value arc */}
      {valSweep > 0 && (
        <path
          d={arc(START, Math.max(valSweep, 2))}
          fill="none"
          stroke="#E85C4A"
          strokeWidth={sw}
          strokeLinecap="round"
        />
      )}

      {/* Dashed connecting line: tip → tooltip area */}
      <line
        x1={(tip.x + 4).toFixed(2)}
        y1={(tip.y + 6).toFixed(2)}
        x2="152"
        y2="54"
        stroke="#94A3B8"
        strokeWidth="1"
        strokeDasharray="3 2.5"
        markerEnd="url(#arr)"
      />

      {/* Score number */}
      <text
        x={cx}
        y={cy + 8}
        textAnchor="middle"
        fill="#E85C4A"
        fontSize="46"
        fontWeight="bold"
        fontFamily="sans-serif"
      >
        {score}
      </text>

      {/* Score label */}
      <text
        x={cx}
        y={cy + 30}
        textAnchor="middle"
        fill="#1B3552"
        fontSize="11.5"
        fontFamily="sans-serif"
      >
        Current WealthUp Score
      </text>
    </svg>
  );
}
