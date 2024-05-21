import { FaLocationArrow, FaEnvelope } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full h-screen inline-grid">
      {/* background grid */}
      <div className="w-full h-dvh relative left-0 -bottom-96 min-h-80">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center pb-80" id="contact">
        <h1 className="heading">
          Ready to elevate<br />
          your <span className="text-purple">Cinema</span> and <span className="text-purple">Web3</span><br />
          experience to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Join CineCrowd and be a part of the revolution in film funding and artistic expression.
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <a href="mailto:info@CineCrowd.xyz">
            <MagicButton
              title="Let's get in touch"
              icon={<FaEnvelope />}
              position="right"
            />
          </a>
          <a href="https://ixz2yuxfmdj.typeform.com/to/aDRFNBHq" target="_blank" rel="noreferrer">
            <MagicButton
              title="Filmmakers Form"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 CineCrowd.xyz
        </p>

        {/* <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div> */}
      </div>
    </footer >
  );
};

export default Footer;
