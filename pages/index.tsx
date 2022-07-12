import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Nav from "../components/Nav";
import Works from "../components/Work";
import Skills from "../components/Skills";
import Script from "next/script";

const Home: NextPage = () => {
  return (
    <div className="w-full overflow-x-hidden xl:px-44 lg:px-20 px-7 bg-[rgb(40,42,57)] text-white font-sans">
      <Head>
        <title>Rohan Shrestha</title>
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        <script src="https://unpkg.com/aos@next/dist/aos.js" defer></script>
        <script defer>AOS.init()</script>
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
