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

export default function MintPage({ address, web3Modal, loadWeb3Modal, readContracts, writeContracts, tx }) {
  const [saleState, setSaleState] = useState("presaleActive");
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
    console.log("hello");
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
        if (update.status == "pending") {
          setSaleState("loading");
        } else if (update.status == "confirmed") {
          setSaleState("congrats");
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
  var saleComp;
  if (saleState == "comingSoon") {
    saleComp = (
      <div className="mintPage">
        <div className="leftContent">
          <img src={sadRice} className="sideGraphic" />
        </div>
        <div className="rightContent">
          <div className="webMintingHeader">404</div>
          <div className="subHeader">Something went wrong</div>
        </div>
      </div>
    );
  } else if (saleState == "presaleActive") {
    saleComp = (
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
            {!web3Modal.cachedProvider ? (
              <div className="subHeader">You need to connect to your wallet first!</div>
            ) : (
              <div className="subHeader">You can mint X Rice</div>
            )}
            <div className="webMintingHeader">Presale is active now!</div>
            <div style={{ color: "#A0A0A0" }} className="webBody3">
              Number of Rice you want to mint:
            </div>
            <div className="toggleQuantityBox">
              <div
                style={{ backgroundColor: quantity == 1 ? "#3D3D3D" : "" }}
                onClick={() => (quantity != 1 ? setQuantity(1) : setQuantity(0))}
                className="columnQuant"
              >
                <div className={quantity == 1 ? "activeButton" : "button"} />
                <div className="quantityTitle">1 Rice</div>
              </div>
              <div
                style={{ backgroundColor: quantity == 2 ? "#3D3D3D" : "" }}
                onClick={() => (quantity != 2 ? setQuantity(2) : setQuantity(0))}
                className="columnQuant"
              >
                <div className={quantity == 2 ? "activeButton" : "button"} />
                <div className="quantityTitle">2 Rice</div>
              </div>
              <div
                style={{ backgroundColor: quantity == 3 ? "#3D3D3D" : "" }}
                onClick={() => (quantity != 3 ? setQuantity(3) : setQuantity(0))}
                className="columnQuant"
              >
                <div className={quantity == 3 ? "activeButton" : "button"} />
                <div className="quantityTitle">3 Rice</div>
              </div>
            </div>
            {web3Modal.cachedProvider ? (
              <div onClick={() => publicMint()} className="primaryButton">
                Mint a Rice!
              </div>
            ) : (
              <div onClick={loadWeb3Modal} className="primaryButton">
                Connect Wallet
              </div>
            )}
            <div className="webSupplyText">
              {4}/{44} Minted
            </div>
          </div>
        </div>
        <img src={comboSticker2} className="stickerCol1" />
      </div>
    );
  } else if (saleState == "publicActive") {
    saleComp = (
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
            {!web3Modal.cachedProvider ? (
              <div className="subHeader">You need to connect to your wallet first!</div>
            ) : (
              <div />
            )}
            <div className="webMintingHeader">Let’s cook your Rice!</div>
            <div style={{ color: "#A0A0A0" }} className="webBody3">
              Number of Rice you want to mint:
            </div>
            <div className="toggleQuantityBox">
              <div
                style={{ backgroundColor: quantity == 1 ? "#3D3D3D" : "" }}
                onClick={() => (quantity != 1 ? setQuantity(1) : setQuantity(0))}
                className="columnQuant"
              >
                <div className={quantity == 1 ? "activeButton" : "button"} />
                <div className="quantityTitle">1 Rice</div>
              </div>
              <div
                style={{ backgroundColor: quantity == 2 ? "#3D3D3D" : "" }}
                onClick={() => (quantity != 2 ? setQuantity(2) : setQuantity(0))}
                className="columnQuant"
              >
                <div className={quantity == 2 ? "activeButton" : "button"} />
                <div className="quantityTitle">2 Rice</div>
              </div>
              <div
                style={{ backgroundColor: quantity == 3 ? "#3D3D3D" : "" }}
                onClick={() => (quantity != 3 ? setQuantity(3) : setQuantity(0))}
                className="columnQuant"
              >
                <div className={quantity == 3 ? "activeButton" : "button"} />
                <div className="quantityTitle">3 Rice</div>
              </div>
            </div>
            {web3Modal.cachedProvider ? (
              <div className="primaryButton">Mint a Rice!</div>
            ) : (
              <div onClick={loadWeb3Modal} className="primaryButton">
                Connect Wallet
              </div>
            )}
            <div className="webSupplyText">x/y Minted</div>
          </div>
        </div>
        <img src={comboSticker2} className="stickerCol1" />
      </div>
    );
  } else if (saleState == "presaleHasEnded") {
    saleComp = (
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
          <div style={{ alignSelf: "start", marginTop: "10%" }} className="rightContent">
            <div className="webMintingHeader">Presale has ended!</div>
            <div
              onClick={() => {
                history.push("/");
                setRoute("/");
              }}
              className="secondaryButton"
            >
              Back to HomePage
            </div>
          </div>
        </div>
        <img src={comboSticker2} className="stickerCol1" />
      </div>
    );
  } else if (saleState == "failed") {
    saleComp = (
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
          <div style={{ alignSelf: "start", marginTop: "10%" }} className="rightContent">
            <div className="webMintingHeader">Transaction failed</div>
            <div style={{ color: "#A0A0A0", marginTop: "1%", marginBottom: "10%" }} className="webBody3">
              Oops! Don’t panic. Please try again.
            </div>
            <div
              onClick={() => {
                window.location.reload(false);
              }}
              className="secondaryButton"
            >
              Refresh
            </div>
          </div>
        </div>
        <img src={comboSticker2} className="stickerCol1" />
      </div>
    );
  } else if (saleState == "loading") {
    saleComp = (
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
          <div style={{ alignSelf: "start", marginTop: "7%" }} className="rightContent">
            <div className="webMintingHeader">
              Thank you!
              <br />
              Your rice is being minted
            </div>
            <div className="bouncing-loader">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
        <img src={comboSticker2} className="stickerCol1" />
      </div>
    );
  } else if (saleState == "freeMints") {
    saleComp = (
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
          <div style={{ alignSelf: "center" }} className="rightContent">
            {!web3Modal.cachedProvider ? (
              <div className="subHeader">You need to connect to your wallet first!</div>
            ) : (
              <div className="subHeader">Congratulations! You have TBA free mints.</div>
            )}
            <div className="webMintingHeader">You got free mints!</div>
            <div style={{ color: "#A0A0A0", marginTop: "3%", marginBottom: "5.5%" }} className="webBody3">
              You have TBA hours left to claim your rices.
            </div>
            {web3Modal.cachedProvider ? (
              <div className="primaryButton">Claim my Rices!</div>
            ) : (
              <div onClick={loadWeb3Modal} className="primaryButton">
                Connect Wallet
              </div>
            )}
          </div>
        </div>
        <img src={comboSticker2} className="stickerCol1" />
      </div>
    );
  } else if (saleState == "congrats") {
    saleComp = (
      <div className="mintPage">
        <img src={comboSticker3} className="stickerCol1" />
        <div className="congratsScreen">
          <div className="webMintingHeaderAlt">Congrats! Your Rice has arrived!</div>
          <div className="imageRow">
            <img style={{ borderRadius: "20px" }} src={uncleRoger} className="sideGraphic" />
            <img style={{ borderRadius: "20px" }} src={uncleRoger} className="sideGraphic" />
            <img style={{ borderRadius: "20px" }} src={uncleRoger} className="sideGraphic" />
          </div>
          <div onClick={() => {}} className="primaryButton">
            Watch on OpenSea
          </div>
        </div>
        <img src={comboSticker2} className="stickerCol1" />
      </div>
    );
  }
  return <div>{saleComp}</div>;
}
