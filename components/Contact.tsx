import { useState } from "react";
import "aos/dist/aos.css";
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
    (data: typeof userData) =>
      fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
      }),
    {
      onSuccess: () => setUserData(initialValue),
    },
  );

  return (
    <div
      className="flex min-h-screen w-full items-center justify-between overflow-hidden"
      id="contact"
    >
      <form
        className="mockup-code flex flex-col gap-[2.15rem] overflow-hidden bg-transparent before:h-[0.9rem] before:w-[0.9rem] md:gap-[2.45rem]"
        onSubmit={(event: React.SyntheticEvent) => {
          event.preventDefault();
          handleFormSubmission.mutate(userData);
        }}
      >
        <Pre
          prefix="$"
          data-aos="zoom-out"
          data-aos-duration="500"
          preclassname="md:text-[2rem] text-xl"
        >
          Contact Me
        </Pre>

        <Pre prefix=">" preclassname="text-rose-500 md:text-[2rem] text-xl">
          <input
            className="w-full bg-transparent outline-none placeholder:text-rose-500"
            placeholder="Name"
            name="name"
            value={name}
            onChange={onChange}
            required
          />
        </Pre>

        <Pre prefix=">" preclassname="md:text-[2rem] text-xl">
          <input
            className="w-full bg-transparent outline-none"
            placeholder="Email"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </Pre>

        <Pre prefix=">" preclassname="md:text-[2rem] text-xl text-rose-500">
          <input
            className="w-full bg-transparent outline-none placeholder:text-rose-500"
            placeholder="Subject"
            name="subject"
            value={subject}
            onChange={onChange}
            required
          />
        </Pre>

        <Pre prefix=">" preclassname="md:text-[2rem] text-xl">
          <textarea
            cols={60}
            className="col-span-full w-[80%] resize-none bg-transparent outline-none"
            placeholder="Message"
            name="message"
            value={message}
            onChange={onChange}
            required
          />
        </Pre>

        <Pre
          prefix="~"
          preclassname="transition-all text-success hover:bg-success hover:text-white md:text-[2rem] text-xl"
          codeclassname="inline-flex items-center"
        >
          <button
            type="submit"
            className={`flex cursor-pointer items-center ${
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
