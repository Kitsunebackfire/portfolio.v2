import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const IntroNav = () => {
  const [text, count] = useTypewriter({
    words: [
      "Hi my name is Kurtis",
      "Guy-who-loves-Jiu-Jitsu",
      "<ButReallyLovesToCode/>",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className=" h-screen  flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <img
        className="relative rounded-full h-50 w-50 mx-auto object-cover xl:h-60 xl:w-60 "
        src="https://kitsunebackfire.github.io/portfolio/static/media/headshot.2c1b0e6f396d86cf1bcb.jpeg"
        alt="me"
      />
      <h2 className="text-sm  lg:text-4xl xl:text-4xl uppercase text-gray-500 tracking-[15px]">
        Fullstack Developer
      </h2>
      <h1 className=" font-semibold scroll-px-10">
        <span className="mr-3 text-2xl sm:text-4xl lg:text-6xl ">{text}</span>
        <Cursor cursorColor="#F04E35" />
      </h1>
      <nav className=" grid grid-cols-2 gap-8 sm:grid-cols-4 ">
        <a href="#about" className=" navBtn">
          About
        </a>
        <a href="#skills" className=" navBtn">
          Skills
        </a>

        <a href="#projects" className=" navBtn">
          Projects
        </a>
        <a href="#contact" className=" navBtn">
          Contact
        </a>
      </nav>
    </div>
  );
};

export default IntroNav;