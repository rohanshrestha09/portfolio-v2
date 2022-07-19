import { RiHome2Line, RiContactsLine } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";
import { BiGitBranch } from "react-icons/bi";

const Nav: React.FC = () => {
  return (
    <nav className="z-20 w-full fixed left-0 top-0 sm:h-[4rem] h-[3rem] flex items-end 2xl:px-72 xl:px-44 lg:px-20 px-7 bg-[rgb(40,42,57)]">
      <div className="sm:text-xl text-[0.79rem] breadcrumbs">
        <ul>
          <li>
            <RiHome2Line className="mr-2" />
            <a href="#about">Home</a>
          </li>
          <li>
            <SiJavascript className="mr-2" />
            <a href="#skills">Skills</a>
          </li>
          <li>
            <BiGitBranch className="mr-2" />
            <a href="#works">Works</a>
          </li>
          <li>
            <RiContactsLine className="mr-2" />
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
