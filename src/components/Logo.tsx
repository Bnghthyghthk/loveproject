export const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      {/* Infinity Icon SVG */}
      <svg
        width="50"
        height="50"
        viewBox="0 0 512 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12"
      >
        {/* Left Circle - Purple to Blue gradient */}
        <defs>
          <linearGradient id="leftGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A855F7" />
            <stop offset="50%" stopColor="#D91E63" />
            <stop offset="100%" stopColor="#2563EB" />
          </linearGradient>
          <linearGradient id="rightGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#EF4444" />
            <stop offset="50%" stopColor="#F97316" />
            <stop offset="100%" stopColor="#FBBF24" />
          </linearGradient>
        </defs>

        {/* Left Circle */}
        <circle cx="130" cy="130" r="110" fill="url(#leftGrad)" />

        {/* Right Circle */}
        <circle cx="382" cy="130" r="110" fill="url(#rightGrad)" />

        {/* T-shirt inside left circle */}
        <g transform="translate(70, 70)">
          {/* Main body */}
          <ellipse cx="60" cy="60" rx="50" ry="60" fill="white" />
          {/* Left sleeve */}
          <rect x="15" y="50" width="30" height="50" rx="15" fill="white" />
          {/* Right sleeve */}
          <rect x="75" y="50" width="30" height="50" rx="15" fill="white" />
          {/* Neck opening */}
          <circle cx="60" cy="25" r="15" fill="white" />
        </g>

        {/* Infinity symbol connecting circles */}
        <g
          stroke="white"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Left part of infinity */}
          <path d="M 240 120 Q 200 120 200 160 Q 200 200 240 200 Q 280 200 280 160 Q 280 120 240 120" />
          {/* Right part of infinity */}
          <path d="M 272 160 Q 272 120 312 120 Q 352 120 352 160 Q 352 200 312 200 Q 272 200 272 160" />
        </g>
      </svg>

      {/* Text */}
      <div className="flex flex-col leading-tight">
        <span className="text-lg font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 bg-clip-text text-transparent">
          INFINITY
        </span>
        <span className="text-base font-bold">
          <span className="text-purple-700">H</span>
          <span className="text-red-600">U</span>
          <span className="text-red-500">B</span>
        </span>
      </div>
    </div>
  );
};
