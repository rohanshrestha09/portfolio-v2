import { BiChevronDown } from "react-icons/bi";
import Pre from "./Pre";

const About: React.FC = () => {
  return (
    <div
      className="flex min-h-screen w-full items-center overflow-hidden"
      id="about"
    >
      <div className="mockup-code flex flex-col gap-[2.15rem] overflow-hidden bg-transparent before:h-[0.9rem] before:w-[0.9rem] md:gap-[3.8rem]">
        <Pre
          prefix="$"
          preclassname="md:text-[2rem] text-xl"
          codeclassname="text-md md:text-[1.7rem]"
        >
          जोजोल्पा!
        </Pre>

        <Pre
          prefix=">"
          preclassname="md:text-[2rem] text-xl"
          codeclassname="inline-flex"
        >
          <p className="text-rose-500">I'm Rohan Shrestha.</p>
          <p className="hidden pl-1 sm:block">I'm a Web Developer.</p>
        </Pre>

        <Pre prefix=">" preclassname="md:text-[2rem] text-xl sm:hidden block">
          I'm a Web Developer.
        </Pre>

        <Pre div prefix=">" preclassname="text-rose-500 md:text-[2rem] text-xl">
          <p>I love building responsive and full stack web apps.</p>
        </Pre>

        <Pre
          prefix=">"
          codeclassname="md:inline-flex"
          preclassname="md:text-[2rem] text-xl"
        >
          <>
            Get in touch:
            <a href="mailto:shresthacr11@gmail.com" target="_blank">
              <p className="cursor-pointer underline underline-offset-8 transition-all hover:bg-rose-500 hover:text-white md:px-1">
                shresthacr11@gmail.com
              </p>
            </a>
          </>
        </Pre>

        <Pre
          prefix="~"
          data-aos="zoom-out"
          data-aos-duration="800"
          preclassname="transition-all text-success hover:bg-success hover:text-white md:text-[2rem] text-xl"
          codeclassname="inline-flex"
        >
          <a href="#works" className="flex items-center">
            View my Projects
            <BiChevronDown className="text-xl md:text-[2rem]" />
          </a>
        </Pre>
      </div>
    </div>
  );
};

export default About;
