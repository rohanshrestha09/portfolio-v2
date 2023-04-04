import { RiHome2Line, RiContactsLine } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";
import { BiGitBranch } from "react-icons/bi";

const Nav: React.FC = () => {
  const navItems = [
    { Icon: RiHome2Line, name: "About" },
    { Icon: SiJavascript, name: "Skills" },
    { Icon: BiGitBranch, name: "Works" },
    { Icon: RiContactsLine, name: "Contact" },
  ];

  return (
    <nav className="fixed left-0 top-0 z-20 flex h-[3rem] w-full items-end bg-[rgb(40,42,57)] px-7 sm:h-[4rem] lg:px-20 xl:px-[15.5vw]">
      <div className="breadcrumbs text-[0.79rem] sm:text-xl">
        <ul>
          {navItems.map(({ Icon, name }) => (
            <li key={name}>
              <Icon className="mr-2" />
              <a href={`#${name.toLowerCase()}`}>{name}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
