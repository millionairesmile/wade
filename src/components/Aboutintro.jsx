import React from "react";
import Header from "./Header";
import Section1 from "./Intro";

const AboutIntro = () => {
  return (
    <>
      <div
        className="bg-black"
        style={{ overflowY: "auto", height: "100vh", margin: 0, padding: 0 }}
      >
        <Header />
        <div>
          <div>
            <Section1 />
            <section
              style={{
                overflow: "hidden",
                position: "relative", // Set position to relative
                top: "-16cm", // Move the section 10cm above
              }}
            >
              <div
                className="font-black text-8xl fun-facts ml-80"
                style={{
                  background: "linear-gradient(90deg, #2cd2d2 0, #2394fc)",
                  padding: "8.18vw 0 5.36vw",
                  display: "inline",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Fun Facts
              </div>
              <div
                className="mt-20"
                alt="box"
                style={{
                  border: "1px solid transparent", // Set the border size
                  borderTop: "1px solid #2cd2d2", // Top border color
                  borderBottom: "1px solid #2394fc", // Bottom border color
                  height: "7cm", // Set the height
                  width: "100%", // Ensure full width
                  boxSizing: "border-box", // Include the border in the width calculation
                }}
              >
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </section>
            <section>2</section>
            <section>3</section>
            <section>4</section>
          </div>
        </div>
        <div>Footer</div>
      </div>
    </>
  );
};

export default AboutIntro;
