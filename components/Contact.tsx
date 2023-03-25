import { useState } from "react";
import "aos/dist/aos.css";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { RiArrowRightSLine } from "react-icons/ri";
import Pre from "./Pre";

const initialValue = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const Contact: React.FC = () => {
  const [userData, setUserData] = useState(initialValue);

  const { name, email, subject, message } = userData;

  const onChange = (e: React.SyntheticEvent) => {
    const { name, value } = e.target as any;
    setUserData({ ...userData, [name]: value });
  };

  const handleFormSubmission = useMutation(
    (data: typeof userData) => axios.post("/api/contact", data),
    {
      onSuccess: () => setUserData(initialValue),
    }
  );

  return (
    <div
      className="w-full min-h-screen flex items-center justify-between overflow-hidden"
      id="contact"
    >
      <form
        className="mockup-code before:w-[0.9rem] before:h-[0.9rem] overflow-hidden bg-transparent flex flex-col md:gap-[2.45rem] gap-[2.15rem]"
        onSubmit={(event: React.SyntheticEvent) => {
          event.preventDefault();
          handleFormSubmission.mutate(userData);
        }}
      >
        <Pre
          data-prefix="$"
          data-aos="zoom-out"
          data-aos-duration="500"
          preclassname="md:text-[2rem] text-xl"
        >
          Contact Me
        </Pre>

        <Pre
          data-prefix=">"
          preclassname="text-rose-500 md:text-[2rem] text-xl"
        >
          <input
            className="bg-transparent outline-none placeholder:text-rose-500"
            placeholder="Name"
            name="name"
            value={name}
            onChange={onChange}
            required
          />
        </Pre>

        <Pre data-prefix=">" preclassname="md:text-[2rem] text-xl">
          <input
            className="bg-transparent outline-none w-3/4"
            placeholder="Email"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </Pre>

        <Pre
          data-prefix=">"
          preclassname="md:text-[2rem] text-xl text-rose-500"
        >
          <input
            className="bg-transparent outline-none placeholder:text-rose-500 w-3/4"
            placeholder="Subject"
            name="subject"
            value={subject}
            onChange={onChange}
            required
          />
        </Pre>

        <Pre data-prefix=">" preclassname="md:text-[2rem] inline-flex text-xl">
          <textarea
            cols={60}
            className="resize-none col-span-full bg-transparent outline-none w-[80%]"
            placeholder="Message"
            name="message"
            value={message}
            onChange={onChange}
            required
          />
        </Pre>

        <Pre
          data-prefix="~"
          preclassname="transition-all text-success hover:bg-success hover:text-white md:text-[2rem] text-xl"
          codeclassname="inline-flex items-center"
        >
          <button
            type="submit"
            className={`cursor-pointer flex items-center ${
              handleFormSubmission.isLoading && "cursor-not-allowed"
            }`}
            disabled={handleFormSubmission.isLoading}
          >
            {handleFormSubmission.isLoading ? "Sending..." : "Send Message"}
            {!handleFormSubmission.isLoading && (
              <RiArrowRightSLine className="h-7" />
            )}
          </button>
        </Pre>
      </form>
    </div>
  );
};

export default Contact;
