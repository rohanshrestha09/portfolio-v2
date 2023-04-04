import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "../components/About";
import Contact from "../components/Contact";
import Nav from "../components/Nav";
import Works from "../components/Work";
import Skills from "../components/Skills";

const Home: NextPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="w-full overflow-x-hidden bg-[rgb(40,42,57)] px-7 font-sans text-white lg:px-20 xl:px-[15.5vw]">
      <Head>
        <title>Rohan Shrestha</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <About />
      <Skills />
      <Works />
      <Contact />
    </div>
  );
};

export default Home;
