import React from "react";
import Header from "./Header";

const About = () => {
  return (
    <>
      <div className="absolute z-10 w-full">
        <Header />
      </div>
      <div className="bg-black min-h-screen flex justify-center items-center">
        <div
          className="absolute w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.8))",
          }}
        />
        <img
          src="./images/aboutIntro.jpeg"
          className="absolute w-full h-full opacity-80"
        />
        <div className="text-center relative flex justify-center items-center">
          <div className="w-full max-w-md animate-fadeInOut">
            <div className="text-8xl font-black text-white mb-4">
              <div className="mt-10">WORK</div>
              <div className="mt-10">IN</div>
              <div className="mt-10">PROGRESS</div>
              <div className="mt-10">🧑🏻‍💻</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
