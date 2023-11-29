import React from "react";
import Header from "./Header";

const AboutIntro = () => {
  return (
    <div className="relative ">
      <Header />
      <div className="relative mt-[-5vw] z-1">
        {" "}
        {/* 낮은 z-index 값 */}
        <img
          src="./images/aboutIntro.jpeg"
          className="h-[62.5vw] w-full"
          alt="About Intro"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold z-20">
          Intro
        </div>
      </div>
    </div>
  );
};

export default AboutIntro;
