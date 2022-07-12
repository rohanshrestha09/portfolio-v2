import { BiChevronDown } from "react-icons/bi";

const About: React.FC = () => {
  return (
    <div
      className="w-full min-h-screen flex items-center overflow-hidden"
      id="about"
    >
      <div className="mockup-code overflow-hidden before:w-[0.9rem] before:h-[0.9rem] bg-transparent flex md:gap-[3.81rem] gap-[2.15rem] flex-col">
        <pre data-prefix="$" className="md:text-[2rem] text-xl">
          <code className="text-md md:text-[1.7rem]">जोजोल्पा!</code>
        </pre>
        <pre data-prefix=">" className="md:text-[2rem] text-xl">
          <code className="inline-flex">
            <p className="text-rose-500">I'm Rohan Shrestha.</p>
            <p className="pl-1 hidden sm:block animation">
              I'm a Web Developer.
            </p>
          </code>
        </pre>
        <pre
          data-prefix=">"
          className="md:text-[2rem] text-xl sm:hidden block animation"
        >
          <code>I'm a Web Developer.</code>
        </pre>
        <div
          data-prefix=">"
          className="text-rose-500 md:text-[2rem] text-xl inline-flex before:content-['>'] before:w-0 before:opacity-[0.5] pr:[1.25rem] before:mr-[1.8ch] break-words"
        >
          <code>
            <p>I love building responsive and full stack web apps.</p>
          </code>
        </div>
        <div
          data-prefix=">"
          className="md:text-[2rem] text-xl inline-flex before:content-['>'] before:w-0 before:opacity-[0.5] pr:[1.25rem] before:mr-[1.8ch] break-words"
        >
          <code className="md:inline-flex">
            Get in touch:
            <a href="mailto:shresthacr11@gmail.com" target="_blank">
              <p className="hover:bg-rose-500 hover:text-white underline underline-offset-8 md:px-1 transition-all cursor-pointer">
                shresthacr11@gmail.com
              </p>
            </a>
          </code>
        </div>
        <pre
          data-prefix="~"
          className="transition-all text-success hover:bg-success hover:text-white md:text-[2rem] text-xl"
          data-aos="zoom-out"
          data-aos-duration="1500"
        >
          <code className="inline-flex">
            <a href="#works" className="flex items-center">
              View my Projects
              <BiChevronDown className="text-xl md:text-[2rem]" />
            </a>
          </code>
        </pre>
      </div>
    </div>
  );
};

export default About;
