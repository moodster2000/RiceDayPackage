import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Link, useHistory, withRouter, Redirect } from "react-router-dom";
import "./MintPage.scss";
import { formatEther, parseEther } from "@ethersproject/units";
import sadRice from "../unknownPage/sadRice.png";
import uncleRoger from "../mintingPage/uncleRoger.gif";
import comboSticker3 from "../stickers/comboSticker3.png";
import comboSticker2 from "../stickers/comboSticker5.png";

import {
  useBalance,
  useContractLoader,
  useContractReader,
  useGasPrice,
  useOnBlock,
  useUserProviderAndSigner,
} from "eth-hooks";
// displays a page webMintingHeader

export default function AdminPage({ address, web3Modal, loadWeb3Modal, readContracts, writeContracts, tx }) {
  const [quantity, setQuantity] = useState(1);
  let history = useHistory();
  const [route, setRoute] = useState();
  useEffect(() => {
    setRoute(window.location.pathname);
  }, [setRoute]);

  const maxSupply = useContractReader(readContracts, "RiceDay", "MAX_SUPPLY");
  if (maxSupply) {
    console.log(`ALT max supply bois`, maxSupply.toString());
  }

  const publicMint = async () => {
    const ethAmount = 0.08;
    const result = tx(
      writeContracts.RiceDay.publicSaleMint(quantity, {
        value: parseEther(ethAmount.toString()),
      }),
      update => {
        console.log("📡 Transaction Update:", update.status);
        if (update && (update.status === "confirmed" || update.status === 1)) {
          console.log(" 🍾 Transaction " + update.hash + " finished!");
          console.log(
            " ⛽️ " +
              update.gasUsed +
              "/" +
              (update.gasLimit || update.gas) +
              " @ " +
              parseFloat(update.gasPrice) / 1000000000 +
              " gwei",
          );
        }
      },
    );
  };
  const changeSaleStatus = async () => {
    const ethAmount = 0.15;
    const result = tx(writeContracts.RiceDay.changePhase(1), update => {
      console.log("📡 Transaction Update:", update.status);
      if (update && (update.status === "confirmed" || update.status === 1)) {
        console.log(" 🍾 Transaction " + update.hash + " finished!");
        console.log(
          " ⛽️ " +
            update.gasUsed +
            "/" +
            (update.gasLimit || update.gas) +
            " @ " +
            parseFloat(update.gasPrice) / 1000000000 +
            " gwei",
        );
      }
    });
  };
  const setSigners = async () => {
    const ethAmount = 0.15;
    const result = tx(
      writeContracts.RiceDay.setSigners(
        "0x46a0f503836cdB2C599a4C51CBdDEBd8f6E97840",
        "0x79Dc21c0ccC00739F0dFEf6028FeC6eB217D7e2d",
      ),
      update => {
        console.log("📡 Transaction Update:", update.status);
        if (update && (update.status === "confirmed" || update.status === 1)) {
          console.log(" 🍾 Transaction " + update.hash + " finished!");
          console.log(
            " ⛽️ " +
              update.gasUsed +
              "/" +
              (update.gasLimit || update.gas) +
              " @ " +
              parseFloat(update.gasPrice) / 1000000000 +
              " gwei",
          );
        }
      },
    );
  };
  const setDevMint = async () => {
    const ethAmount = 0.15;
    const result = tx(
      writeContracts.RiceDay.setDevMint(
        ["0x2a59FfA6D6a99ae83b1dF9ccdDca87Fb7ca6A737"],
        1
      ),
      update => {
        console.log("📡 Transaction Update:", update.status);
        if (update && (update.status === "confirmed" || update.status === 1)) {
          console.log(" 🍾 Transaction " + update.hash + " finished!");
          console.log(
            " ⛽️ " +
              update.gasUsed +
              "/" +
              (update.gasLimit || update.gas) +
              " @ " +
              parseFloat(update.gasPrice) / 1000000000 +
              " gwei",
          );
        }
      },
    );
  };
  const transferOwnership = async () => {
    const ethAmount = 0.15;
    const result = tx(
      writeContracts.RiceDay.transferOwnership("0xF253A39A2126941d0fB5f9f1D9f246d2e965FA8b"),
      update => {
        console.log("📡 Transaction Update:", update.status);
        if (update && (update.status === "confirmed" || update.status === 1)) {
          console.log(" 🍾 Transaction " + update.hash + " finished!");
          console.log(
            " ⛽️ " +
              update.gasUsed +
              "/" +
              (update.gasLimit || update.gas) +
              " @ " +
              parseFloat(update.gasPrice) / 1000000000 +
              " gwei",
          );
        }
      },
    );
  };
  const devMint = async () => {
    const ethAmount = 0.15;
    const result = tx(writeContracts.RiceDay.devMint(), update => {
      console.log("📡 Transaction Update:", update.status);
      if (update && (update.status === "confirmed" || update.status === 1)) {
        console.log(" 🍾 Transaction " + update.hash + " finished!");
        console.log(
          " ⛽️ " +
            update.gasUsed +
            "/" +
            (update.gasLimit || update.gas) +
            " @ " +
            parseFloat(update.gasPrice) / 1000000000 +
            " gwei",
        );
      }
    });
  };
  const setRevealed = async () => {
    const ethAmount = 0.15;
    const result = tx(writeContracts.RiceDay.setRiceDayReveal("0"), update => {
      console.log("📡 Transaction Update:", update.status);
      if (update && (update.status === "confirmed" || update.status === 1)) {
        console.log(" 🍾 Transaction " + update.hash + " finished!");
        console.log(
          " ⛽️ " +
            update.gasUsed +
            "/" +
            (update.gasLimit || update.gas) +
            " @ " +
            parseFloat(update.gasPrice) / 1000000000 +
            " gwei",
        );
      }
    });
  };
  const setBaseURI = async () => {
    const ethAmount = 0.15;
    const result = tx(
      writeContracts.RiceDay.setBaseURI("https://storage.googleapis.com/prereveal_riceday/RiceDay.json"),
      update => {
        console.log("📡 Transaction Update:", update.status);
        if (update && (update.status === "confirmed" || update.status === 1)) {
          console.log(" 🍾 Transaction " + update.hash + " finished!");
          console.log(
            " ⛽️ " +
              update.gasUsed +
              "/" +
              (update.gasLimit || update.gas) +
              " @ " +
              parseFloat(update.gasPrice) / 1000000000 +
              " gwei",
          );
        }
      },
    );
  };
  const prepChefMint = async () => {
    const ethAmount = 0.15;
    const result = tx(
      writeContracts.RiceDay.prepChefMint(
        "0xaeffbea68c2877e21960157ef0076ac495297f30daa9214a3c6efd5918a4cedb3c99f4a6ee9162152aef4b557152701a468a3dc213856cad1e95e0fe166407691c",
        {
          value: parseEther(ethAmount.toString()),
        },
      ),
      update => {
        console.log("📡 Transaction Update:", update.status);
        if (update && (update.status === "confirmed" || update.status === 1)) {
          console.log(" 🍾 Transaction " + update.hash + " finished!");
          console.log(
            " ⛽️ " +
              update.gasUsed +
              "/" +
              (update.gasLimit || update.gas) +
              " @ " +
              parseFloat(update.gasPrice) / 1000000000 +
              " gwei",
          );
        }
      },
    );
  };
  const withdraw = async () => {
    const ethAmount = 0.15;
    const result = tx(writeContracts.RiceDay.withdrawAll(), update => {
      console.log("📡 Transaction Update:", update.status);
      if (update && (update.status === "confirmed" || update.status === 1)) {
        console.log(" 🍾 Transaction " + update.hash + " finished!");
        console.log(
          " ⛽️ " +
            update.gasUsed +
            "/" +
            (update.gasLimit || update.gas) +
            " @ " +
            parseFloat(update.gasPrice) / 1000000000 +
            " gwei",
        );
      }
    });
  };
  //for the future
  // const [saleComp, setSaleComp] = useState(
  //   <div className="content">
  //     <div className="leftContent">
  //       <img src={sadRice} className="sideGraphic" />
  //     </div>
  //     <div className="rightContent">
  //       <div className="webMintingHeader">404</div>
  //       <div className="subHeader">Something went wrong</div>
  //     </div>
  //   </div>,
  // );
  // useEffect(() => {
  //   console.log("firstTime");
  // }, [saleState]);

  return (
    <div className="mintPage">
      <img src={comboSticker3} className="stickerCol1" />
      <div className="content">
        <div className="leftContent">
          <img style={{ borderRadius: "20px" }} src={uncleRoger} className="sideGraphic" />
          <div className="textBox">
            We recommend to use desktop for minting. The minting process can take a while. Please be patient and note
            that we will not be responsible for failed transactions.
          </div>
        </div>
        <div className="rightContent">
          {/* {web3Modal.cachedProvider ? (
            <div onClick={() => publicMint()} className="primaryButton">
              Public Mint a Rice!
            </div>
          ) : (
            <div onClick={loadWeb3Modal} className="primaryButton">
              Connect Wallet
            </div>
          )} */}
          {web3Modal.cachedProvider ? (
            <div onClick={() => changeSaleStatus()} className="primaryButton">
              Sale Status
            </div>
          ) : (
            <div onClick={loadWeb3Modal} className="primaryButton"></div>
          )}
          {/* {web3Modal.cachedProvider ? (
            <div onClick={() => setSigners()} className="primaryButton">
              Set Signers
            </div>
          ) : (
            <div onClick={loadWeb3Modal} className="primaryButton">
            </div>
          )} */}
          {/*  */}
          {/* {web3Modal.cachedProvider ? (
            <div onClick={() => setRevealed()} className="primaryButton">
              Set Reveal
            </div>
          ) : (
            <div onClick={loadWeb3Modal} className="primaryButton">
            </div>
          )} */}
          {web3Modal.cachedProvider ? (
            <div onClick={() => setBaseURI()} className="primaryButton">
              Set base uri
            </div>
          ) : (
            <div onClick={loadWeb3Modal} className="primaryButton"></div>
          )}
          {/* 
          {web3Modal.cachedProvider ? (
            <div onClick={() => setBaseURI()} className="primaryButton">
              Set base uri
            </div>
          ) : (
            <div onClick={loadWeb3Modal} className="primaryButton">
            </div>
          )}
           */}
          {web3Modal.cachedProvider ? (
            <div onClick={() => setDevMint()} className="primaryButton">
              Set Dev Mint
            </div>
          ) : (
            <div onClick={loadWeb3Modal} className="primaryButton"></div>
          )}
          {web3Modal.cachedProvider ? (
            <div onClick={() => devMint()} className="primaryButton">
              Dev Mint
            </div>
          ) : (
            <div onClick={loadWeb3Modal} className="primaryButton"></div>
          )}
          {web3Modal.cachedProvider ? (
            <div onClick={() => prepChefMint()} className="primaryButton">
              PrepChef Mint
            </div>
          ) : (
            <div onClick={loadWeb3Modal} className="primaryButton"></div>
          )}
          {web3Modal.cachedProvider ? (
            <div onClick={() => withdraw()} className="primaryButton">
              Withdraw
            </div>
          ) : (
            <div onClick={loadWeb3Modal} className="primaryButton"></div>
          )}
          {web3Modal.cachedProvider ? (
            <div onClick={() => transferOwnership()} className="primaryButton">
              transfer ownership
            </div>
          ) : (
            <div onClick={loadWeb3Modal} className="primaryButton"></div>
          )}
        </div>
      </div>
      <img src={comboSticker2} className="stickerCol1" />
    </div>
  );
}
// [
//   "0xc1eE755a88c3944DD5A6bD86ee1Be262c8BeAEB4",
//   "0x4B9925e2d37fDf06C607B113c309CE14746E9312",
//   "0x5774883C9dDAB26954d0D2CABeA2F97dbEe7CC1a",
//   "0x19b260a039eDa8b896F4c7463445Fb94b4C86a85",
//   "0xc54003e08b17f127196Eb3562bc2085BeD3332D5",
//   "0x0249fe69B0724139afC7084905132f8e43a44BFa",
//   "0x0249fe69B0724139afC7084905132f8e43a44BFa",
//   "0x7474895501b5c75ceAF4E72C7079ba980A56ACAF",
//   "0x528f0830579aa74Ef8A0bDfB4daef583994b78cA",
//   "0x4d1540B6Cb4ef1132eAB29C3628110B2E3765BEc",
//   "0x4d1540B6Cb4ef1132eAB29C3628110B2E3765BEc",
//   "0xeFbB99cF1d0ce1b0995B4dBc5675A13350735555",
// ],
// 2,
// [
//   "0x67daC7DCaDB37c7e208162B7131837a66B94e476",
//   "0xB052E8baA57C85c35722d4ad7c3AAdD40f520370",
//   "0x2B3f9924406740eeAA80A31b118Ca2fFdd7Bd3AC",
//   "0x8301241fb69c752158D76BEa27deac0Ce86386D4",
//   "0xBe9861bEa57bDC42DB809859d8dFcE8Ec6158bBB",
//   "0xaFe335723326e184eBF8F557675480eC953a8294",
//   "0x489b2C66eC7e712bA90a9ab5eB5Bd1F28968bd21",
//   "0xD1482b5368ddAE4F2dCB19C1EA6f9A20F9230259",
//   "0xB40DD08b1EEb8a2f489020ac7BEc539a4Bd8eA96",
//   "0x5ef98Aa10c686EeE9e1D7d6cF1A011025558eBc8",
//   "0x69011F7535E9Bae1Cc95a0FD71819F1C5396F63d",
//   "0x562567805C92702a20844B83Cba06C3a966711a3",
//   "0x5Cec55f12C653e3a1cC8aAF06f4809d6cFE8d3cc",
//   "0x7074c2dBa311e243A44A29A96e62558cB6017010",
//   "0xE96F22D6D100e000B8dAe9Af857E7F0592bEF279",
//   "0x6bC9F7F5F560Ab77De1CdF816498Cb07Ac7A9A4d",
//   "0x10D9F6066Ab8FE15d0458c937Ede11b481A3c7cE",
//   "0xdC1F88C197d390b3ac855CD4Cd54cE8d1405d5B4",
//   "0x79e28b36434353a5c10Cc800d0D5A3af70365140",
//   "0x5F69F1751A1915A515Deba096A249c385ABe2e99",
// ],
// 1,