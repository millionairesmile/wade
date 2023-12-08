import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between items-center text-2xl sticky top-0 text-white z-40  absolute">
      <>
        <Link to="/">
          <img
            src="./images/wadeLogo.png"
            className="w-[160px] ml-3"
            alt="Wade Logo"
          />
        </Link>

        <div className="mr-5 flex">
          <div>
            <ul className="flex text-[18px] font-bold gap-24">
              <Link to="/About">
                <li className="nav-item">ABOUT</li>
              </Link>
              <Link to="/Nfts">
                <li className="nav-item">NFTS</li>
              </Link>
              <li className="text-wade-gray">MUSIC</li>
              <li className="text-wade-gray">MERCH</li>
            </ul>
          </div>
          <a
            href="https://www.instagram.com/worldwide.wade"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex w-[35px] h-[35px]  justify-center items-center rounded-full bg-[#756e6e58] text-[10px] text-white ml-16">
              <span>
                <img
                  src="./images/instagram.svg"
                  className="w-[19px] y-[19px]"
                  alt="Instagram"
                />
              </span>
            </div>
          </a>
          <a
            href="https://twitter.com/worldwide_wade"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex w-[35px] h-[35px]  justify-center items-center rounded-full bg-[#756e6e58] text-[10px] text-white ml-4">
              <img
                src="./images/twitterX.svg"
                className="w-[19px] y-[19px]"
                alt="Twitter"
              />
            </div>
          </a>
          <a
            href="https://discord.com/invite/cripco"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex w-[35px] h-[35px]  justify-center items-center rounded-full bg-[#756e6e58] text-[10px] text-white ml-4">
              <img
                src="./images/discord.svg"
                className="w-[19px] y-[19px]"
                alt="Discord"
              />
            </div>
          </a>
        </div>
      </>
    </div>
  );
};

export default Header;
