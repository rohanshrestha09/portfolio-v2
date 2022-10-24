import { useState } from 'react';
import 'aos/dist/aos.css';
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import { RiArrowRightSLine } from 'react-icons/ri';
import Pre from './Pre';

const Contact: React.FC = () => {
  const [userdata, setUserdata] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const { name, email, subject, message } = userdata;

  const onChange = (e: React.SyntheticEvent) => {
    const { name, value } = e.target as any;
    setUserdata({ ...userdata, [name]: value });
  };

  const handleFormSubmission = useMutation(
    (data: { name: string; email: string; subject: string; message: string }) =>
      axios.post('/api/contact', data),
    {
      onSuccess: () =>
        setUserdata({
          name: '',
          email: '',
          subject: '',
          message: '',
        }),
    }
  );

  return (
    <div
      className='w-full min-h-screen flex items-center justify-between overflow-hidden'
      id='contact'
    >
      <form
        className='mockup-code before:w-[0.9rem] before:h-[0.9rem] overflow-hidden bg-transparent flex flex-col md:gap-[2.45rem] gap-[2.15rem]'
        onSubmit={(event: React.SyntheticEvent) => {
          event.preventDefault();
          handleFormSubmission.mutate(userdata);
        }}
      >
        <Pre
          data-prefix='$'
          data-aos='zoom-out'
          data-aos-duration='500'
          preClassName='md:text-[2rem] text-xl'
        >
          Contact Me
        </Pre>

        <Pre data-prefix='>' preClassName='text-rose-500 md:text-[2rem] text-xl'>
          <input
            className='bg-transparent outline-none placeholder:text-rose-500'
            placeholder='Name'
            name='name'
            value={name}
            onChange={onChange}
            required
          />
        </Pre>

        <Pre data-prefix='>' preClassName='md:text-[2rem] text-xl'>
          <input
            className='bg-transparent outline-none w-3/4'
            placeholder='Email'
            name='email'
            value={email}
            onChange={onChange}
            required
          />
        </Pre>

        <Pre data-prefix='>' preClassName='md:text-[2rem] text-xl text-rose-500'>
          <input
            className='bg-transparent outline-none placeholder:text-rose-500 w-3/4'
            placeholder='Subject'
            name='subject'
            value={subject}
            onChange={onChange}
            required
          />
        </Pre>

        <Pre data-prefix='>' preClassName='md:text-[2rem] inline-flex text-xl'>
          <textarea
            cols={60}
            className='resize-none col-span-full bg-transparent outline-none w-[80%]'
            placeholder='Message'
            name='message'
            value={message}
            onChange={onChange}
            required
          />
        </Pre>

        <Pre
          data-prefix='~'
          preClassName='transition-all text-success hover:bg-success hover:text-white md:text-[2rem] text-xl'
          codeClassName='inline-flex items-center'
        >
          <>
            <button
              type='submit'
              className='cursor-pointer'
              disabled={handleFormSubmission.isLoading}
            >
              Send Message
            </button>

            <RiArrowRightSLine />
          </>
        </Pre>
      </form>
    </div>
  );
};

export default Contact;
