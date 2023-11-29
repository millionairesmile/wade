import { useState } from "react";

const Video = () => {
  const [isMuted, setIsMuted] = useState(true);

  const handleToggleMute = () => {
    setIsMuted((prevMuted) => !prevMuted);
  };

  return (
    <>
      <video
        className="fixed inset-0 object-cover w-full h-full z-[-1]"
        src="./images/wade_video.mp4"
        autoPlay
        loop
        muted={isMuted}
      />

      <div className="fixed bottom-4 right-4 mr-10 mb-20">
        <span
          className="text-white text-lg mr-2"
          style={{ position: "relative", top: "-0.1cm" }}
        >
          {isMuted ? "SOUND ON" : "SOUND OFF"}
        </span>
        <button
          onClick={handleToggleMute}
          className="p-2 w-[50px] h-[50px] justify-center items-center rounded-full bg-[rgba(0,0,0,0.5)]"
        >
          {isMuted ? (
            <img
              className="ml-1"
              src="/images/unmute.svg"
              alt="Unmute"
              style={{ width: "24px", height: "24px" }}
            />
          ) : (
            <img
              className="ml-1"
              src="/images/mute.svg"
              alt="Mute"
              style={{ width: "24px", height: "24px" }}
            />
          )}
        </button>
      </div>
    </>
  );
};

export default Video;
