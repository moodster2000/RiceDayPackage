import React from "react";
import "./Roadmap.scss";
import comboSticker5 from "../stickers/comboSticker5.png";
import comboSticker7 from "../stickers/comboSticker7.png";
import city1 from "../roadmapPage/City1.jpg";
import city2 from "../roadmapPage/City2.jpg";
import city3 from "../roadmapPage/City3.jpg";
import linkIcon from "../logo/linksIcon.svg";
import friedRice from "../stickers/stickerFriedRice.png";
import heartSticker from "../stickers/stickerRiceHead.png";

export default function Roadmap() {
  return (
    <div className="webRoadmap">
      <img src={comboSticker5} className="stickerCol1" />
      <div className="webContent">
        <div className="roadmapContent">
          <div className="webTitle">Roadmap</div>
          <div className="phases">
            <div className="phase">
              <div className="box">
                <div className="header">Phase 1</div>
                <div className="subtitle">
                  <ul>
                    <li>8866 RiceDay NFTs arriving late March 2022!</li>
                    <li>Airdrop collabs with different artists.</li>
                    <li>First Social Event: Steamed Rice Up!</li>
                  </ul>
                </div>
              </div>
              <div className="altBox">
                ★ Foodies will unite at NFT NYC 2022 for a night out to eat some great food!
                <br />
                <br />★ Partner with restaurants to offer secret menu items or deals!
              </div>
            </div>
            <div className="phase">
              <div className="box">
                <div className="header">Phase 2</div>
                <div className="subtitle">
                  <ul>
                    <li>$GRAIN token release.</li>
                    <li>Restaurant Partnerships and Social Events.</li>
                    <li>Exclusive beta-launch of the RiceDay App for holders.</li>
                  </ul>
                </div>
              </div>
              <div className="altBox">
                ★ Collectors earn $grain tokens when they spend at partnered restaurants.
                <br />
                <br />★ Special items and deals for holders at partnered restaurants.
              </div>
            </div>
            <div className="phase">
              <div className="box">
                <div className="header">Phase 3</div>
                <div className="subtitle">
                  <ul>
                    <li>
                      App is officially available to the public. Access restaurant reviews, special items, and deals.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="altBox">
                ★ Non-holders can subscribe using $GRAIN tokens.
                <br />
                <br />★ $GRAIN can be also be used to redeem discounts in partner establishments.
              </div>
              <div className="altBox2">
                <ul>
                  <li>Expansion of partnership program with RiceDay Grain Awards.</li>
                </ul>
              </div>
              <div className="altBox">★ Riceday plaques on display in partnered restaurants.</div>
            </div>
          </div>
          <a className="readMore" target="_blank" href="https://medium.com/@ricedaygg/riceday-roadmap-313d1c2d6d74">
            Read more
          </a>
        </div>
        <div className="imageContainer">
          <img src={friedRice} className="stickerDet" />
        </div>
        {/*restaurant conent */}
        <div className="restaurantContent">
          <div className="webTitle">Partnership Restaurant</div>
          <div className="contentRow">
            <div className="subText">
              We are partnering with restaurants around the world with the aim of creating of a global foodie community.
            </div>
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1fbETttNt5pyOHq4bfL0Ay36C2yQKcvSS/view"
              className="primaryButton"
            >
              Work with Us!
            </a>
          </div>
          <div className="restaurants">
            <div className="restaurant">
              <div className="restaurantContainer">
                <a target="_blank" href="https://www.instagram.com/lolaxiki/" className="link">
                  <img src={linkIcon} className="imageInside" />
                </a>
                <img src={city1} className="restaurantImage" />
                <div className="restaurantText">
                  <div className="headerRes">LOLA X IKI </div>
                  <div className="subHeaderRes">Berlin, Germany</div>
                </div>
              </div>
            </div>
            <div className="restaurant">
              <div className="restaurantContainer">
                <a target="_blank" href="https://instagram.com/cafearoma.ph?utm_medium=copy_link" className="link">
                  <img src={linkIcon} className="imageInside" />
                </a>
                <img src={city2} className="restaurantImage" />
                <div className="restaurantText">
                  <div className="headerRes">Aroma.</div>
                  <div className="subHeaderRes">Iloilo, Philippines</div>
                </div>
              </div>
            </div>
            <div className="restaurant">
              <div className="restaurantContainer">
                <a target="_blank" href="https://www.facebook.com/oliviaskitchenandislandbrew/" className="link">
                  <img src={linkIcon} className="imageInside" />
                </a>
                <img src={city3} className="restaurantImage" />
                <div className="restaurantText">
                  <div className="headerRes">Olivia's Garden</div>
                  <div className="subHeaderRes">{`Guimaras, Philippines & Iloilo, Philippines`}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="altImageContainer">
          <img src={heartSticker} className="stickerDet" />
        </div>
      </div>
      <img src={comboSticker7} className="stickerCol1" />
    </div>
  );
}
// {}
