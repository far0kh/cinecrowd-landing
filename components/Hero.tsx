import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-2 md:pb-8 pt-16" id="#">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words="Empower Films with Fan Tokens"
            firstLineWords={2}
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider my-4 text-xl md:text-2xl lg:text-3xl">
            Shape the Future of Cinema with CineCrowd.xyz
          </p>
          <p className="text-center md:tracking-wider my-4 text-xs md:text-sm lg:text-xl">
            CineCrowd is a groundbreaking Bitcoin-based platform that empowers fans to support and influence their favorite films through valuable fan tokens. We bridge the gap between Bitcoin enthusiasts and visual artists, fostering a new era of artistic expression and funding.
          </p>

          <div className="flex flex-col md:flex-row gap-4 mt-16">
            <div className="flex flex-row items-end">
              <div className="flex flex-col">
                <p className="tracking-widest text-end text-xl text-blue-100 font-bold max-w-50 pe-1">
                  CineCrowd.xyz
                </p>
                <p className="italic tracking-widest text-[0.5rem] text-end text-gray-400 max-w-50 pe-1">
                  Powered by
                </p>
              </div>
              <Image
                src="/btcslab.png"
                height="100"
                width="100"
                alt="BTCSLab Logo"
              />
            </div>
            {/* <a href="#about">
              <MagicButton
                title="Show my work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a> */}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
