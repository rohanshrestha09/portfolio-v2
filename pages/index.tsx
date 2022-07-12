import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Nav from "../components/Nav";
import Works from "../components/Work";
import Skills from "../components/Skills";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home: NextPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="w-full overflow-x-hidden xl:px-44 lg:px-20 px-7 bg-[rgb(40,42,57)] text-white font-sans">
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
