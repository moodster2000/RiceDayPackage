import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Link, useHistory, withRouter, Redirect } from "react-router-dom";
import "./mobileMintPage.scss";
import sadRice from "../unknownPage/sadRice.png";
import uncleRoger from "../mintingPage/uncleRoger.gif";
import comboSticker3 from "../stickers/comboSticker3.png";

import stickerRiceCooker from "../stickers/stickerRiceCooker.png";
import stickerSushi from "../stickers/stickerSushi.png";
// displays a page header

export default function MobileMintPage({ address, web3Modal, loadWeb3Modal }) {
  const [saleState, setSaleState] = useState("publicActive");
  const [quantity, setQuantity] = useState(0);
  let history = useHistory();
  const [route, setRoute] = useState();
  useEffect(() => {
    setRoute(window.location.pathname);
  }, [setRoute]);

  var saleComp;
  if (saleState == "comingSoon") {
    saleComp = (
      <div className="mobileMintPage">
        <div className="header">404</div>
        <div className="subHeader">Something went wrong</div>
        <img src={sadRice} className="unknownGraphic" />
      </div>
    );
  } else if (saleState == "presaleActive") {
    saleComp = (
      <div className="mobileMintPage">
        <div className="rowOfStickers">
          <img src={stickerRiceCooker} className="topSticker" />
          <img src={stickerSushi} className="altTopSticker" />
        </div>
        {!web3Modal.cachedProvider ? (
          <div className="mobileSubHeader">You need to connect to your wallet first!</div>
        ) : (
          <div className="mobileSubHeader">You can mint X Rice</div>
        )}
        <div className="mobHeader1">Presale is active now!</div>
        <div style={{ color: "#A0A0A0" }} className="mobBody3">
          Number of Rice you want to mint:
        </div>
        <div className="toggleQuantityBox">
          <div
            style={{ backgroundColor: quantity == 1 ? "#3D3D3D" : "" }}
            onClick={() => (quantity != 1 ? setQuantity(1) : setQuantity(0))}
            className="columnQuant"
          >
            <div className={quantity == 1 ? "activeButton" : "button"} />
            <div className="mobQuantityTitle">1 Rice</div>
          </div>
          <div
            style={{ backgroundColor: quantity == 2 ? "#3D3D3D" : "" }}
            onClick={() => (quantity != 2 ? setQuantity(2) : setQuantity(0))}
            className="columnQuant"
          >
            <div className={quantity == 2 ? "activeButton" : "button"} />
            <div className="mobQuantityTitle">2 Rice</div>
          </div>
          <div
            style={{ backgroundColor: quantity == 3 ? "#3D3D3D" : "" }}
            onClick={() => (quantity != 3 ? setQuantity(3) : setQuantity(0))}
            className="columnQuant"
          >
            <div className={quantity == 3 ? "activeButton" : "button"} />
            <div className="mobQuantityTitle">3 Rice</div>
          </div>
        </div>
        {web3Modal.cachedProvider ? (
          <div className="primaryButton">Mint a Rice!</div>
        ) : (
          <div onClick={loadWeb3Modal} className="primaryButton">
            Connect Wallet
          </div>
        )}
        <div className="mobSupplyText">956/3388 Minted</div>
        <div className="pictureContainer">
          <img style={{ borderRadius: "50px" }} src={uncleRoger} className="sideGraphic" />
          <div className="textBox">
            We recommend to use desktop for minting. The minting process can take a while. Please be patient and note
            that we will not be responsible for failed transactions.
          </div>
        </div>
      </div>
    );
  } else if (saleState == "publicActive") {
    saleComp = (
      <div className="mobileMintPage">
        <div className="rowOfStickers">
          <img src={stickerRiceCooker} className="topSticker" />
          <img src={stickerSushi} className="altTopSticker" />
        </div>
        {!web3Modal.cachedProvider ? (
          <div className="mobileSubHeader">You need to connect to your wallet first!</div>
        ) : (
          <div className="mobileSubHeader" />
        )}
        <div className="mobHeader1">Let’s cook your Rice!</div>
        <div style={{ color: "#A0A0A0" }} className="mobBody3">
          Number of Rice you want to mint:
        </div>
        <div className="toggleQuantityBox">
          <div
            style={{ backgroundColor: quantity == 1 ? "#3D3D3D" : "" }}
            onClick={() => (quantity != 1 ? setQuantity(1) : setQuantity(0))}
            className="columnQuant"
          >
            <div className={quantity == 1 ? "activeButton" : "button"} />
            <div className="mobQuantityTitle">1 Rice</div>
          </div>
          <div
            style={{ backgroundColor: quantity == 2 ? "#3D3D3D" : "" }}
            onClick={() => (quantity != 2 ? setQuantity(2) : setQuantity(0))}
            className="columnQuant"
          >
            <div className={quantity == 2 ? "activeButton" : "button"} />
            <div className="mobQuantityTitle">2 Rice</div>
          </div>
          <div
            style={{ backgroundColor: quantity == 3 ? "#3D3D3D" : "" }}
            onClick={() => (quantity != 3 ? setQuantity(3) : setQuantity(0))}
            className="columnQuant"
          >
            <div className={quantity == 3 ? "activeButton" : "button"} />
            <div className="mobQuantityTitle">3 Rice</div>
          </div>
        </div>
        {web3Modal.cachedProvider ? (
          <div className="primaryButton">Mint a Rice!</div>
        ) : (
          <div onClick={loadWeb3Modal} className="primaryButton">
            Connect Wallet
          </div>
        )}
        <div className="mobSupplyText">x/y Minted</div>
        <div className="pictureContainer">
          <img style={{ borderRadius: "50px" }} src={uncleRoger} className="sideGraphic" />
          <div className="textBox">
            We recommend to use desktop for minting. The minting process can take a while. Please be patient and note
            that we will not be responsible for failed transactions.
          </div>
        </div>
      </div>
    );
  } else if (saleState == "presaleHasEnded") {
    saleComp = (
      <div className="mobileMintPage">
        <div className="rowOfStickers">
          <img src={stickerRiceCooker} className="topSticker" />
          <img src={stickerSushi} className="altTopSticker" />
        </div>
        <div className="mobHeader1">Presale has Ended!</div>
        <div
          onClick={() => {
            history.push("/");
            setRoute("/");
          }}
          style={{ marginTop: "0%", color: "#3D3D3D", backgroundColor: "white" }}
          className="primaryButton"
        >
          Back to Homepage
        </div>
        <div className="mobSupplyText">x/y Minted</div>
        <div className="pictureContainer">
          <img style={{ borderRadius: "50px" }} src={uncleRoger} className="sideGraphic" />
          <div className="textBox">
            We recommend to use desktop for minting. The minting process can take a while. Please be patient and note
            that we will not be responsible for failed transactions.
          </div>
        </div>
      </div>
    );
  } else if (saleState == "failed") {
    saleComp = (
      <div className="mobileMintPage">
        <div className="rowOfStickers">
          <img src={stickerRiceCooker} className="topSticker" />
          <img src={stickerSushi} className="altTopSticker" />
        </div>
        <div style = {{marginBottom: "0",}}className="mobHeader1">Transaction Failed</div>
        <div style={{ color: "#A0A0A0", marginTop: "10%", marginBottom: "10%" }} className="mobBody3">
          Oops! Don’t panic. Please try again.
        </div>
        <div
          onClick={() => {
            window.location.reload(false);
          }}
          style={{ marginTop: "0%", color: "#3D3D3D", backgroundColor: "white" }}
          className="primaryButton"
        >
          Refresh
        </div>
        <div className="mobSupplyText">x/y Minted</div>
        <div className="pictureContainer">
          <img style={{ borderRadius: "50px" }} src={uncleRoger} className="sideGraphic" />
          <div className="textBox">
            We recommend to use desktop for minting. The minting process can take a while. Please be patient and note
            that we will not be responsible for failed transactions.
          </div>
        </div>
      </div>
    );
  } else if (saleState == "success") {
    //not finished
    saleComp = (
      <div className="mobileMintPage">
        <div className="rowOfStickers">
          <img src={stickerRiceCooker} className="topSticker" />
          <img src={stickerSushi} className="altTopSticker" />
        </div>
        <div style={{ marginTop: "0%"}} className="altMobHeader">
          {" "}
          Thank you!
          <br />
          Your rice is being minted
        </div>
        <div className="mobBouncing-loader">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="pictureContainer">
          <img style={{ borderRadius: "50px" }} src={uncleRoger} className="sideGraphic" />
          <div className="textBox">
            We recommend to use desktop for minting. The minting process can take a while. Please be patient and note
            that we will not be responsible for failed transactions.
          </div>
        </div>
      </div>
    );
  } else if (saleState == "freeMints") {
    saleComp = (
      <div className="mobileMintPage">
        <div className="rowOfStickers">
          <img src={stickerRiceCooker} className="topSticker" />
          <img src={stickerSushi} className="altTopSticker" />
        </div>
        {!web3Modal.cachedProvider ? (
          <div className="mobileSubHeader">You need to connect to your wallet first!</div>
        ) : (
          <div className="mobileSubHeader">Congratulations!<br/>You have TBA free mints.</div>
        )}
        <div style = {{ marginBottom: "0%"}}className="mobHeader1">You got<br/>free mints!</div>
        <div style={{ color: "#A0A0A0", width: "70%", marginTop: "4%", marginBottom: "4%" }} className="mobBody3">
          You have TBA hours left to claim your rices.
        </div>
        {web3Modal.cachedProvider ? (
          <div className="primaryButton">Claim my Rices!</div>
        ) : (
          <div onClick={loadWeb3Modal} className="primaryButton">
            Connect Wallet
          </div>
        )}
        <div className="mobSupplyText">x/y Minted</div>
        <div className="pictureContainer">
          <img style={{ borderRadius: "50px" }} src={uncleRoger} className="sideGraphic" />
          <div className="textBox">
            We recommend to use desktop for minting. The minting process can take a while. Please be patient and note
            that we will not be responsible for failed transactions.
          </div>
        </div>
      </div>
    );
  } else if (saleState == "congrats") {
    saleComp = (
      <div style={{ height: "100vh"}}  className="mobileMintPage">
        <div className="rowOfStickers">
          <img src={stickerRiceCooker} className="topSticker" />
          <img src={stickerSushi} className="altTopSticker" />
        </div>
        <div className="altMobHeader">Congrats!<br/> Your Rice has arrived!</div>
        <div
          onClick={() => {
            window.location.reload(false);
          }}
          style={{ marginTop: "0%", marginBottom: "15%", color: "#3D3D3D", backgroundColor: "white" }}
          className="primaryButton"
        >
          Watch on OpenSea
        </div>
        <div className="pictureContainer">
          <img style={{ borderRadius: "50px" }} src={uncleRoger} className="sideGraphic" />
        </div>
      </div>
    );
  }
  return <div>{saleComp}</div>;
}
