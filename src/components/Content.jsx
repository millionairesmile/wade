import React, { useState, useEffect } from "react";
import Main from "./Main";

const Content = () => {
  const [aboutText, setAboutText] = useState("ABOUT");
  const [nftsText, setNftsText] = useState("NFTS");
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => {
        setAboutText((prevText) => (prevText === "ABOUT" ? "MUSIC" : "ABOUT"));
        setNftsText((prevText) => (prevText === "NFTS" ? "MERCH" : "NFTS"));
        setIsBlinking(false);
      }, 1000);
    }, 2500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center w-full h-screen">
      <div
        className="absolute z-10 flex flex-col items-center"
        style={{ transform: "translateY(-3cm)" }}
      >
        <div className="flex font-extrabold" style={{ whiteSpace: "nowrap" }}>
          <div
            style={{
              width: "500px", // Increased width for a wider gap
              fontSize: "150px",
              color: "transparent",
              WebkitTextStroke: "1px white",
              transition: "opacity 0.5s ease-in-out",
            }}
          >
            World
          </div>
          <div
            className={`text-5xl font-black text-white flex justify-center items-center ml-200 ${
              isBlinking ? "opacity-0" : ""
            }`}
            style={{
              width: "300px", // Increased width for a wider gap
              transition: "opacity 0.5s ease-in-out",
            }}
          >
            {aboutText}
          </div>
          <div
            style={{
              width: "500px", // Increased width for a wider gap
              fontSize: "150px",
              color: "transparent",
              WebkitTextStroke: "1px white",
              transition: "opacity 0.5s ease-in-out",
            }}
          >
            Wide
          </div>
          <div
            className={`text-5xl font-black text-white flex justify-center items-center ${
              isBlinking ? "opacity-0" : ""
            }`}
            style={{
              width: "300px", // Increased width for a wider gap
              transition: "opacity 0.5s ease-in-out",
            }}
          >
            {nftsText}
          </div>
          <div
            style={{
              width: "400px", // Increased width for a wider gap
              fontSize: "150px",
              color: "transparent",
              WebkitTextStroke: "1px white",
              transition: "opacity 0.5s ease-in-out",
            }}
          >
            Wade
          </div>
        </div>
        <div></div>
      </div>
      <Main />
    </div>
  );
};

export default Content;
