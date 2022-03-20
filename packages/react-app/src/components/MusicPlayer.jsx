import React, { useCallback, useEffect, useState } from "react";
import "./MusicPlayer.scss";
import themeSong from "../themeSong.wav";
import useSound from "use-sound";
import playLogo from "../logo/Play.svg";
import pauseLogo from "../logo/Pause.svg";

export default function MusicPlayer() {
  //audio Controls
  const [pausePlay, setPausePlay] = useState("play");
  const [play, { stop }] = useSound(themeSong, {
    volume: 0.2,
    
  }
  );

  return (
    <div className="MusicPlayer">
      <img
        onClick={() => {
          if (pausePlay == "pause") {
            stop();
            setPausePlay("play");
          } else {
            setPausePlay("pause");
            play();
          }
        }}
        src={pausePlay == "pause" ? pauseLogo : playLogo}
        className="logo"
      />
      <div class="vl"></div>
      <div className="musicDetails">
        <div className="title">Have a RiceDay!</div>
        <div className="subTitle">by BeepBeepChild from Hot Panda Media</div>
      </div>
    </div>
  );
}
