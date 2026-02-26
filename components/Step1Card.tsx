'use client';
import { useState } from 'react';

const AMOUNTS = ['₹500', '₹1,000', '₹5,000', '₹6,000'];

export default function Step1Card() {
  const [selected, setSelected] = useState('₹500');

  return (
    <div className="flex flex-col rounded-2xl border border-[#1b3552] bg-white p-3 gap-1 shadow-[0_4px_16px_rgba(15,23,42,0.06)]">
      {/* Step label */}
      <p className="text-[11px] font-semibold mb-0.5 text-[#E85C4A]">Step 1: Critical</p>

      {/* Title */}
      <h3 className="text-[14px] font-bold leading-snug mb-1.5 text-[#1B3552]">
        Build your safety net (Emergency fund)
      </h3>

      {/* Description */}
      <p className="text-[11px] leading-normal mb-2 text-[#1b3552]">
        Ankit, avoid a potential 2-year setback. Build your emergency fund to be risk-free within
        the next 6 months.
      </p>

      {/* Commit row */}
      <p className="text-[11px] mb-1.5 text-[#1B3552]">
        I can commit to saving{' '}
        <span className="font-semibold px-1.5 py-0.5 rounded text-[10px] bg-[#F0F5FB] text-[#1B3552] border border-[#CBD5E1]">
          ₹500
        </span>{' '}
        monthly
      </p>

      {/* Amount buttons */}
      <div className="flex flex-wrap gap-1 mb-2">
        {AMOUNTS.map((amt) => (
          <button
            key={amt}
            onClick={() => setSelected(amt)}
            className={`px-1.5 py-0.5 rounded text-[10px] font-medium transition-colors border ${
              selected === amt
                ? 'bg-[#1B3552] text-white border-[#1B3552]'
                : 'bg-white text-[#1B3552] border-[#CBD5E1]'
            }`}
          >
            {amt}
          </button>
        ))}
        <input
          type="text"
          placeholder="₹ Enter amount"
          className="px-1.5 py-0.5 rounded text-[10px] outline-none flex-1 min-w-[70px] border border-[#CBD5E1] text-[#6B7FA3]"
        />
      </div>

      {/* Recommended Funds */}
      <p className="text-[10.5px] font-medium mb-1.5 text-[#1B3552]">
        Recommended Funds (Top performers)
      </p>
      <div className="flex gap-1.5 mb-2">
        {/* Fund 1 */}
        <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg flex-1 bg-[#F8FAFC] border border-[#E2E8F0]">
          <div className="w-6 h-6 rounded flex items-center justify-center text-white text-[9px] font-bold flex-shrink-0 bg-[#C0392B]">
            H
          </div>
          <div>
            <p className="text-[9.5px] font-semibold leading-tight text-[#1B3552]">
              HDFC Mid-Cap Fund
            </p>
            <p className="text-[9.5px] text-[#16A34A]">26.6% (3Y)</p>
          </div>
        </div>

        {/* Fund 2 */}
        <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg flex-1 bg-[#F8FAFC] border border-[#E2E8F0]">
          <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[9px] font-bold flex-shrink-0 bg-[#F97316]">
            B
          </div>
          <div>
            <p className="text-[9.5px] font-semibold leading-tight text-[#1B3552]">
              Bandhan Small Ca...
            </p>
            <p className="text-[9.5px] text-[#16A34A]">32% (3Y)</p>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex items-center">
          <span className="text-[#9CA3AF] text-sm">›</span>
        </div>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* CTA Button */}
      <button className="w-full flex items-center justify-center gap-2 py-2 rounded-full font-semibold text-[12px] text-white mb-1.5 bg-linear-to-r from-[#1B3552] via-[#2563EB] to-[#3B82F6]">
        Start Investing Today
        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-white text-[#22C55E]">
          +20 pts
        </span>
      </button>

      {/* Express setup */}
      <p className="text-center text-[10px] text-[#1B3552]">
        ⚡{' '}
        <span className="font-medium">Express setup</span>
        : Complete in under 3 minutes
      </p>
    </div>
  );
}
