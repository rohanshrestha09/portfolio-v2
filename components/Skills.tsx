import React from "react";
import "aos/dist/aos.css";
import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiLinux,
  SiGit,
  SiGithub,
} from "react-icons/si";

const Skills: React.FC = () => {
  const skills: any[] = [
    {
      icon: <SiHtml5 className="md:text-7xl text-5xl" />,
      name: "HTML5",
    },
    { icon: <SiCss3 className="md:text-7xl text-5xl" />, name: "CSS3" },
    {
      icon: <SiJavascript className="md:text-7xl text-5xl" />,
      name: "JavaScript",
    },
    {
      icon: <SiTailwindcss className="md:text-7xl text-5xl" />,
      name: "Tailwindcss",
    },
    { icon: <SiReact className="md:text-7xl text-5xl" />, name: "React" },
    { icon: <SiNextdotjs className="md:text-7xl text-5xl" />, name: "Next" },
    {
      icon: <SiTypescript className="md:text-7xl text-5xl" />,
      name: "TypeScript",
    },
    { icon: <SiMongodb className="md:text-7xl text-5xl" />, name: "Mongodb" },
    { icon: <SiNodedotjs className="md:text-7xl text-5xl" />, name: "Nodejs" },
    { icon: <SiExpress className="md:text-7xl text-5xl" />, name: "Express" },
    { icon: <SiNestjs className="md:text-7xl text-5xl" />, name: "Nest" },
    { icon: <SiLinux className="md:text-7xl text-5xl" />, name: "Linux" },
    { icon: <SiGit className="md:text-7xl text-5xl" />, name: "Git" },
    { icon: <SiGithub className="md:text-7xl text-5xl" />, name: "Github" },
  ];
  return (
    <div
      className="w-full min-h-screen md:h-screen flex flex-col items-center overflow-hidden"
      id="skills"
    >
      <div
        className="mockup-code before:hidden min-w-0 bg-transparent py-10 lg:py-28 sm:py-14"
        data-aos="fade-right"
      >
        <pre data-prefix="$" className="text-3xl lg:text-5xl">
          <code>My Skills</code>
        </pre>
      </div>
      <div className="grid grid-rows-auto lg:grid-cols-7 md:grid-cols-5 sm:grid-cols-4 grid-cols-3 md:gap-20 sm:gap-14 gap-8">
        {skills.map((el: any, index: number) => (
          <div className="flex flex-col items-center" key={index}>
            {index < 7 ? (
              <div data-aos="fade-down" data-aos-duration="800">
                {el.icon}
              </div>
            ) : (
              <div data-aos="fade-up" data-aos-duration="800">
                {el.icon}
              </div>
            )}

            <p className="pt-1 md:text-lg">{el.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
