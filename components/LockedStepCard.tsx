interface LockedStepCardProps {
  stepNumber: number;
  title: string;
  description: string;
  ctaLabel: string;
  pts: number;
}

export default function LockedStepCard({
  stepNumber,
  title,
  description,
  ctaLabel,
  pts,
}: LockedStepCardProps) {
  return (
    <div className="flex flex-col rounded-2xl bg-[#EDF2F9] p-3">
      {/* Step label */}
      <p className="text-[11px] font-medium mb-0.5 text-[#94A3B8]">Step {stepNumber}</p>

      {/* Title */}
      <h3 className="text-[14px] font-bold leading-snug mb-1.5 text-[#1B3552]">{title}</h3>

      {/* Description */}
      <p className="text-[11px] leading-normal text-[#1b3552]">{description}</p>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Locked CTA */}
      <button
        disabled
        className="w-full flex items-center justify-center gap-2 py-2 rounded-full font-semibold text-[12px] mb-1.5 cursor-not-allowed mt-3 bg-[#B0BEC5] text-[#78909C]"
      >
        {ctaLabel}
        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-white text-[#22C55E]">
          +{pts} pts
        </span>
      </button>

      {/* Unlock message */}
      <p className="text-center text-[10px] text-[#94A3B8]">
        🔒 Complete step 1 (critical) to unlock
      </p>
    </div>
  );
}
