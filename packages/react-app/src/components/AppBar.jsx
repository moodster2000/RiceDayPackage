import React, { useCallback, useEffect, useState } from "react";
import rdLogo from "../RiceDay-Logo.svg";
import discordLogo from "../logo/Discord.svg";
import twitterLogo from "../logo/Twitter.svg";
import mediumLogo from "../logo/Medium.svg";
import openSealogo from "../logo/Opensea.svg";
import "./AppBar.scss";
import Wallet from "./Wallet";
import Address from "./Address";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

export default function AppBar({
  useBurner,
  address,
  userSigner,
  localProvider,
  mainnetProvider,
  price,
  minimized,
  web3Modal,
  loadWeb3Modal,
  logoutOfWeb3Modal,
  blockExplorer,
  isContract,
}) {
  const modalButtons = [];

  const [currentTab, setCurrentTab] = useState("homePage");

  if (web3Modal) {
    if (web3Modal.cachedProvider) {
      let displayAddress = address?.substr(0, 6) + "..." + address?.substr(-4);
      modalButtons.push(
        <div className="walletButton" onClick={logoutOfWeb3Modal}>
          {displayAddress}
        </div>,
      );
    } else {
      modalButtons.push(
        <div className="walletButton" onClick={loadWeb3Modal}>
          Connect Wallet
        </div>,
      );
    }
  }
  return (
    <div className="AppBar">
      <div className="webSections">
        <HashLink onClick={() => setCurrentTab("homePage")} smooth to={"/#"} className="rdLogo">
          <img src={rdLogo} className="rdLogo" />
        </HashLink>
        <HashLink onClick={() => setCurrentTab("about")} style ={{color: currentTab == "about" ?"#3d3d3d":"#A0A0A0"}} smooth to={"/#about"} className="webSection">
          <div className="webSection">About</div>
        </HashLink>
        <HashLink onClick={() => setCurrentTab("team")} style ={{color: currentTab == "team" ?"#3d3d3d":"#A0A0A0"}} smooth to={"/#team"} className="webSection">
          <div className="webSection">Team</div>
        </HashLink>
        <HashLink onClick={() => setCurrentTab("roadmap")} style ={{color: currentTab == "roadmap" ?"#3d3d3d":"#A0A0A0"}} smooth to={"/#roadmap"} className="webSection">
          <div className="webSection">Roadmap</div>
        </HashLink>
        <HashLink
          onClick={() => setCurrentTab("faqs")}
          style={{ color: currentTab == "faqs" ? "#3d3d3d" : "#A0A0A0" }}
          smooth
          to={"/#FAQ"}
          className="webSection"
        >
          <div className="webSection">FAQs</div>
        </HashLink>
      </div>
      <div className="logos">
        {modalButtons}
        <a className="icon" target="_blank" href="https://medium.com/@ricedaygg/riceday-roadmap-313d1c2d6d74">
          <img src={mediumLogo} className="logo" />
        </a>
        <a className="logo" target="_blank" href="https://www.discord.gg/riceday">
          <img src={discordLogo} className="logo" />
        </a>
        <a className="logo" target="_blank" href="https://www.twitter.com/ricedaygg">
          <img src={twitterLogo} className="logo" />
        </a>
      </div>
    </div>
  );
}
