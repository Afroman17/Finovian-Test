import GaugeChart from '@/components/GaugeChart';
import ScoreBreakdownBar from '@/components/ScoreBreakdownBar';
import Step1Card from '@/components/Step1Card';
import LockedStepCard from '@/components/LockedStepCard';

const scoreBreakdown = [
  { label: 'Emergency Funds', score: 0, max: 20 },
  { label: 'Liquidity', score: 11, max: 20 },
  { label: 'Investments', score: 20, max: 20 },
  { label: 'Health Insurance', score: 20, max: 20 },
  { label: 'Life Insurance', score: 7, max: 20 },
  { label: 'Savings', score: 16, max: 20 },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#E8EFF8]">
      {/* ── Header ── */}
      <header className="py-5 text-center">
        <span className="text-[22px] font-semibold tracking-tight text-[#3B7C94]">
          wealthup
        </span>
      </header>

      <main className="mx-auto max-w-[1079px] px-6 pb-10">
        {/* ── Greeting Row ── */}
        <div className="flex items-start justify-between mb-5">
          <div>
            <h1 className="text-[22px] font-normal leading-snug text-[#1B3552]">
              Good Morning, <span className="font-bold">Ankit!</span>
            </h1>
            <p className="mt-1 text-[15px] text-[#4A5568]">
              At <strong>28</strong>, your income is strong, but your wealth efficiency is lagging.
            </p>
          </div>

          {/* Verified badge */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[13px] font-medium shrink-0 bg-[#DCFCE7] text-[#166534]">
            <span className="w-4 h-4 rounded-full flex items-center justify-center text-white text-[10px] font-bold bg-[#16A34A]">
              ✓
            </span>
            Verified Analysis
          </div>
        </div>

        {/* ── Wealth Score Card ── */}
        <div className="rounded-2xl p-6 mb-4 bg-white shadow-[0_0_16px_4px_rgba(147,197,253,0.75)]">
          <div className="flex gap-8">
            {/* LEFT: Gauge */}
            <div className="shrink-0 w-[280px]">
              <div className="relative">
                <GaugeChart score={43} maxScore={100} />

                {/* Tooltip bubble with pointer, matching design */}
                <div className="absolute top-0.5 right-1">
                  <div className="relative w-[155px] rounded-xl text-[11.5px] leading-relaxed px-3 py-2 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.12)] border border-[#E8EFF8] text-[#374151]">
                    You need{' '}
                    <span className="font-bold text-[#1B3552]">+27</span>{' '}
                    points to reach a{' '}
                    <span className="font-medium text-[#16A34A]">good</span>{' '}
                    score of{' '}
                    <span className="font-bold text-[#1B3552]">70</span>

                    {/* Pointer "tail" */}
                    <div className="absolute -bottom-1 left-8 w-3 h-3 bg-white border-l border-b border-[#E8EFF8] rotate-45 shadow-[0_1px_4px_rgba(15,23,42,0.12)]" />
                  </div>
                </div>
              </div>

              <p className="text-center text-[12px] italic mt-0.5 text-[#9CA3AF]">
                Better than 46% of peers
              </p>
            </div>

            {/* RIGHT: FI Age + Score Breakdown */}
            <div className="flex-1 min-w-0">
              {/* Financial Independence Age */}
              <h2 className="text-[13px] font-medium mb-3 text-[#1B3552]">
                Financial independence age
              </h2>

              <div className="rounded-xl p-4 mb-5 bg-[#F0F5FB]">
                <div className="flex items-center gap-3">
                  {/* Current Trajectory */}
                  <div className="flex-1 text-center">
                    <p className="text-[11px] mb-1 text-[#6B7FA3]">Current Trajectory</p>
                    <p className="text-[38px] font-bold leading-none text-[#1B3552]">65</p>
                  </div>

                  {/* Badge */}
                  <div className="px-2 py-1 rounded-full text-[10.5px] font-semibold text-white flex-shrink-0 text-center bg-[#22C55E]">
                    + 27 years sooner!
                  </div>

                  {/* Your Potential */}
                  <div className="flex-1 text-center">
                    <p className="text-[11px] font-medium mb-1 text-[#0F7B8C]">Your Potential</p>
                    <p className="text-[38px] font-bold leading-none text-[#0F7B8C]">38</p>
                  </div>
                </div>

                <div className="flex mt-3">
                  <p className="flex-1 text-center text-[10.5px] text-[#9CA3AF]">
                    Based on current savings you have
                  </p>
                  <p className="flex-1 text-center text-[10.5px] text-[#9CA3AF]">
                    By following our personalized roadmap
                  </p>
                </div>
              </div>

              {/* Score Breakdown */}
              <h2 className="text-[13px] font-medium mb-3 text-[#1B3552]">
                Your score breakdown
              </h2>
              <div className="grid grid-cols-3 gap-x-6 gap-y-4">
                {scoreBreakdown.map((item) => (
                  <ScoreBreakdownBar key={item.label} {...item} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Roadmap Section ── */}
        <div className="rounded-2xl p-4 bg-white shadow-[0_0_16px_4px_rgba(147,197,253,0.75)]">
          <h2 className="text-[16px] mb-3 text-[#1B3552]">
            Your personalized roadmap to{' '}
            <span className="font-bold">70+ WealthUp</span> score
          </h2>

          <div className="grid grid-cols-3 gap-3">
            <Step1Card />
            <LockedStepCard
              stepNumber={2}
              title="Optimize investments"
              description="Invest regularly to build long-term wealth. Explore diversified mutual funds and asset allocation strategies tailored to your risk profile."
              ctaLabel="Begin Investing"
              pts={12}
            />
            <LockedStepCard
              stepNumber={3}
              title="Maximize growth"
              description="Accelerate your financial future by reviewing advanced growth options, retirement planning, and tax-efficient investment vehicles."
              ctaLabel="Analyse your Mutual Funds"
              pts={8}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
