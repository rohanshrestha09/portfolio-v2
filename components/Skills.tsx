import "aos/dist/aos.css";
import {
  SiCss3,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import Pre from "./Pre";

const Skills: React.FC = () => {
  const skills = [
    { Icon: SiHtml5, name: "HTML5" },
    { Icon: SiCss3, name: "CSS3" },
    { Icon: SiJavascript, name: "JavaScript" },
    { Icon: SiTailwindcss, name: "Tailwindcss" },
    { Icon: SiReact, name: "React" },
    { Icon: SiNextdotjs, name: "Next" },
    { Icon: SiTypescript, name: "TypeScript" },
    { Icon: SiMongodb, name: "Mongodb" },
    { Icon: SiNodedotjs, name: "Nodejs" },
    { Icon: SiExpress, name: "Express" },
    { Icon: SiNestjs, name: "Nest" },
    { Icon: SiLinux, name: "Linux" },
    { Icon: SiGit, name: "Git" },
    { Icon: SiGithub, name: "Github" },
  ];

  return (
    <div
      className="flex min-h-screen w-full flex-col items-center justify-center gap-12 overflow-hidden sm:gap-24 md:h-screen"
      id="skills"
    >
      <div
        className="mockup-code min-w-0 bg-transparent before:hidden"
        data-aos="fade-right"
      >
        <Pre prefix="$" preclassname="text-3xl lg:text-5xl">
          Tools I Use
        </Pre>
      </div>

      <div className="grid-rows-auto grid w-full grid-cols-3 gap-8 sm:grid-cols-4 sm:gap-14 md:grid-cols-5 md:gap-20 lg:grid-cols-7">
        {skills.map(({ Icon, name }, index: number) => (
          <div className="flex flex-col items-center" key={index}>
            <span
              data-aos={index > 7 ? "fade-down" : "fade-up"}
              data-aos-duration="800"
            >
              <Icon className="text-5xl md:text-7xl" />
            </span>

            <p className="pt-2 md:text-lg">{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
