import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans min-h-screen p-8 sm:p-20 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-300 dark:from-slate-900 flex flex-col items-center justify-center gap-8 text-black">
      <main className="text-center max-w-3xl">
        <div className="flex items-center justify-center gap-4 mb-4">
          <span className="text-5xl">🏆</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Congratulations, India!
          </h1>
          <span className="text-4xl">🇮🇳</span>
        </div>

        <p className="text-lg mb-6">
          Champions — Asia Cup 2025
        </p>

        <div className="flex gap-4 items-center justify-center flex-col sm:flex-row">
          <a
            className="rounded-full bg-[#0066cc] text-white px-5 py-2 font-medium shadow hover:brightness-95"
            href="#highlights"
          >
            Match Highlights
          </a>
          <a
            className="rounded-full border border-black/[.08] px-5 py-2 font-medium hover:bg-black/[.04]"
            href="#team"
          >
            Team & Stats
          </a>
        </div>

        <div className="mt-8 flex justify-center">
          {/* upgraded trophy SVG with tricolor ribbons and shine */}
          <svg
            width="200"
            height="200"
            viewBox="0 0 200 200"
            fill="none"
            aria-hidden
            className="drop-shadow-2xl"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="goldGrad" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="#FFE67A" />
                <stop offset="60%" stopColor="#FFC845" />
                <stop offset="100%" stopColor="#DAA520" />
              </linearGradient>
              <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="0" dy="8" stdDeviation="12" floodOpacity="0.25" />
              </filter>
            </defs>

            {/* base plate */}
            <ellipse cx="100" cy="172" rx="50" ry="8" fill="#3b3b3b" opacity="0.15" />

            {/* pedestal */}
            <rect x="82" y="132" width="36" height="28" rx="6" fill="#2b2b2b" />

            {/* stem */}
            <rect x="92" y="96" width="16" height="36" rx="4" fill="#A07A00" />

            {/* cup */}
            <path
              d="M48 80 C48 52, 152 52, 152 80 C152 110, 130 118, 100 118 C70 118, 48 110, 48 80 Z"
              fill="url(#goldGrad)"
              stroke="#b68400"
              strokeWidth="2"
              filter="url(#softShadow)"
            />

            {/* handles */}
            <path
              d="M44 78 C20 68, 20 108, 44 98"
              stroke="#A67C00"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M156 78 C180 68, 180 108, 156 98"
              stroke="#A67C00"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
            />

            {/* decorative lines on cup */}
            <path d="M62 86 C100 96, 138 86, 138 86" stroke="#FFD85C" strokeWidth="3" strokeLinecap="round" />
            <path d="M70 100 C100 106, 130 100, 130 100" stroke="#E6B93C" strokeWidth="2" strokeLinecap="round" opacity="0.9"/>

            {/* shine highlights */}
            <ellipse cx="86" cy="70" rx="8" ry="3" fill="white" opacity="0.5" transform="rotate(-20 86 70)" />
            <ellipse cx="108" cy="64" rx="4" ry="1.5" fill="white" opacity="0.35" transform="rotate(-20 108 64)" />

            {/* tricolor ribbons */}
            <g transform="translate(94,100)">
              <path d="M-42 6 C-30 20, -10 34, 0 34" stroke="#FF9933" strokeWidth="10" strokeLinecap="round" fill="none" />
              <path d="M42 6 C30 20, 10 34, 0 34" stroke="#128807" strokeWidth="10" strokeLinecap="round" fill="none" />
              <path d="M-30 10 C-18 18, -6 24, 0 24 C6 24, 18 18, 30 10" stroke="#0B5BBF" strokeWidth="6" strokeLinecap="round" fill="none" opacity="0.9"/>
            </g>

            {/* confetti dots */}
            <circle cx="30" cy="30" r="3" fill="#FF9933" />
            <circle cx="170" cy="40" r="3" fill="#128807" />
            <circle cx="40" cy="140" r="3" fill="#0B5BBF" />
            <circle cx="160" cy="120" r="3" fill="#FFD85C" />

            {/* small star sparkle */}
            <g transform="translate(140,30) scale(0.9)">
              <path d="M0 -8 L2 -2 L8 -2 L3 1 L5 7 L0 3 L-5 7 L-3 1 L-8 -2 L-2 -2 Z" fill="#fff" opacity="0.95" />
            </g>
          </svg>
        </div>

        <p className="mt-6 text-sm">
          Celebrating the grit, skill and spirit of Team India. Jai Hind! 🎉
        </p>

        <section id="highlights" className="mt-8 text-left">
          <h2 className="font-semibold mb-2">Key Moments</h2>
          <ul className="list-disc pl-5 text-sm">
            <li>Outstanding batting performances across the tournament</li>
            <li>Clinical bowling in the final to seal the title</li>
            <li>Teamwork and resilience throughout Asia Cup 2025</li>
          </ul>
        </section>

        <section id="team" className="mt-6 text-left">
          <h2 className="font-semibold mb-2">Squad Highlights</h2>
          <p className="text-sm">
            View the full squad, scorecards and player statistics on the official board or sports sites.
          </p>
        </section>
      </main>
      <footer className="mt-8 text-sm">
        Fans powered • Asia Cup 2025
      </footer>
    </div>
  );
}
