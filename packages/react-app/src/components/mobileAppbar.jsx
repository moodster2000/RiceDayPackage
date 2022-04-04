import React, { useCallback, useEffect, useState } from "react";
import rdLogo from "../RiceDay-Logo.svg";
import discordLogo from "../logo/Discord.svg";
import twitterLogo from "../logo/Twitter.svg";
import mediumLogo from "../logo/Medium.svg";
import openSealogo from "../logo/Opensea.svg";
import burgerMenu from "../logo/BurgerMenu.svg";
import closeMenu from "../logo/CloseMenu.svg";

import "./mobileAppbar.scss";
import Wallet from "./Wallet";
import Address from "./Address";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

export default function MobileAppbar({
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const modalButtons = [];
  if (web3Modal) {
    if (web3Modal.cachedProvider) {
      let displayAddress = address?.substr(0, 6) + "..." + address?.substr(-4);
      modalButtons.push(
        <div className="mobileWalletButton" onClick={logoutOfWeb3Modal}>
          {displayAddress}
        </div>,
      );
    } else {
      modalButtons.push(
        <div className="mobileWalletButton" onClick={loadWeb3Modal}>
          Connect Wallet
        </div>,
      );
    }
  }
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();
  return !isMenuOpen ? (
    <div className="mobileAppBar">
      <HashLink smooth to={"/#"} className="section1">
        <img src={rdLogo} className="rdLogo" />
      </HashLink>
      {modalButtons}
      <img
        onClick={() => {
          setIsMenuOpen(true);
        }}
        src={burgerMenu}
        className="logo"
      />
    </div>
  ) : (
    <div className="mobileMenu">
      <div className="appBarAlt">
        <HashLink smooth to={"/#"} className="section1">
          <img src={rdLogo} className="rdLogo" />
        </HashLink>
        {modalButtons}
        <img
          onClick={() => {
            setIsMenuOpen(false);
          }}
          src={closeMenu}
          className="logo"
        />
      </div>
      <hr class="solid" />
      <HashLink
        onClick={() => {
          setIsMenuOpen(false);
        }}
        smooth
        to={"/#about"}
        className="mobSection"
      >
        <div className="mobSection">About</div>
      </HashLink>
      <HashLink
        onClick={() => {
          setIsMenuOpen(false);
        }}
        smooth
        to={"/#team"}
        className="mobSection"
      >
        <div className="mobSection">Team</div>
      </HashLink>
      <HashLink
        onClick={() => {
          setIsMenuOpen(false);
        }}
        smooth
        to={"/#roadmap"}
        className="mobSection"
      >
        <div className="mobSection">Roadmap</div>
      </HashLink>
      <HashLink
        onClick={() => {
          setIsMenuOpen(false);
        }}
        smooth
        to={"/#FAQ"}
        className="mobSection"
      >
        <div className="mobSection">FAQs</div>
      </HashLink>
      <hr class="solid" />
      <a
        target="_blank" href="https://opensea.io/collection/riceday-gg-official"
        className="mobSection"
      >
        <div className="mobSection">OpenSea</div>
      </a>
      <a
        target="_blank" href="https://www.discord.gg/riceday"
        className="mobSection"
      >
        <div className="mobSection">Discord</div>
      </a>
      <a
        target="_blank" href="https://www.twitter.com/ricedaygg"
        className="mobSection"
      >
        <div className="mobSection">Twitter</div>
      </a>
    </div>
  );
}
