import { PageHeader } from "antd";
import React from "react";
import "./mobileFooter.scss";
import banner from "../logo/whiteBannerRiceDay.svg";
import discordLogo from "../logo/Discord.svg";
import twitterLogo from "../logo/Twitter.svg";
import mediumLogo from "../logo/Medium.svg";
import openSealogo from "../logo/Opensea.svg";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
// displays a page header

export default function MobileFooter() {
  return (
    <div className="mobileFooter">
      <img src={banner} className="banner" />
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
      <div className="rowOfIcon">
        <a target="_blank" href="https://www.discord.gg/riceday" className="logo">
          <img src={discordLogo} className="mobLogo" />
        </a>
        <a target="_blank" href="https://www.twitter.com/ricedaygg" className="logo">
          <img src={twitterLogo} className="mobLogo" />
        </a>
        <a target="_blank" href="https://medium.com/@ricedaygg/riceday-roadmap-313d1c2d6d74" className="logo">
          <img src={mediumLogo} className="mobLogo" />
        </a>
      </div>
      <div className="copyRight">RiceDay © 2022 All rights reserved</div>
    </div>
  );
}
