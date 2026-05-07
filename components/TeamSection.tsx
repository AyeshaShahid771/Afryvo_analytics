import Image from "next/image";

const founder = {
  name: "Ahad Hassan Afridi",
  role: "Founder & CEO (Data Scientist)",
  image: "/member1.png",
};

const teamMembers = [
  {
    name: "Ahmad Hassan Afridi, Ph.D",
    role: "Founding Member (AI Researcher)",
    image: "/member2.png",
  },
  {
    name: "Rahim Zahid",
    role: "Lead Data Analyst",
    image: "/member3.png",
  },
  {
    name: "Saad Rafiq",
    role: "Lead Software Developer",
    image: "/member4.png",
  },
  {
    name: "Rabya Nassar",
    role: "BI Consultant",
    image: "/member5.png",
  },
  {
    name: "Ayesha Shahid",
    role: "AI Engineer",
    image: "/Gemini_Generated_Image_7d587r7d587r7d58.png",
  },
  {
    name: "Abdullah Naeem",
    role: "Full Stack Developer",
    image: "/member8.png",
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-12 md:py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Founder - Featured */}
        <div className="flex flex-col items-center mb-16 md:mb-24">
          <div className="relative mb-6">
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-gray-700 shadow-2xl">
              <Image
                src={founder.image}
                alt={founder.name}
                width={192}
                height={192}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="text-center">
            <p className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider mb-2">
              Founder & CEO
            </p>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
              {founder.name}
            </h3>
            <p className="text-sm sm:text-base text-gray-400">
              Data Scientist
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="relative mb-12 md:mb-16">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-700"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-black px-4 sm:px-6 text-xs sm:text-sm md:text-base text-gray-400 uppercase tracking-wider">
              Our Expert Operational Team
            </span>
          </div>
        </div>

        {/* Team Grid - 3 columns on large screens, 2 columns on small screens */}
        <div className="max-w-6xl mx-auto space-y-8 lg:space-y-12">
          {/* Row 1: First 2 members on mobile, first 3 on desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12 lg:gap-16">
            {teamMembers.slice(0, 2).map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full overflow-hidden mb-4 border-2 border-gray-800 group-hover:border-gray-600 transition-all duration-300 shadow-lg">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={144}
                    height={144}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h4 className="font-bold text-base sm:text-lg md:text-xl mb-1">
                  {member.name}
                </h4>
                <p className="text-xs sm:text-sm md:text-base text-gray-400">
                  {member.role}
                </p>
              </div>
            ))}
            {/* Third member - only visible on large screens in first row */}
            <div className="hidden lg:flex flex-col items-center text-center group">
              <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full overflow-hidden mb-4 border-2 border-gray-800 group-hover:border-gray-600 transition-all duration-300 shadow-lg">
                <Image
                  src={teamMembers[2].image}
                  alt={teamMembers[2].name}
                  width={144}
                  height={144}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h4 className="font-bold text-base sm:text-lg md:text-xl mb-1">
                {teamMembers[2].name}
              </h4>
              <p className="text-xs sm:text-sm md:text-base text-gray-400">
                {teamMembers[2].role}
              </p>
            </div>
          </div>

          {/* Row 2: Members 3-4 on mobile (Saad, Rabya), Members 4-6 on desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12 lg:gap-16">
            {/* Saad - shows on mobile as 3rd member */}
            <div className="flex lg:hidden flex-col items-center text-center group">
              <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full overflow-hidden mb-4 border-2 border-gray-800 group-hover:border-gray-600 transition-all duration-300 shadow-lg">
                <Image
                  src={teamMembers[2].image}
                  alt={teamMembers[2].name}
                  width={144}
                  height={144}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h4 className="font-bold text-base sm:text-lg md:text-xl mb-1">
                {teamMembers[2].name}
              </h4>
              <p className="text-xs sm:text-sm md:text-base text-gray-400">
                {teamMembers[2].role}
              </p>
            </div>
            
            {teamMembers.slice(3, 6).map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full overflow-hidden mb-4 border-2 border-gray-800 group-hover:border-gray-600 transition-all duration-300 shadow-lg">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={144}
                    height={144}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h4 className="font-bold text-base sm:text-lg md:text-xl mb-1">
                  {member.name}
                </h4>
                <p className="text-xs sm:text-sm md:text-base text-gray-400">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
