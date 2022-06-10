import { PageHeader } from "antd";
import React from "react";
import "./Footer.scss";
import banner from "../logo/whiteBannerRiceDay.svg";
import discordLogo from "../logo/Discord.svg";
import twitterLogo from "../logo/Twitter.svg";
import mediumLogo from "../logo/Medium.svg";
import openSealogo from "../logo/Opensea.svg";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
// displays a page header

export default function Footer() {
  return (
    <div className="footer">
      <div className="icon">
        <img src={banner} className="banner" />
      </div>
      <div className="info">
        <HashLink smooth to={"/#about"} className="headline1">
          <div className="headline1">About</div>
        </HashLink>
        <HashLink smooth to={"/#team"} className="headline1">
          <div className="headline1">Team</div>
        </HashLink>
        <HashLink smooth to={"/#roadmap"} className="headline1">
          <div className="headline1">Roadmap</div>
        </HashLink>
        <HashLink smooth to={"/#FAQ"} className="headline1">
          <div className="headline1">FAQs</div>
        </HashLink>
        {/* <div className="headline1">Contact</div> */}
        <div className="setOfLogos">
          {/* <img src={openSealogo} className="icon" /> */}
          <a className="icon" target="_blank" href="https://www.discord.gg/riceday">
            <img src={discordLogo} />
          </a>
          <a className="icon" target="_blank" href="https://www.twitter.com/ricedaygg">
            <img src={twitterLogo} />
          </a>
          <a className="icon" target="_blank" href="https://medium.com/@ricedaygg/ricemap-f245c3a60e58">
            <img src={mediumLogo} />
          </a>
        </div>
        <div className="copyRight">RiceDay © 2022 All rights reserved</div>
      </div>
    </div>
  );
}
