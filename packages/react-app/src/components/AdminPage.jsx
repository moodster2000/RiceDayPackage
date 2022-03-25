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
    const ethAmount = 0.15;
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
    const result = tx(
      writeContracts.RiceDay.changePhase(1),
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
  const setSigners = async () => {
    const ethAmount = 0.15;
    const result = tx(
      writeContracts.RiceDay.setSigners("0x8a23A43D3a2c5bd70c962CAaD36d882B78F8B98a","0x64088471f57e903e44F9B6745Fe3336996b0c9e1"),
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
      writeContracts.RiceDay.prepChefMint("0x17bf155c1e2d28e5142c07a7418cd19b1c1bde54881c7dd8cf91127ddb0281086dc1b8409b84cbd5b26413badb61554e6d171b623ec79c07d42f5c7534fa69cd1c", {
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
          {web3Modal.cachedProvider ? (
            <div onClick={() => publicMint()} className="primaryButton">
              Public Mint a Rice!
            </div>
          ) : (
            <div onClick={loadWeb3Modal} className="primaryButton">
              Connect Wallet
            </div>
          )}
          {web3Modal.cachedProvider ? (
            <div onClick={() => changeSaleStatus()} className="primaryButton">
              Sale Status
            </div>
          ) : (
            <div onClick={loadWeb3Modal} className="primaryButton">
            </div>
          )}
           {web3Modal.cachedProvider ? (
            <div onClick={() => setSigners()} className="primaryButton">
              Set Signers
            </div>
          ) : (
            <div onClick={loadWeb3Modal} className="primaryButton">
            </div>
          )}
          {web3Modal.cachedProvider ? (
            <div onClick={() => prepChefMint()} className="primaryButton">
              PrepChef Mint
            </div>
          ) : (
            <div onClick={loadWeb3Modal} className="primaryButton">
            </div>
          )}
        </div>
      </div>
      <img src={comboSticker2} className="stickerCol1" />
    </div>
  );
}
