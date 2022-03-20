import React, { useCallback, useEffect, useState } from "react";
import "./About.scss";
import aboutBanner from "../aboutPage/aboutBanner.jpg";
import aboutGraphic from "../aboutPage/aboutGraphic.jpg";
import hotSpotArt from "../aboutPage/hotSpotArt.png";

import ndAboutGraphic from "../aboutPage/2ndAboutGraphic.gif";
import stickerNoodles from "../stickers/stickerNoodles.png";
import stickerPot from "../stickers/stickerPot.png";
import { Switch } from "antd";

import comboSticker1 from "../stickers/comboSticker1.png";
import comboSticker2 from "../stickers/comboSticker2.png";
import comboSticker3 from "../stickers/comboSticker3.png";
import comboSticker4 from "../stickers/comboSticker4.png";
import comboSticker5 from "../stickers/comboSticker5.png";
import comboSticker6 from "../stickers/comboSticker6.png";

// displays a page header

export default function About() {
  const [traitState, setTraitState] = useState();

  useEffect(() => {
    console.log(traitState);
  }, [traitState]);

  return (
    <div className="About">
      <img src={aboutBanner} className="aboutBanner" />
      <div className="section1">
        <img src={comboSticker4} className="stickerCol1" />
        <div className="content">
          <div className="whatWeDo">
            <div className="mwlmwl">Food + NFTs = Connecting People from Everywhere.</div>
            <div className="webSubtext">
              Enter RiceDay’s incredible culinary world where Web3 tech combines fun, cute and culturally inspired 3d
              art with real world utility for any foodie to love.
              <br />
              <br />
              Your RiceDay NFT will serve as your membership for Web3’s first food loyalty program!
              <br />
              <br />
              Supply: 8866
              <br />
              <br />
              Price: TBA
            </div>
          </div>
          <img src={ndAboutGraphic} className="sideGraphic" />
        </div>
        <img src={comboSticker3} className="stickerCol1" />
      </div>
      <div className="imageContainer">
        <img src={stickerNoodles} className="inBetweenSticker" />
      </div>
      <div className="section2">
        <img src={comboSticker1} className="stickerCol1" />
        <div className="content">
          <div className="graphicContainer">
            <img src={hotSpotArt} className="sideGraphic" />
          </div>
          <div className="whatWeDo">
            <div className="mwlmwl">How delicious is my Rice?</div>
            <div className="webSubtext">
              There are trillions of possibilities, but we chose the best 8866 dishes to be served. RiceDay NFTs aren’t
              just a visual experience, but also a unique culinary adventure.
              <br />
              <br />
              The combination of NINE different components on each Rice will create succulent flavours that will awaken
              all of your senses.
            </div>
          </div>
        </div>
        <img src={comboSticker2} className="stickerCol1" />
      </div>
      <div className="altImageContainer">
        <img src={stickerPot} className="inBetweenSticker" />
      </div>
      <div className="section3">
        <img src={comboSticker5} className="stickerCol1" />
        <div className="content">
          <div className="whatWeDo">
            <div className="webSubtext">
              To determine the uniqueness of each RiceDay, we used the 4 core elements of food: TASTE, TOUCH, AROMA, and
              DECOR.
              <br />
              <br />
              Within these 4 elements, we have subcategories with a precise hierarchy to help identify rarity easily. So
              you can know how delicious your Rice is!
            </div>
          </div>
          <div className="flavorGraphic">
            <div className="header">FLAVOR</div>
            <div className="grid">
              <div className="box">
                <div className="headerALT">TASTE</div>
                <div className="subHeaderALT">{`Hair & Body`}</div>
              </div>
              <div className="box">
                <div className="headerALT">TOUCH</div>
                <div className="subHeaderALT">
                  {`Eyes, Mouth,`}
                  <br />
                  {`Head & Body Accessory`}
                </div>
              </div>
              <div className="box">
                <div className="headerALT">AROMA</div>
                <div className="subHeaderALT">Graphic</div>
              </div>
              <div className="box">
                <div className="headerALT">DECOR</div>
                <div className="subHeaderALT">{`Stickers 1 & 2`}</div>
              </div>
            </div>
          </div>
        </div>
        <img src={comboSticker6} className="stickerCol1" />
      </div>
    </div>
  );
}

{/* hotspot <div className="hotSpot">Hair</div>
            <div style={{ marginTop: "7.4%", marginRight: "9%" }} className="hotSpot">
              Sticker 2
            </div>
            <div style={{ marginTop: "7.4%", marginRight: "19%" }} className="hotSpot">
              Sticker 1
            </div>
            <div style={{ marginTop: "10.3%", marginRight: "17%" }} className="hotSpot">
              Head Accessory
            </div>
            <div style={{ marginTop: "14%", marginRight: "18%" }} className="hotSpot">
              Eyes
            </div>
            <div style={{ marginTop: "18%", marginRight: "15%" }} className="hotSpot">
              Mouth
            </div>
            <div style={{ marginTop: "21%", marginRight: "22%" }} className="hotSpot">
              Graphic
            </div>
            <div style={{ marginTop: "22%", marginRight: "6%" }} className="hotSpot">
              Body Accessory
            </div>
            <div style={{ marginTop: "25%", marginRight: "19%" }} className="hotSpot">
              Body
            </div> */}