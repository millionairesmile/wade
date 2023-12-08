const Section1 = () => {
  return (
    <section>
      <div
        style={{
          backgroundImage:
            'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.8)), url("./images/aboutimages.png")',
          backgroundSize: "cover",
          height: "1000px",
          left: 0,
          position: "relative",
          right: 0,
          top: "-3cm", // Adjust the top property to move the image up
        }}
      ></div>
      <div
        alt="sectionInner"
        style={{
          zIndex: 20,
          margin: "-5cm 3.91vw 0", // Set a negative margin for sectionInner
          position: "relative",
          top: "-22cm",
        }}
      >
        <div
          className="text-white"
          alt="textBox"
          style={{
            maxWidth: "none",
            padding: "0 10.42vw",
            position: "relative",
            zIndex: 20,
            margin: "0 auto",
          }}
        >
          <h1 className="font-black text-8xl mt-80">What the</h1>
          <h1 className="font-black text-8xl mt-5">WADE</h1>
          <p className="text-wade-gray text-xl mt-7">
            Wade is a huge fan of all the free-spirited underground players who
            don’t always play by the rulebook. Likewise, he strives not to be
            stereotyped to a fixed figure; Wade values originality and diversity
            over everything.
          </p>
          <p className="text-wade-gray text-xl mt-5">
            Wade’s nature to experiment and seek diversity lays the foundation
            of his highly fluid mindset. His flexible way of thinking sets
            ground for his creative work, which often twists the obvious or toss
            in hints of newness into existing things.
          </p>
          <p className="text-wade-gray text-xl mt-5">
            These creative works are part of Wade’s effort to bring down
            barriers between the mainstream and subcultures, inspiring all
            people with creative minds and granting them with opportunities to
            explore their ideas freely.
          </p>
          <p className="text-wade-gray text-xl mt-5">
            Wade’s iconic trait, ‘Water’, is the source of energy and elixir
            which fosters growth of all things. It symbolizes unlimited
            embracement, going beyond all skin color, race, class or gender. The
            eternally flowing nature of water represents the everlasting legacy
            of subcultures which has been along with us for countless
            generations.
          </p>
        </div>
        <div className="mx-[12vw] pt-[11%]">
          <iframe
            className="rounded-2xl flex justify-center"
            width="1280"
            height="720"
            src="https://www.youtube.com/embed/vplY4zESOlI"
            title="wade"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen=""
          ></iframe>{" "}
        </div>
      </div>
    </section>
  );
};

export default Section1;
