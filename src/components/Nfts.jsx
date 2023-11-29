import Header from "./Header";

const Nfts = () => {
  return (
    <>
      <div className="absolute z-10 w-full">
        <Header />
      </div>
      <div className="bg-black min-h-screen flex justify-center items-center">
        <div className="flex justify-center items-center">
          <img src="./images/nftspage.png" className="absolute w-full h-full" />

          <video
            src="https://vos.line-scdn.net/ipx-wade/video/video_nft_card.mp4"
            loop
            autoPlay
            className="absolute h-[32.6vw] w-[21.15vw] mt-24"
            style={{ transform: "translateX(11cm)" }}
          />
        </div>
      </div>
    </>
  );
};

export default Nfts;
