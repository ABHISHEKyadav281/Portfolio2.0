import React from "react";

type Props = {
  height?: number | string;      // px number or CSS string like "100%"
  thickness?: number;            // stroke width
  primary?: string;              // primary color hex / any CSS color
  secondary?: string;            // secondary color for gradient
  dash?: boolean;                // use dashed flowing stroke
  showDot?: boolean;             // show moving dot
  speed?: number;                // animation speed multiplier (1 = normal)
};

const VerticalLineSvg: React.FC<Props> = ({
  height = "220px",
  thickness = 3,
  primary = "#ffffff",
  secondary = "rgba(255,255,255,0.6)",
  dash = true,
  showDot = true,
  speed = 1,
}) => {
  // Convert numeric height to px string if needed
  const svgHeight = typeof height === "number" ? `${height}px` : height;

  // ids for defs (avoid collisions if multiple instances)
  const id = Math.random().toString(36).slice(2, 9);
  const gradId = `grad-${id}`;
  const pathId = `path-${id}`;

  return (
    <div style={{ height: svgHeight, display: "inline-block" }}>
      <svg
        width="24"
        height={svgHeight}
        viewBox={`0 0 24 ${svgHeight}`}
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        className="block"
        aria-hidden
      >
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={primary} stopOpacity="1" />
            <stop offset="60%" stopColor={secondary} stopOpacity="0.85" />
            <stop offset="100%" stopColor={secondary} stopOpacity="0.4" />
          </linearGradient>

          {/* soft glow (filter) */}
          <filter id={`fglow-${id}`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* compute top/bottom with a margin so ring/dot doesn't clip */}
        {/* Use a vertical path from (12, 12) to (12, H-12) */}
        <g transform={`translate(0,0)`}>
          <path
            id={pathId}
            d={`M12 12 L12 ${parseFloat(svgHeight as string) - 12}`}
            fill="none"
            stroke={`url(#${gradId})`}
            strokeWidth={thickness}
            strokeLinecap="round"
            style={{
              filter: `url(#fglow-${id})`,
              opacity: 0.95,
              // conditional dash animation via CSS class below
            }}
            className={dash ? "vline-dash" : "vline-solid"}
          />
        </g>

        {/* moving dot - uses SMIL animateMotion which is widely supported in modern browsers */}
        {showDot && (
          <g>
            <circle
              r={Math.max(2, thickness + 1)}
              fill={primary}
              fillOpacity={0.95}
              style={{ filter: `url(#fglow-${id})` }}
            >
              <animateMotion
                dur={`${6 / Math.max(0.2, speed)}s`}
                repeatCount="indefinite"
                rotate="auto"
                path={`M0,12 L0,${parseFloat(svgHeight as string) - 12}`}
              />
            </circle>
          </g>
        )}

        {/* Inline CSS for dash animation (scoped to this SVG via class names) */}
        <style>{`
          /* dashed flowing stroke */
          .vline-dash {
            stroke-dasharray: 8 6;
            stroke-dashoffset: 0;
            animation: dashMove ${4 / Math.max(0.2, speed)}s linear infinite;
            transition: opacity 0.2s ease;
          }

          /* solid line subtle pulse */
          .vline-solid {
            opacity: 0.9;
            filter: none;
            animation: pulse 3.5s ease-in-out ${/* repeat */ ""} infinite;
          }

          @keyframes dashMove {
            to { stroke-dashoffset: -28; }
          }

          @keyframes pulse {
            0% { opacity: 0.85; transform-origin: 12px 50%; }
            50% { opacity: 1; }
            100% { opacity: 0.85; }
          }
        `}</style>
      </svg>
    </div>
  );
};

export default VerticalLineSvg;
