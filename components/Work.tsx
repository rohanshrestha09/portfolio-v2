import Image from "next/image";
import "aos/dist/aos.css";
import { IconType } from "react-icons";
import {
  SiExpress,
  SiFigma,
  SiFirebase,
  SiJquery,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaNode } from "react-icons/fa";
import Pre from "./Pre";

const Work: React.FC = () => {
  const works = [
    {
      imgSrc: "/images/blogsansar.png",
      title: "BlogSansar 2.0",
      desc: "A revamp of my previously created blogging site BlogSansar.",
      githublink: "https://github.com/rohanshrestha09/Blog-Express",
      livelink: "https://blogsansar.live/",
      icons: [
        SiMongodb,
        SiNextdotjs,
        SiRedux,
        SiTailwindcss,
        FaNode,
        SiExpress,
        SiFirebase,
        SiTypescript,
      ],
    },
    {
      imgSrc: "/images/patra.png",
      title: "Patra",
      desc: "A realtime messaging web application built with MERN & socket.io.",
      githublink: "https://github.com/rohanshrestha09/Patra",
      livelink: "https://patra-production.up.railway.app/",
      icons: [
        SiMongodb,
        SiReact,
        SiTailwindcss,
        FaNode,
        SiExpress,
        SiTypescript,
      ],
    },
    {
      imgSrc: "/images/blog.png",
      title: "BlogSansar",
      desc: `A site that lets you read and create your own blogs.`,
      githublink: "https://github.com/rohanshrestha09/Blog-Nest",
      livelink: "https://blog-nest.vercel.app/",
      icons: [
        SiMongodb,
        SiReact,
        SiTailwindcss,
        FaNode,
        SiNestjs,
        SiTypescript,
      ],
    },
    {
      imgSrc: "/images/insta.png",
      title: "Instagram Clone",
      desc: "Responsive Instagram Clone made with Next, TypeScript, TailwindCSS",
      githublink: "https://github.com/rohanshrestha09/Instagram-Clone",
      livelink: "https://igt.vercel.app/",
      icons: [SiNextdotjs, SiTailwindcss, SiTypescript],
    },
    {
      imgSrc: "/images/portfolio.png",
      title: "Portfolio Website",
      desc: "My own portfolio website with Next, daisyui, & TailwindCSS",
      githublink: "https://github.com/rohanshrestha09/Portfolio-Next",
      livelink: "https://rohanshrestha.vercel.app/",
      icons: [SiNextdotjs, SiTailwindcss, SiTypescript],
    },
    {
      imgSrc: "/images/discord.png",
      title: "Discord Clone",
      desc: "Discord Clone done with Figma, TailwindCSS and Jquery",
      githublink: "https://github.com/rohanshrestha09/Discord-Jquery",
      livelink: "https://discordcl.vercel.app/",
      icons: [SiFigma, SiTailwindcss, SiJquery],
    },
    {
      imgSrc: "/images/portfolio2.png",
      title: "Portfolio Website",
      desc: "Simple responsive portfolio website designed for my friend with React and Express",
      githublink: "https://github.com/rohanshrestha09/Portfolio",
      livelink: "https://rohanshresthas.vercel.app/",
      icons: [SiReact, SiTailwindcss, FaNode, SiExpress],
    },
  ];

  return (
    <div
      className="w-full flex flex-col items-center overflow-hidden relative"
      id="works"
    >
      <div
        className="mockup-code before:hidden min-w-0 bg-transparent"
        data-aos="fade-left"
      >
        <Pre data-prefix="$" preclassname="text-3xl lg:text-5xl">
          My Projects
        </Pre>
      </div>

      {works.map(
        ({ title, imgSrc, desc, githublink, livelink, icons }, index) => (
          <div
            // data-aos={`${index % 2 === 0 ? "fade-right" : "fade-left"}`}
            // data-aos-duration="800"
            className={`flex ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            } xl:w-full sm:w-[40rem] w-full 2xl:h-[38rem] xl:h-[32rem] min-h-fit sm:my-8 my-6`}
            key={index}
          >
            <div
              className={`${
                index % 2 === 0 ? "right-0" : "left-0"
              } xl:block hidden absolute 2xl:h-[31rem] xl:h-[25rem] w-[54%] z-10 mt-8`}
            >
              <Image
                src={imgSrc}
                alt=""
                className="rounded-lg"
                layout="fill"
                quality={100}
                priority
              />
            </div>

            <div className="card xl:card-side xl:rounded-lg rounded-none xl:w-[69%] w-full h-full bg-[#2A303C]">
              <figure className="h-full sm:h-1/2">
                <img
                  src={imgSrc}
                  alt="Album"
                  className={`xl:hidden object-contain h-full w-full`}
                />
              </figure>

              <div
                className={`w-full p-4 sm:card-body flex flex-col justify-between h-full ${
                  index % 2 === 0 ? "xl:items-start" : "xl:items-end"
                }`}
              >
                <div className="mockup-code bg-transparent xl:w-[63%] overflow-hidden flex flex-col gap-1">
                  <Pre data-prefix="$" preclassname="text-xl">
                    <code>{title}</code>
                  </Pre>

                  <Pre
                    div
                    data-prefix=">"
                    preclassname="text-success text-xl inline-flex before:content-['>'] before:w-0 before:opacity-[0.5] pr:[1.25rem] before:mr-[1.8ch] break-words"
                  >
                    <p>{desc}</p>
                  </Pre>

                  <Pre
                    data-prefix="~"
                    preclassname="text-xl hover:bg-rose-500 transition-all hover:text-white"
                  >
                    <a href={githublink} target="_blank">
                      Check Repository
                    </a>
                  </Pre>

                  <Pre
                    data-prefix="~"
                    preclassname="text-xl hover:bg-rose-500 transition-all hover:text-white"
                  >
                    <a href={livelink} target="_blank">
                      View Live
                    </a>
                  </Pre>
                </div>

                <div
                  className={`card-actions w-full ${
                    index % 2 === 0 ? "xl:justify-end" : "xl:justify-start"
                  } items-center`}
                >
                  <div className="flex gap-5">
                    {icons.map((Icon: IconType, index) => (
                      <Icon size={21} key={index} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Work;
