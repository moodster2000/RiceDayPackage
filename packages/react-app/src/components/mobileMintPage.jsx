import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Link, useHistory, withRouter, Redirect } from "react-router-dom";
import "./mobileMintPage.scss";
import sadRice from "../unknownPage/sadRice.png";
import uncleRoger from "../mintingPage/uncleRoger.gif";
import comboSticker3 from "../stickers/comboSticker3.png";
import { formatEther, parseEther } from "@ethersproject/units";
import PrepChefAdds from "../RLAddress/prepSigs.json";
import ExecChefAdds from "../RLAddress/execSigs.json";
import stickerRiceCooker from "../stickers/stickerRiceCooker.png";
import stickerSushi from "../stickers/stickerSushi.png";
import {
  useContractReader,
} from "eth-hooks";
// displays a page header

export default function MobileMintPage({ address, web3Modal, loadWeb3Modal,  readContracts, writeContracts, tx  }) {
  const [saleState, setSaleState] = useState("publicActive");
  const [quantity, setQuantity] = useState(0);
  let history = useHistory();
  const [route, setRoute] = useState();
  const [key, setKey] = useState("");
  const [canMint, setCanMint] = useState(0);
  const [totalSupply, setTotalSupply] = useState(0);
  const [currentSupply, setCurrentSupply] = useState(0);
  const [group, setGroup] = useState();
  useEffect(() => {
    setRoute(window.location.pathname);
  }, [setRoute]);
  const maxSupply = useContractReader(readContracts, "RiceDay", "MAX_SUPPLY");
  const current = useContractReader(readContracts, "RiceDay", "totalSupply");
  const claimed = useContractReader(readContracts, "RiceDay", "balanceOf", [address]);
  useEffect(() => {
    if (maxSupply) {
      setTotalSupply(maxSupply.toString());
    }
  }, [maxSupply]);
  useEffect(() => {
    if (current) {
      setCurrentSupply(current.toString());
    }
  }, [current]);

  useEffect(() => {
    if (address != "") {
      if (ExecChefAdds[address] != undefined) {
        if (claimed == 0) {
          setKey(ExecChefAdds[address]);
          setCanMint(2);
        } else if (claimed == 1) {
          setKey(ExecChefAdds[address]);
          setCanMint(1);
        } else if (claimed == 2) {
          setCanMint(0);
        }
        setGroup("exec");  
      } else if (PrepChefAdds[address] != undefined) {
        if (claimed != 1) {
          setKey(PrepChefAdds[address]);
          setCanMint(1);
        } else if (claimed == 1) {
          setCanMint(0);
        }
        setGroup("prep"); 
      }
    }
  }, [address, claimed]);

  const prepChefMint = async () => {
    const ethAmount = 0.088;
    const result = tx(
      writeContracts.RiceDay.prepChefMint(key, {
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
  const execChefMint = async () => {
    const ethAmount = 0.088 * quantity;
    const result = tx(
      writeContracts.RiceDay.execChefMint(quantity, key, {
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
  const publicMint = async () => {
    const ethAmount = 0.088 * quantity;
    const gas = await writeContracts.RiceDay.estimateGas.publicSaleMint(quantity, {
      value: parseEther(ethAmount.toString()),
    });
    var gasBuffered = gas.mul(1200).div(1000);
    const result = tx(
      writeContracts.RiceDay.publicSaleMint(quantity, {
        value: parseEther(ethAmount.toString()),
        gasLimit: gasBuffered
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

  var saleComp;
  var RLButton;
  if (canMint == 0) {
    RLButton = (
      <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <div style={{ marginTop: "2%" }} className="mobileSubHeader">
          Thank you for your support!
          <br />
          If you have a problem, please open a ticket on our Discord.
        </div>
        <div
          onClick={() => {
            history.push("/");
            setRoute("/");
          }}
          style = {{width: "65%"}}
          className="primaryButton"
        >
          Back to HomePage
        </div>
      </div>
    );
  } else if (canMint == 1) {
    RLButton = (
      <div onClick={quantity > 0 ?() => prepChefMint():console.log("")} className="primaryButton">
        Mint a Rice!
      </div>
    );
  } else if (canMint == 2) {
    RLButton = (
      <div onClick={quantity > 0 ?() => execChefMint():console.log("")} className="primaryButton">
        Mint a Rice!
      </div>
    );
  }
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
          <div className="mobileSubHeader">You can mint {canMint} Rice</div>
        )}
        <div className="mobHeader1">Presale is active now!</div>
        {canMint > 0 ? (<div style={{ color: "#A0A0A0" }} className="mobBody3">
          Number of Rice you want to mint:
        </div>):<div/>}
        {canMint > 0 ? (
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
            onClick={canMint > 1 ? () => (quantity != 2 ? setQuantity(2) : setQuantity(0)) : () => {}}
            className="columnQuant"
          >
            <div style={{ borderColor: canMint < 2 ? "#A0A0A0" : "" }} className={quantity == 2 ? "activeButton" : "button"} />
            <div style={{ color: canMint < 2 ? "#A0A0A0" : "" }}  className="mobQuantityTitle">2 Rice</div>
          </div>
          <div
            style={{ backgroundColor: quantity == 3 ? "#3D3D3D" : "" }}
            onClick={canMint > 2 ? () => (quantity != 3 ? setQuantity(3) : setQuantity(0)) : () => {}}
            className="columnQuant"
          >
            <div style={{ borderColor: canMint < 3 ? "#A0A0A0" : "" }} className={quantity == 3 ? "activeButton" : "button"} />
            <div style={{ color: canMint < 3 ? "#A0A0A0" : "" }} className="mobQuantityTitle">3 Rice</div>
          </div>
        </div>):<div/>}
        {web3Modal.cachedProvider ? (
          RLButton
        ) : (
          <div onClick={loadWeb3Modal} className="primaryButton">
            Connect Wallet
          </div>
        )}
        <div className="mobSupplyText">{currentSupply}/{totalSupply} Minted</div>
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
          <div onClick={quantity > 0 ?() => publicMint():console.log("")} className="primaryButton">Mint a Rice!</div>
        ) : (
          <div onClick={loadWeb3Modal} className="primaryButton">
            Connect Wallet
          </div>
        )}
        <div className="mobSupplyText">{currentSupply}/{totalSupply} Minted</div>
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
        <div className="mobSupplyText">{currentSupply}/{totalSupply} Minted</div>
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
        <div className="mobSupplyText">{currentSupply}/{totalSupply} Minted</div>
        <div className="pictureContainer">
          <img style={{ borderRadius: "50px" }} src={uncleRoger} className="sideGraphic" />
          <div className="textBox">
            We recommend to use desktop for minting. The minting process can take a while. Please be patient and note
            that we will not be responsible for failed transactions.
          </div>
        </div>
      </div>
    );
  } else if (saleState == "loading") {
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
        <div className="mobSupplyText">{currentSupply}/{totalSupply} Minted</div>
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
