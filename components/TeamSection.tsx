import Image from "next/image";

const founder = {
  name: "Ahad Hassan Afridi",
  role: "Founder & CEO (Data Scientist)",
  image: "/member1.png",
};

export default function TeamSection() {
  return (
    <section id="team" className="py-12 md:py-20 text-white relative overflow-hidden bg-black">
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900/20 via-black to-black"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Meet Our Team
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
            Our team is extraordinary—combining unique talents, relentless
            passion, and a drive for innovation to consistently deliver
            exceptional results for our clients every time.
          </p>
        </div>

        {/* CEO and Hierarchy Diagram */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-6 lg:gap-10 xl:gap-14 max-w-7xl mx-auto">
          {/* CEO Section - Left Side */}
          <div className="flex flex-col items-center flex-shrink-0 z-10 mt-4">
            <div className="relative mb-5">
              <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-60 md:h-60 lg:w-64 lg:h-64 rounded-full overflow-hidden border border-gray-600/60 relative bg-black shadow-[0_0_40px_rgba(0,0,0,0.6)]">
                <div className="absolute inset-0 rounded-full border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)] pointer-events-none z-10"></div>
                <Image
                  src={founder.image}
                  alt={founder.name}
                  width={288}
                  height={288}
                  className="object-cover w-full h-full relative z-0"
                />
              </div>
            </div>
            <div className="text-center">
              <p className="text-xs sm:text-sm text-gray-400 tracking-wider mb-1">
                Founder &amp; CEO
              </p>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1">
                {founder.name}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500">
                Founder &amp; CEO (Data Scientist)
              </p>
            </div>
          </div>

          {/* Organizational Hierarchy Diagram - Right Side */}
          <div className="flex-1 w-full lg:w-auto min-w-0 z-10 mt-12 lg:mt-0">
            <svg
              viewBox="80 0 780 540"
              className="w-full h-auto max-w-[780px] mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              overflow="visible"
            >
              <defs>
                <filter id="dotGlow" x="-100%" y="-100%" width="300%" height="300%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id="starGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="2" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* ===== CEO LINE ===== */}
              <path
                className="hidden lg:block"
                d="M 0 290 L 40 290 Q 55 290 55 275 L 55 70 Q 55 50 75 50 L 390 50"
                stroke="#d4d4d8"
                strokeWidth="1.8"
                fill="none"
              />
              {/* Mobile CEO connection dropping straight down */}
              <line
                className="lg:hidden"
                x1="475" y1="-90" x2="475" y2="20"
                stroke="#d4d4d8"
                strokeWidth="1.8"
              />

              {/* ===== 2x PROJECT MANAGERS BOX ===== */}
              <rect x="390" y="20" width="170" height="60" rx="10" fill="#0d1525" stroke="#4b5563" strokeWidth="1.2" />
              <text x="425" y="58" textAnchor="middle" fill="#FFFFFF" fontSize="28" fontWeight="bold" fontFamily="sans-serif">2x</text>
              <text x="505" y="44" textAnchor="middle" fill="#d1d5db" fontSize="11" fontWeight="600" letterSpacing="1" fontFamily="sans-serif">PROJECT</text>
              <text x="505" y="59" textAnchor="middle" fill="#d1d5db" fontSize="11" fontWeight="600" letterSpacing="1" fontFamily="sans-serif">MANAGERS</text>

              {/* ===== TRUNK: PM bottom center → down ===== */}
              <line x1="475" y1="80" x2="475" y2="120" stroke="#d4d4d8" strokeWidth="1.8" />

              {/* ===== THREE BRANCHES from trunk with smooth curves ===== */}
              {/* Left branch: down from 475,120 → curve left → go left to 185 → curve down → down to 165 */}
              <path d="M 475 120 Q 475 140 455 140 L 205 140 Q 185 140 185 160 L 185 170" stroke="#d4d4d8" strokeWidth="1.8" fill="none" />
              {/* Center branch: straight down */}
              <line x1="475" y1="120" x2="475" y2="170" stroke="#d4d4d8" strokeWidth="1.8" />
              {/* Right branch: down from 475,120 → curve right → go right to 755 → curve down → down to 165 */}
              <path d="M 475 120 Q 475 140 495 140 L 735 140 Q 755 140 755 160 L 755 170" stroke="#d4d4d8" strokeWidth="1.8" fill="none" />

              {/* TEAM NAME LABELS (positioned ABOVE horizontal bars) ===== */}
              <text x="185" y="185" textAnchor="middle" fill="#9CA3AF" fontSize="11" fontWeight="600" letterSpacing="1.2" fontFamily="sans-serif">AI &amp; ENGINEERING TEAM</text>
              <text x="475" y="178" textAnchor="middle" fill="#9CA3AF" fontSize="11" fontWeight="600" letterSpacing="1.2" fontFamily="sans-serif">ANALYTICS &amp;</text>
              <text x="475" y="192" textAnchor="middle" fill="#9CA3AF" fontSize="11" fontWeight="600" letterSpacing="1.2" fontFamily="sans-serif">DESIGN TEAM</text>
              <text x="755" y="178" textAnchor="middle" fill="#9CA3AF" fontSize="11" fontWeight="600" letterSpacing="1.2" fontFamily="sans-serif">FRONT-END &amp; BACK-END</text>
              <text x="755" y="192" textAnchor="middle" fill="#9CA3AF" fontSize="11" fontWeight="600" letterSpacing="1.2" fontFamily="sans-serif">DEVELOPERS</text>

              {/* ===== HORIZONTAL BARS below labels ===== */}
              <line x1="95" y1="200" x2="275" y2="200" stroke="#d4d4d8" strokeWidth="1.8" />
              <line x1="385" y1="200" x2="565" y2="200" stroke="#d4d4d8" strokeWidth="1.8" />
              <line x1="665" y1="200" x2="845" y2="200" stroke="#d4d4d8" strokeWidth="1.8" />

              {/* ===== VERTICAL DROPS from bar ends into box tops ===== */}
              {/* AI box drops */}
              <line x1="95" y1="200" x2="95" y2="230" stroke="#d4d4d8" strokeWidth="1.8" />
              <line x1="275" y1="200" x2="275" y2="230" stroke="#d4d4d8" strokeWidth="1.8" />
              {/* Analytics box drops */}
              <line x1="385" y1="200" x2="385" y2="230" stroke="#d4d4d8" strokeWidth="1.8" />
              <line x1="565" y1="200" x2="565" y2="230" stroke="#d4d4d8" strokeWidth="1.8" />
              {/* FE/BE box drops */}
              <line x1="665" y1="200" x2="665" y2="230" stroke="#d4d4d8" strokeWidth="1.8" />
              <line x1="845" y1="200" x2="845" y2="230" stroke="#d4d4d8" strokeWidth="1.8" />



              {/* ===== TEAM BOXES ===== */}

              {/* --- AI & Engineering Box --- */}
              <rect x="95" y="230" width="180" height="280" rx="14" fill="#0c1322" stroke="#3b4a63" strokeWidth="1.2" />
              <text x="185" y="370" textAnchor="middle" fill="#FFFFFF" fontSize="48" fontWeight="bold" fontFamily="sans-serif">5x</text>
              <text x="185" y="405" textAnchor="middle" fill="#9ca3af" fontSize="13" fontWeight="500" letterSpacing="1.5" fontFamily="sans-serif">AI ENGINEERS</text>

              {/* --- Analytics & Design Box --- */}
              <rect x="385" y="230" width="180" height="280" rx="14" fill="#0c1322" stroke="#3b4a63" strokeWidth="1.2" />
              <text x="475" y="310" textAnchor="middle" fill="#FFFFFF" fontSize="36" fontWeight="bold" fontFamily="sans-serif">5x</text>
              <text x="475" y="335" textAnchor="middle" fill="#9ca3af" fontSize="11" fontWeight="500" letterSpacing="1" fontFamily="sans-serif">POWER BI</text>
              <text x="475" y="350" textAnchor="middle" fill="#9ca3af" fontSize="11" fontWeight="500" letterSpacing="1" fontFamily="sans-serif">DEVELOPERS</text>
              <line x1="405" y1="375" x2="545" y2="375" stroke="#1e293b" strokeWidth="1" />
              <text x="475" y="425" textAnchor="middle" fill="#FFFFFF" fontSize="36" fontWeight="bold" fontFamily="sans-serif">3x</text>
              <text x="475" y="450" textAnchor="middle" fill="#9ca3af" fontSize="11" fontWeight="500" letterSpacing="1" fontFamily="sans-serif">UI/UX</text>
              <text x="475" y="465" textAnchor="middle" fill="#9ca3af" fontSize="11" fontWeight="500" letterSpacing="1" fontFamily="sans-serif">DESIGNERS</text>

              {/* --- Front-End & Back-End Box --- */}
              <rect x="665" y="230" width="180" height="280" rx="14" fill="#0c1322" stroke="#3b4a63" strokeWidth="1.2" />
              <text x="755" y="310" textAnchor="middle" fill="#FFFFFF" fontSize="36" fontWeight="bold" fontFamily="sans-serif">4x</text>
              <text x="755" y="335" textAnchor="middle" fill="#9ca3af" fontSize="11" fontWeight="500" letterSpacing="1" fontFamily="sans-serif">FRONT-END</text>
              <text x="755" y="350" textAnchor="middle" fill="#9ca3af" fontSize="11" fontWeight="500" letterSpacing="1" fontFamily="sans-serif">DEVELOPERS</text>
              <line x1="685" y1="375" x2="825" y2="375" stroke="#1e293b" strokeWidth="1" />
              <text x="755" y="425" textAnchor="middle" fill="#FFFFFF" fontSize="36" fontWeight="bold" fontFamily="sans-serif">4x</text>
              <text x="755" y="450" textAnchor="middle" fill="#9ca3af" fontSize="11" fontWeight="500" letterSpacing="1" fontFamily="sans-serif">BACK-END</text>
              <text x="755" y="465" textAnchor="middle" fill="#9ca3af" fontSize="11" fontWeight="500" letterSpacing="1" fontFamily="sans-serif">DEVELOPERS</text>


            </svg>
          </div>

        </div>
      </div>
    </section>
  );
}
