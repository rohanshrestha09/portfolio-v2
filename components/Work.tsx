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
      githublink: "https://github.com/rohanshrestha09/blog-express",
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
      githublink: "https://github.com/rohanshrestha09/patra",
      livelink: "https://patra.azurewebsites.net/",
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
      githublink: "https://github.com/rohanshrestha09/blog-v1",
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
      githublink: "https://github.com/rohanshrestha09/instagram-next",
      livelink: "https://igt.vercel.app/",
      icons: [SiNextdotjs, SiTailwindcss, SiTypescript],
    },
    {
      imgSrc: "/images/portfolio.png",
      title: "Portfolio Website",
      desc: "My own portfolio website with Next, daisyui, & TailwindCSS",
      githublink: "https://github.com/rohanshrestha09/portfolio-v2",
      livelink: "https://rohanshrestha.vercel.app/",
      icons: [SiNextdotjs, SiTailwindcss, SiTypescript],
    },
    {
      imgSrc: "/images/discord.png",
      title: "Discord Clone",
      desc: "Discord Clone done with Figma, TailwindCSS and Jquery",
      githublink: "https://github.com/rohanshrestha09/discord-jquery",
      livelink: "https://discordcl.vercel.app/",
      icons: [SiFigma, SiTailwindcss, SiJquery],
    },
    {
      imgSrc: "/images/portfolio2.png",
      title: "Portfolio Website",
      desc: "Simple responsive portfolio website designed for my friend with React and Express",
      githublink: "https://github.com/rohanshrestha09/portfolio-v1",
      livelink: "https://rohanshresthas.vercel.app/",
      icons: [SiReact, SiTailwindcss, FaNode, SiExpress],
    },
  ];

  return (
    <div
      className="relative flex w-full flex-col items-center overflow-hidden sm:pt-24"
      id="works"
    >
      <div
        className="mockup-code min-w-0 bg-transparent before:hidden"
        data-aos="fade-left"
      >
        <Pre prefix="$" preclassname="text-3xl lg:text-5xl">
          Personal Projects
        </Pre>
      </div>

      {works.map(
        ({ title, imgSrc, desc, githublink, livelink, icons }, index) => (
          <div
            data-aos={`${index % 2 === 0 ? "fade-right" : "fade-left"}`}
            data-aos-duration="800"
            className="my-6 flex min-h-fit w-full flex-col odd:items-end even:items-start sm:my-8 sm:w-[40rem] xl:h-[32rem] xl:w-full 2xl:h-[38rem] [&_img]:odd:left-0 [&_img]:even:right-0"
            key={index}
          >
            <img
              src={imgSrc}
              alt="Album"
              className="w-full object-contain xl:absolute xl:z-10 xl:mt-8 xl:h-[25rem] xl:w-[54%] xl:rounded-lg xl:object-fill 2xl:h-[31rem]"
            />

            <div className="flex h-full w-full flex-col justify-between rounded-none bg-[#2A303C] p-4 sm:p-8 xl:w-[69%] xl:rounded-lg">
              <div
                className={`mockup-code flex flex-col gap-2 overflow-hidden bg-transparent xl:w-[63%] ${
                  index % 2 === 0 ? "xl:self-start" : "xl:self-end"
                }`}
              >
                <Pre prefix="$" preclassname="text-xl">
                  <code>{title}</code>
                </Pre>

                <Pre div prefix=">" preclassname="text-success text-xl">
                  <p>{desc}</p>
                </Pre>

                <Pre
                  prefix="~"
                  preclassname="text-xl hover:bg-rose-500 transition-all hover:text-white"
                >
                  <a href={githublink} target="_blank">
                    Check Repository
                  </a>
                </Pre>

                <Pre
                  prefix="~"
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
        )
      )}
    </div>
  );
};

export default Work;
