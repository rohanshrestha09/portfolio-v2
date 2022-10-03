import { RiHome2Line, RiContactsLine } from 'react-icons/ri';
import { SiJavascript } from 'react-icons/si';
import { BiGitBranch } from 'react-icons/bi';

const Nav: React.FC = () => {
  const navItems = [
    { Icon: RiHome2Line, name: 'About' },
    { Icon: SiJavascript, name: 'Skills' },
    { Icon: BiGitBranch, name: 'Works' },
    { Icon: RiContactsLine, name: 'Contact' },
  ];

  return (
    <nav className='z-20 w-full fixed left-0 top-0 sm:h-[4rem] h-[3rem] flex items-end 2xl:px-72 xl:px-44 lg:px-20 px-7 bg-[rgb(40,42,57)]'>
      <div className='sm:text-xl text-[0.79rem] breadcrumbs'>
        <ul>
          {navItems.map(({ Icon, name }) => (
            <li>
              <Icon className='mr-2' />
              <a href={`#${name.toLowerCase()}`}>{name}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
