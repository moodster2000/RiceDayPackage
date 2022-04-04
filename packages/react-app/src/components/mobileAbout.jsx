import React from "react";
import "./mobileAbout.scss";
import aboutBanner from "../aboutPage/aboutBanner.png";
import aboutGraphic from "../aboutPage/aboutGraphic.jpg";
import ndAboutGraphic from "../aboutPage/2ndAboutGraphic.gif";
import hotSpotArt from "../aboutPage/hotSpotArt.png";
import comboSticker3 from "../stickers/comboSticker3.png";
import comboSticker4 from "../stickers/comboSticker4.png";
// displays a page header
import stickerNoodles from "../stickers/stickerNoodles.png";
import stickerPot from "../stickers/stickerPot.png";

export default function MobileAbout() {
  return (
    <div className="MobileAbout">
      <img src={aboutBanner} className="aboutBanner" />
      <div className="section1">
        <div className="title">Food + NFTs = Connecting People from Everywhere.</div>
        <div className="subtext">
          Enter RiceDay’s incredible culinary world where Web3 tech combines fun, cute and culturally inspired 3d art
          with real world utility for any foodie to love.
          <br />
          <br />
          Your RiceDay NFT will serve as your membership for Web3’s first food loyalty program!
          <br />
          <br />
          Supply: 8866
          <br />
          Price: 0.088 ETH
        </div>
        <div className="imageContainer">
          <img src={stickerNoodles} className="inBetweenSticker" />
        </div>
        <img src={ndAboutGraphic} className="mobileGraphic" />
      </div>
      <div className="section2">
        <div className="title">How delicious is my Rice?</div>
        <div className="subtext">
          There are trillions of possibilities, but we chose the best 8866 dishes to be served. RiceDay NFTs aren’t just
          a visual experience, but also a unique culinary adventure.
          <br />
          <br />
          The combination of NINE different components on each Rice will create succulent flavours that will awaken all
          of your senses.
        </div>
        <div className="imageContainer">
          <img src={stickerPot} className="inBetweenSticker" />
        </div>
        <div className="graphicContainer">
          <img src={hotSpotArt} className="mobileGraphic" />
        </div>
      </div>
      <div className="section3">
        <div className="subtext">
          To determine the uniqueness of each RiceDay, we used the 4 core elements of food: TASTE, TOUCH, AROMA, and
          DECOR.
          <br />
          <br />
          Within these 4 elements, we have subcategories with a precise hierarchy to help identify rarity easily. So you
          can know how delicious your Rice is!
        </div>
        <div className="flavorGraphic">
          <div className="mobileHeader">FLAVOR</div>
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
    </div>
  );
}
