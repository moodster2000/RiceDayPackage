import { PageHeader } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import "./HomePage.scss";
import playLogo from "../logo/Play.svg";
import pauseLogo from "../logo/Pause.svg";
import twitterLogo from "../logo/Twitter.svg";
import mediumLogo from "../logo/Medium.svg";
import discordLogo from "../logo/Discord.svg";
import themeSong from "../themeSong.wav";
import useSound from "use-sound";
import ReactPlayer from "react-player";
import banner from "../bannerRD.png";
import backgroundImage from "../background.png";
import backgroundVideo from "../backgroundVideo.mp4";
import MusicPlayer from "./MusicPlayer.jsx";
import { BrowserRouter, Switch, Route, Link, useHistory, withRouter, Redirect } from "react-router-dom";

export default function HomePage({ address, web3Modal }) {
  const [saleState, setSaleState] = useState("wlComing");
  const [saleTitle, setSaleTitle] = useState();
  let history = useHistory();
  const [route, setRoute] = useState();
  useEffect(() => {
    setRoute(window.location.pathname);
  }, [setRoute]);

 
  //audio Controls
  const [pausePlay, setPausePlay] = useState("play");
  const [play, { stop }] = useSound(themeSong, {
    volume: 0.2,
  });

  return (
    <div className="HomePage">
      <video autoPlay loop muted className="background" poster={backgroundImage}>
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className="saleStatus">
          <div className="webBigHeader">
            Genesis RiceDay are<br/>ready to be served!
          </div>
          <div className="subTitle">Follow our Discord and Twitter for more infomation.</div>
          <div className="timer">
            <div className="time">
              <div className="value">0.08</div>
              <div className="measure">per Rice</div>
            </div>
            <div class="vl"></div>
            <div className="time">
              <div className="value">956/3388</div>
              <div className="measure">minted</div>
            </div>
          </div>
          {/* //need to check if connected */}
          {!web3Modal.cachedProvider ? <div className="body2">You need to connect to your Wallet first!</div> : <div />}
          {web3Modal.cachedProvider ? (
            <div
              onClick={() => {
                history.push(`/minting`);
                setRoute(`/minting`);
              }}
              className="mintButton"
            >
              Mint a Rice!
            </div>
          ) : (
            <div></div>
          )}
        </div>
      <MusicPlayer className="bottom" />
    </div>
  );
}
{
  /* <div className="topBar" style={{ zIndex: 2, position: "absolute", left: 0, top: 0 }}>
        <div className="leftSide"></div>
        <div className="center">
          <img src={banner} className="banner" />
        </div>
        <div className="rightSide">
          {/* must link to socials */
}
//   <a className="logo" target="_blank" href="https://www.discord.gg/riceday">
//     <img src={discordLogo} className="logo" />
//   </a>
//   <a className="logo" target="_blank" href="https://www.twitter.com/ricedaygg">
//     <img src={twitterLogo} className="logo" />
//   </a>
{
  /* <a className="logo" target="_blank" href="https://www.twitter.com/ricedaygg">
            <img src={mediumLogo} className="logo" />
          </a> */
}
//   <button
//     style={{ border: "none" }}
//     className="altLogo"
//     onClick={() => {
//       if (pausePlay == "pause") {
//         stop();
//         setPausePlay("play");
//       } else {
//         setPausePlay("pause");
//         play();
//       }
//     }}
//   >
//     <img src={pausePlay == "pause" ? pauseLogo : playLogo} className="altLogo" />
//   </button>
// </div>
//   </div>
