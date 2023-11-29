import React from "react";

const About = () => {
  return (
    <div className="bg-black min-h-screen flex justify-center items-center">
      <div className="flex justify-center items-center">
        <img
          src="./images/aboutIntro.jpeg"
          className="absolute w-full h-full"
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
    </div>
  );
};

export default About;
