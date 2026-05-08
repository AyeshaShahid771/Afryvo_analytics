import React from "react";
import { 
  SiPython, SiTypescript, SiJavascript, 
  SiNextdotjs, SiReact, SiTailwindcss,
  SiFastapi, SiNodedotjs,
  SiPytorch,
  SiPostgresql, SiMongodb, SiPrisma,
  SiAmazonwebservices, SiDocker, SiTerraform, SiGithubactions, SiGooglecloud,
  SiDigitalocean, SiHeroku, SiNetlify,
  SiTableau, SiApachespark, SiSnowflake, SiKubernetes
} from "react-icons/si";
import { FaJava, FaMicrosoft, FaChartBar, FaDatabase } from "react-icons/fa6";
import { TbBrandCSharp } from "react-icons/tb";
import { BarChart3, Database } from "lucide-react";

const technologies = [
  // Languages
  { name: "Python", icon: SiPython },
  { name: "TypeScript", icon: SiTypescript },
  { name: "C#", icon: TbBrandCSharp },
  { name: "Java", icon: FaJava },
  { name: "JavaScript", icon: SiJavascript },
  
  // Frontend
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React", icon: SiReact },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  
  // Backend
  { name: "FastAPI", icon: SiFastapi },
  { name: "Node.js", icon: SiNodedotjs },
  
  // AI/ML
  { name: "PyTorch", icon: SiPytorch },
  
  // Database
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Prisma", icon: SiPrisma },
  
  // Data Analytics
  { name: "Power BI", icon: BarChart3 },
  { name: "Tableau", icon: SiTableau },
  { name: "Apache Spark", icon: SiApachespark },
  { name: "Databricks", icon: Database },
  { name: "Snowflake", icon: SiSnowflake },
  
  // Cloud & Deployment
  { name: "AWS", icon: SiAmazonwebservices },
  { name: "Azure", icon: FaMicrosoft },
  { name: "GCP", icon: SiGooglecloud },
  { name: "DigitalOcean", icon: SiDigitalocean },
  { name: "Heroku", icon: SiHeroku },
  { name: "Netlify", icon: SiNetlify },
  
  // DevOps
  { name: "Docker", icon: SiDocker },
  { name: "Kubernetes", icon: SiKubernetes },
  { name: "Terraform", icon: SiTerraform },
  { name: "GitHub Actions", icon: SiGithubactions },
];

export default function TechStackSection() {
  return (
    <section className="py-20 md:py-28 bg-black text-white overflow-hidden border-t border-gray-800/50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-24">
          <p className="text-sm text-gray-400 tracking-[0.2em] font-bold mb-3 uppercase">
            Languages &amp; Tools
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-white">
            Our Tech Stack
          </h2>
          <p className="text-gray-300 font-medium max-w-2xl mx-auto leading-relaxed">
            We build robust, scalable, and high-performance solutions using industry-leading technologies and cutting-edge frameworks.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 mt-12 w-full">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div 
                key={index} 
                className="flex flex-col items-center justify-start group w-16 sm:w-20 md:w-24 lg:w-24"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[#0a0a0a] border border-gray-600 flex items-center justify-center hover:bg-[#171717] hover:border-gray-400 transition-colors duration-300 cursor-default mb-3 sm:mb-4 shadow-sm flex-shrink-0">
                  <Icon className="w-6 h-6 md:w-8 md:h-8 text-gray-300 group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-[9px] md:text-[10px] font-bold text-gray-500 group-hover:text-gray-300 uppercase tracking-widest transition-colors duration-300 text-center leading-tight px-1">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
