import 'aos/dist/aos.css';
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
} from 'react-icons/si';
import PreTag from './PreTag';

const Skills: React.FC = () => {
  const skills = [
    { Icon: SiHtml5, name: 'HTML5' },
    { Icon: SiCss3, name: 'CSS3' },
    { Icon: SiJavascript, name: 'JavaScript' },
    { Icon: SiTailwindcss, name: 'Tailwindcss' },
    { Icon: SiReact, name: 'React' },
    { Icon: SiNextdotjs, name: 'Next' },
    { Icon: SiTypescript, name: 'TypeScript' },
    { Icon: SiMongodb, name: 'Mongodb' },
    { Icon: SiNodedotjs, name: 'Nodejs' },
    { Icon: SiExpress, name: 'Express' },
    { Icon: SiNestjs, name: 'Nest' },
    { Icon: SiLinux, name: 'Linux' },
    { Icon: SiGit, name: 'Git' },
    { Icon: SiGithub, name: 'Github' },
  ];

  return (
    <div
      className='w-full min-h-screen md:h-screen flex flex-col items-center overflow-hidden'
      id='skills'
    >
      <div
        className='mockup-code before:hidden min-w-0 bg-transparent py-10 lg:py-28 sm:py-14'
        data-aos='fade-right'
      >
        <PreTag data-prefix='$' preClassName='text-3xl lg:text-5xl'>
          My Skills
        </PreTag>
      </div>

      <div className='grid grid-rows-auto lg:grid-cols-7 md:grid-cols-5 sm:grid-cols-4 grid-cols-3 md:gap-20 sm:gap-14 gap-8'>
        {skills.map(({ Icon, name }, index: number) => (
          <div className='flex flex-col items-center' key={index}>
            <span data-aos={index > 7 ? 'fade-down' : 'fade-up'} data-aos-duration='800'>
              <Icon className='md:text-7xl text-5xl' />
            </span>

            <p className='pt-1 md:text-lg'>{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
