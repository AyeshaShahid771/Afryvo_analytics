import Image from "next/image";

const teamMembers = [
  {
    name: "Ahad Hassan Afridi",
    role: "Founder & CEO\n(Data Scientist)",
    image: "/member1.png",
  },
  {
    name: "Ahmad Hassan Afridi, Ph.D",
    role: "Founding Member(AI Researcher)",
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
    image: "/member43.png",
  },
  {
    name: "Muzammil Shoukat",
    role: "UI/UX designer",
    image: "/member9.png",
  },
  {
    name: "Abdullah Naeem",
    role: "Full Stack Developer",
    image: "/member8.png",
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-20 text-white">
      <div className="max-w-3xl mx-auto text-center mb-16 px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Team</h2>
        <p className="text-base md:text-lg text-gray-400 leading-relaxed md:leading-normal">
          Our team is extraordinary—combining unique talents, relentless
          passion, and a drive for innovation to consistently deliver
          exceptional results for our clients every time.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-16 gap-x-4 max-w-5xl mx-auto">
        {teamMembers.map((member, idx) => (
          <div
            key={member.name}
            className="flex flex-col items-center text-center"
          >
            <div className="w-28 h-28 rounded-full overflow-hidden mb-4 flex items-center justify-center bg-gray-900">
              <Image
                src={member.image}
                alt={member.name}
                width={112}
                height={112}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="font-bold text-lg mb-1">{member.name}</div>
            <div className="text-gray-400 text-sm">{member.role}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
