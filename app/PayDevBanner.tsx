"use client";

import React from "react";

export default function PayDevBanner() {
  const message = "PAY YOUR DEVELOPER!!!!!! ";
  // Repeat enough times to fill the screen seamlessly
  const repeated = message.repeat(10);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&display=swap');

        .pay-dev-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: #0a0a0a;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0;
          overflow: hidden;
        }

        /* Scanline texture */
        .pay-dev-overlay::before {
          content: "";
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            to bottom,
            transparent 0px,
            transparent 3px,
            rgba(0, 0, 0, 0.18) 3px,
            rgba(0, 0, 0, 0.18) 4px
          );
          pointer-events: none;
          z-index: 1;
        }

        .ticker-row {
          width: 100%;
          overflow: hidden;
          padding: 18px 0;
          position: relative;
        }

        .ticker-row:nth-child(odd) {
          background: #ff2a2a;
          border-top: 3px solid #ff6b6b;
          border-bottom: 3px solid #bb0000;
        }

        .ticker-row:nth-child(even) {
          background: #0a0a0a;
        }

        .ticker-track {
          display: flex;
          white-space: nowrap;
          will-change: transform;
        }

        /* Rows scroll left */
        .ticker-row:nth-child(odd) .ticker-track {
          animation: scrollLeft 12s linear infinite;
        }

        /* Every even row scrolls right */
        .ticker-row:nth-child(even) .ticker-track {
          animation: scrollRight 14s linear infinite;
        }

        @keyframes scrollLeft {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes scrollRight {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .ticker-text {
          font-family: 'Black Ops One', sans-serif;
          font-size: clamp(1.6rem, 4vw, 3rem);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding-right: 3rem;
          user-select: none;
        }

        .ticker-row:nth-child(odd) .ticker-text {
          color: #0a0a0a;
          -webkit-text-stroke: 1px rgba(255,255,255,0.15);
        }

        .ticker-row:nth-child(even) .ticker-text {
          color: #ff2a2a;
          -webkit-text-stroke: 1px rgba(255, 42, 42, 0.4);
          text-shadow:
            0 0 20px rgba(255, 42, 42, 0.8),
            0 0 60px rgba(255, 42, 42, 0.4);
        }

        /* Center stamp */
        .stamp-wrapper {
          position: absolute;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
          animation: stampPulse 2s ease-in-out infinite;
        }

        .stamp {
          border: 6px solid #ff2a2a;
          border-radius: 8px;
          padding: 18px 36px;
          transform: rotate(-6deg);
          text-align: center;
          background: rgba(10, 10, 10, 0.85);
          box-shadow:
            0 0 0 3px rgba(255,42,42,0.3),
            0 0 40px rgba(255,42,42,0.6),
            inset 0 0 30px rgba(255,42,42,0.05);
        }

        .stamp-line1 {
          font-family: 'Black Ops One', sans-serif;
          font-size: clamp(2.5rem, 7vw, 5.5rem);
          color: #ff2a2a;
          letter-spacing: 0.1em;
          line-height: 1;
          text-shadow: 0 0 30px rgba(255,42,42,0.9);
        }

        .stamp-line2 {
          font-family: 'Black Ops One', sans-serif;
          font-size: clamp(1rem, 2.5vw, 1.8rem);
          color: #ff6b6b;
          letter-spacing: 0.25em;
          margin-top: 6px;
          text-shadow: 0 0 12px rgba(255,42,42,0.7);
        }

        .stamp-amount {
          font-family: 'Black Ops One', sans-serif;
          font-size: clamp(1.4rem, 3.5vw, 2.4rem);
          color: #fff;
          letter-spacing: 0.12em;
          margin-top: 10px;
          text-shadow: 0 0 16px rgba(255,255,255,0.5);
          border-top: 2px solid rgba(255,42,42,0.5);
          padding-top: 8px;
        }

        @keyframes stampPulse {
          0%, 100% { transform: scale(1); filter: brightness(1); }
          50%       { transform: scale(1.03); filter: brightness(1.15); }
        }
      `}</style>

      <div className="pay-dev-overlay">
        {/* 7 ticker rows fill the full viewport height */}
        {Array.from({ length: 7 }).map((_, i) => (
          <div className="ticker-row" key={i}>
            <div className="ticker-track">
              {/* Double the text so the loop is invisible */}
              <span className="ticker-text">{repeated}</span>
              <span className="ticker-text">{repeated}</span>
            </div>
          </div>
        ))}

        {/* Centre stamp */}
        <div className="stamp-wrapper">
          <div className="stamp">
            <div className="stamp-line1">PAY YOUR</div>
            <div className="stamp-line1">DEVELOPER</div>
            <div className="stamp-line2">6 MONTHS OUTSTANDING</div>
            <div className="stamp-amount">₦60,000 DUE</div>
          </div>
        </div>
      </div>
    </>
  );
}
