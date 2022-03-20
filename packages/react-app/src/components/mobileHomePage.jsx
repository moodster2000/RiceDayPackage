import { PageHeader } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import "./mobileHomePage.scss";
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
import mobileBackground from "../mobileBackground.png";

export default function MobileHomePage({ address, web3Modal }) {
  const [saleState, setSaleState] = useState("wlComing");
  const [saleTitle, setSaleTitle] = useState();
  // if (saleState == "wlComing" && web3Modal) {
  //
  //   setSaleTitle(
  //     <div className="mobileSaleStatus">
  //       <div className="bigHeader">
  //         8866 Rices
  //         <br />
  //         are coming soon!
  //       </div>
  //       <div className="subTitle">Countdown to Presale Minting:</div>
  //       <div className="timer">
  //         <div className="time">
  //           <div className="measure">Days</div>
  //           <div className="value">{days < 0 ? `0` : days}</div>
  //         </div>
  //         <div class="vl"></div>
  //         <div className="time">
  //           <div className="measure">Hours</div>
  //           <div className="value">{hours < 0 ? `0` : hours}</div>
  //         </div>
  //         <div class="vl"></div>
  //         <div className="time">
  //           <div className="measure">Minutes</div>
  //           <div className="value">{minutes < 0 ? `0` : minutes}</div>
  //         </div>
  //         <div class="vl"></div>
  //         <div className="time">
  //           <div className="measure">Seconds</div>
  //           <div className="value">{seconds < 0 ? `0` : seconds}</div>
  //         </div>
  //       </div>
  //       {/* //need to check if connected */}
  //       {!web3Modal.cachedProvider ? <div className="body2">You need to connect to your Metamark first!</div> : <div />}
  //       {web3Modal.cachedProvider && seconds <= 0 && (days <= 0) & (hours <= 0) && minutes <= 0 ? (
  //         <div className="mintButton">Mint a Rice!</div>
  //       ) : (
  //         <div></div>
  //       )}
  //     </div>,
  //   );
  // } else if (saleState == "wlClosedbutPsComing" && web3Modal) {
  //   var countDownDate = new Date("March 5, 2022 15:00:00").getTime();
  //   var now = new Date().getTime();
  //   var distance = countDownDate - now;

  //   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  //   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  //   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  //   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //   setSaleTitle(
  //     <div className="saleStatus">
  //       <div className="bigHeader">
  //         8866 Rices
  //         <br />
  //         are coming soon!
  //       </div>
  //       <div className="subTitle">Countdown to Public Minting:</div>
  //       <div className="timer">
  //         <div className="time">
  //           <div className="measure">Days</div>
  //           <div className="value">{days}</div>
  //         </div>
  //         <div class="vl"></div>
  //         <div className="time">
  //           <div className="measure">Hours</div>
  //           <div className="value">{hours}</div>
  //         </div>
  //         <div class="vl"></div>
  //         <div className="time">
  //           <div className="measure">Minutes</div>
  //           <div className="value">{minutes}</div>
  //         </div>
  //         <div class="vl"></div>
  //         <div className="time">
  //           <div className="measure">Seconds</div>
  //           <div className="value">{seconds}</div>
  //         </div>
  //       </div>
  //       {!web3Modal.cachedProvider ? <div className="body2">You need to connect to your Metamark first!</div> : <div />}
  //       {web3Modal.cachedProvider && seconds <= 0 && (days <= 0) & (hours <= 0) && minutes <= 0 ? (
  //         <div className="mintButton">Mint a Rice!</div>
  //       ) : (
  //         <div></div>
  //       )}
  //     </div>,
  //   );
  // }
  var countDownDate = new Date("April 4, 2022 16:00:00").getTime();
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  return (
    <div className="MobileHomePage">
      <img
        fit
        src={mobileBackground}
        className="background"
        style={{ zIndex: -1, position: "absolute", left: 0, top: 0 }}
      />
      <div className="mobileSaleStatus">
        <div className="mobBigHeader">
          8866 Rices
          <br />
          are coming soon!
        </div>
        <div className="subTitle">Countdown to Presale Minting:</div>
        <div className="timer">
          <div className="time">
            <div className="measure">Days</div>
            <div className="value">{days < 0 ? `0` : days}</div>
          </div>
          <div class="vl"></div>
          <div className="time">
            <div className="measure">Hours</div>
            <div className="value">{hours < 0 ? `0` : hours}</div>
          </div>
          <div class="vl"></div>
          <div className="time">
            <div className="measure">Minutes</div>
            <div className="value">{minutes < 0 ? `0` : minutes}</div>
          </div>
          <div class="vl"></div>
          <div className="time">
            <div className="measure">Seconds</div>
            <div className="value">{seconds < 0 ? `0` : seconds}</div>
          </div>
        </div>
        {/* //need to check if connected */}
        {!web3Modal.cachedProvider ? <div className="body2">You need to connect to your Wallet first!</div> : <div />}
        {web3Modal.cachedProvider && seconds <= 0 && (days <= 0) & (hours <= 0) && minutes <= 0 ? (
          <div className="mintButton">Mint a Rice!</div>
        ) : (
          <div></div>
        )}
      </div>
      {/* <MusicPlayer className="bottom" /> */}
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
