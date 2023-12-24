import React, { useState, useEffect } from "react";
import Web3 from "web3";
import MyNFTContract from "../MyNFTContract.json";
import Header from "./Header";

const Nfts = () => {
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [mintedQuantity, setMintedQuantity] = useState(0);

  useEffect(() => {
    const initWeb3 = async () => {
      if (window.ethereum) {
        try {
          const web3Instance = new Web3(window.ethereum);
          await window.ethereum.request({ method: "eth_requestAccounts" });
          setWeb3(web3Instance);

          const networkId = await web3Instance.eth.net.getId();
          const deployedNetwork = MyNFTContract.networks[networkId];
          const contractInstance = new web3Instance.eth.Contract(
            MyNFTContract.abi,
            deployedNetwork && deployedNetwork.address
          );
          setContract(contractInstance);
        } catch (error) {
          console.error("Error connecting to MetaMask:", error);
        }
      } else {
        console.error("MetaMask not found");
      }
    };

    initWeb3();
  }, []);

  const mintNFT = async () => {
    try {
      console.log("Mint button clicked");
      if (web3 && contract) {
        await window.ethereum.request({ method: "eth_requestAccounts" });

        const accounts = await web3.eth.getAccounts();

        const gasAmount = await contract.methods.mint().estimateGas({
          from: accounts[0],
          value: web3.utils.toWei("0.01", "ether"),
        });

        const result = await contract.methods.mint().send({
          from: accounts[0],
          value: web3.utils.toWei("0.01", "ether"),
          gas: gasAmount,
        });

        setMintedQuantity((prevQuantity) => prevQuantity + 1);

        console.log("NFT Minted successfully:", result);
      } else {
        console.error("Web3 or contract not initialized");
      }
    } catch (error) {
      console.error("Error minting NFT:", error);
    }
  };

  const percentage = (mintedQuantity / 777) * 100;

  return (
    <>
      <div className="absolute z-10 w-full">
        <Header />
      </div>
      <div className="bg-black min-h-screen flex justify-center items-center">
        <div className="flex justify-center items-center">
          <img src="./images/nftspage.png" className="absolute w-full h-full" />
          <video
            src="./images/video_nft_card.mp4"
            loop
            autoPlay
            className="absolute h-[32.6vw] w-[21.15vw] mt-24"
            style={{ transform: "translateX(11cm)" }}
          />

          <div
            className="absolute h-[32.6vw] w-[50vw] text-white ml-[16cm]"
            style={{ transform: "translateX(-15cm)" }}
          >
            <h1
              className="font-black text-8xl fun-facts"
              style={{
                background: "linear-gradient(90deg, #2cd2d2 0, #2394fc)",
                padding: "8.18vw 0 5.36vw",
                display: "inline",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              WADE F&F
            </h1>
            <h2
              className="font-black text-8xl mt-5"
              style={{
                background: "linear-gradient(90deg, #2cd2d2 0, #2394fc)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Membership
            </h2>
            <p className="text-lg mt-5 text-wade-gray">
              To join, one must hold the WADE F&F NFT.
            </p>
            <p className="text-lg text-wade-gray">
              Membership benefits include access to our private community,
              exclusive goods and products, IRL events, and more.
            </p>
            <div className="flex justify-center items-center flex-col mt-20">
              <div className="relative w-[43vw] h-8 mb-2 bg-gray-800 rounded-full">
                <div
                  className="absolute h-full bg-blue-300 rounded-full"
                  style={{
                    width: `${percentage}%`,
                  }}
                ></div>
                <div className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-end pr-2">
                  <span className="text-white">{`${percentage.toFixed(
                    2
                  )}%`}</span>
                </div>
              </div>
              <button
                className="h-10 w-24 rounded-3xl font-semibold mt-5"
                style={{
                  background: "linear-gradient(90deg, #2cd2d2 0, #2394fc)",
                }}
                onClick={mintNFT}
              >
                MINT
              </button>
            </div>
            <p className="flex justify-center mt-10">
              <button
                className="h-10 w-48 rounded-3xl font-semibold"
                style={{
                  background: "linear-gradient(90deg, #2cd2d2 0, #2394fc)",
                }}
                onClick={() => {
                  window.open("https://testnets.opensea.io/", "_blank");
                }}
              >
                VIEW ON OPENSEA
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nfts;
