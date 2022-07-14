import React, { useState } from "react";
import axios from "axios";
import { RiArrowRightSLine } from "react-icons/ri";
import "aos/dist/aos.css";

const Contact: React.FC = () => {
  const [userdata, setUserdata] = useState<{
    name: string;
    email: string;
    subject: string;
    message: string;
  }>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [messageSent, setMessageSent] = useState<boolean>(true);

  const { name, email, subject, message } = userdata;

  const onChange = (e: React.SyntheticEvent) => {
    const { name, value } = e.target as any;
    setUserdata({ ...userdata, [name]: value });
  };

  const formSubmission = async (event: React.SyntheticEvent): Promise<void> => {
    event.preventDefault();
    try {
      if (name && email && subject && message) {
        setMessageSent(false);
        const { status } = await axios.post("/api/contact", userdata);
        if (status === 201) {
          setUserdata({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
          setMessageSent(true);
        }
      }
    } catch (err: any) {
      console.log(err.response.data);
    }
  };

  return (
    <div
      className="w-full min-h-screen flex items-center justify-between overflow-hidden"
      id="contact"
    >
      <form
        className="mockup-code before:w-[0.9rem] before:h-[0.9rem] overflow-hidden bg-transparent flex flex-col md:gap-[2.45rem] gap-[2.15rem]"
        onSubmit={(e) => messageSent && formSubmission(e)}
      >
        <pre
          data-prefix="$"
          className="md:text-[2rem] text-xl"
          data-aos="zoom-out"
        >
          <code>Contact Me</code>
        </pre>
        <pre data-prefix=">" className="text-rose-500 md:text-[2rem] text-xl">
          <code>
            <input
              type="text"
              className="bg-transparent outline-none placeholder:text-rose-500"
              placeholder="Name"
              autoComplete="off"
              name="name"
              value={name}
              onChange={onChange}
              required
            />
          </code>
        </pre>
        <pre data-prefix=">" className="md:text-[2rem] text-xl">
          <code>
            <input
              type="text"
              className="bg-transparent outline-none w-3/4"
              placeholder="Email"
              autoComplete="off"
              name="email"
              value={email}
              onChange={onChange}
              required
            />
          </code>
        </pre>
        <pre data-prefix=">" className="md:text-[2rem] text-xl text-rose-500">
          <code>
            <input
              type="text"
              className="bg-transparent outline-none placeholder:text-rose-500 w-3/4"
              placeholder="Subject"
              autoComplete="off"
              name="subject"
              value={subject}
              onChange={onChange}
              required
            />
          </code>
        </pre>
        <pre data-prefix=">" className="md:text-[2rem] inline-flex text-xl">
          <code>
            <textarea
              cols={60}
              className="resize-none col-span-full bg-transparent outline-none w-[80%]"
              placeholder="Message"
              autoComplete="off"
              name="message"
              value={message}
              onChange={onChange}
              required
            />
          </code>
        </pre>
        <pre
          data-prefix="~"
          className="transition-all text-success hover:bg-success hover:text-white md:text-[2rem] text-xl"
        >
          <code className="inline-flex">
            <div className="flex items-center">
              <input
                type="submit"
                value="Send Message"
                className="cursor-pointer"
              />

              <RiArrowRightSLine />
            </div>
          </code>
        </pre>
      </form>
    </div>
  );
};

export default Contact;
