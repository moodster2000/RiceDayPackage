import React from "react";
import "./mobileRoadmap.scss";
import comboSticker5 from "../stickers/comboSticker3.png";
import comboSticker7 from "../stickers/comboSticker4.png";
import city1 from "../roadmapPage/City1.jpg";
import city2 from "../roadmapPage/City2.jpg";
import city3 from "../roadmapPage/City3.jpg";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import friedRice from "../stickers/stickerFriedRice.png";
import heartSticker from "../stickers/stickerRiceHead.png";
import chungCake from "../stickers/stickerChungCake.png";
import linkIcon from "../logo/linksIcon.svg";

export default function MobileRoadmap() {
  return (
    <div className="mobileRoadmap">
      <div className="content">
        <div className="imageContainer">
          <img src={chungCake} className="inBetweenSticker" />
        </div>
        <div className="roadmapContent">
          <div className="mobTitle">Roadmap</div>
          <div className="phases">
            <div className="phase">
              <div className="box">
                <div className="mobHeader">Phase 1</div>
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
                <div className="mobHeader">Phase 2</div>
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
                <div className="mobHeader">Phase 3</div>
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
          <img src={friedRice} className="inBetweenSticker" />
        </div>
        <div className="restaurantContent">
          <div className="mobTitle">Partnership Restaurant</div>
          <div className="mobSubText">
            We are partnering with restaurants around the world with the aim of creating of a global foodie community.
          </div>
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={50}
            className="slides"
            totalSlides={3}
            visibleSlides={1}
            currentSlide={1}
            infinite
          >
            <Slider>
              <Slide className="slide" index={0}>
                <a target="_blank" href="https://www.instagram.com/lolaxiki/" className="link">
                  <img src={linkIcon} className="imageInside" />
                </a>
                <img src={city1} className="restaurantImage" />
                <div className="locationBox">
                <div className="title2">LOLA X IKI</div>
                  <div className="body2">Berlin, Germany</div>
                </div>
              </Slide>
              <Slide className="slide" index={1}>
                <a target="_blank"
                href="https://www.instagram.com/cafearoma.ph/"
                className="link">
                  <img src={linkIcon} className="imageInside" />
                </a>
                <img src={city2} className="restaurantImage" />

                <div className="locationBox">
                  <div className="title2">Aroma.</div>
                  <div className="body2">Iloilo, Philippines</div>
                </div>
              </Slide>
              <Slide className="slide" index={2}>
              <a target="_blank"
                href="https://www.instagram.com/oliviaskitchen_islandbrew/"
                className="link">
                  <img src={linkIcon} className="imageInside" />
                </a>
                <img src={city3} className="restaurantImage" />
                <div className="locationBox">
                  <div className="title2">Olivia's Garden</div>
                  <div className="body2">{`Guimaras, Philippines & Iloilo, Philippines`}</div>
                </div>
              </Slide>
            </Slider>
          </CarouselProvider>
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1fbETttNt5pyOHq4bfL0Ay36C2yQKcvSS/view"
            className="primaryButton"
          >
            Work with Us!
          </a>
        </div>
        <div className="imageContainer">
          <img src={heartSticker} className="inBetweenSticker" />
        </div>
      </div>
    </div>
  );
}

/* <div className="restaurants">
            <div className="restaurant">
              <img src={aboutGraphic} className="restaurantImage" />
              <div className="locationBox">
                <div className="title2">New York City</div>
                <div className="body2">USA</div>
              </div>
            </div>
            <div className="restaurant">
              <img src={aboutGraphic} className="restaurantImage" />
              <div className="locationBox">
                <div className="title2">Sai Gon</div>
                <div className="body2">Vietnam</div>
              </div>
            </div>
            <div className="restaurant">
              <img src={aboutGraphic} className="restaurantImage" />
              <div className="locationBox">
                <div className="title2">Sai Gon</div>
                <div className="body2">Vietnam</div>
              </div>
            </div>
          </div> */
// }
