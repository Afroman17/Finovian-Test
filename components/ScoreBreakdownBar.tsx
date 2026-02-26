interface ScoreBreakdownBarProps {
  label: string;
  score: number;
  max: number;
}

export default function ScoreBreakdownBar({ label, score, max }: ScoreBreakdownBarProps) {
  const pct = (score / max) * 100;
  const gradient =
    'linear-gradient(to right, #EF4444 0%, #F97316 38%, #FACC15 62%, #22C55E 100%)';

  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-[11.5px] font-medium text-[#1B3552]">{label}</span>
        <span className="text-[11.5px] text-[#1B3552]">{score} / {max}</span>
      </div>

      {/* Track */}
      <div className="h-3 rounded-full overflow-hidden bg-[#E8EFF8]">
        {pct === 0 ? (
          <div className="h-full w-1 rounded-full bg-[#EF4444]" />
        ) : (
          <div
            className="h-full rounded-full"
            style={{
              width: `${pct}%`,
              backgroundImage: gradient,
            }}
          />
        )}
      </div>
    </div>
  );
}
