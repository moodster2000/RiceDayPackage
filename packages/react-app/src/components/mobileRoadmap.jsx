import React from "react";
import "./mobileRoadmap.scss";
import comboSticker5 from "../stickers/comboSticker3.png";
import comboSticker7 from "../stickers/comboSticker4.png";
import aboutGraphic from "../aboutPage/aboutGraphic.jpg";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import friedRice from "../stickers/stickerFriedRice.png";
import heartSticker from "../stickers/stickerRiceHead.png";
import chungCake from "../stickers/stickerChungCake.png";
import roadmapImg from "../roadmapPage/Roadmap_Mobile.png";

export default function MobileRoadmap() {
  return (
    <div className="mobileRoadmap">
      <div className="content">
        <div className="imageContainer">
          <img src={chungCake} className="inBetweenSticker" />
        </div>
        <div className="roadmapContent">
          <div className="mobTitle">Roadmap</div>
          <img src={roadmapImg} className = "mobileImage"/>
          <a className="readMore" target="_blank" href="https://medium.com/@ricedaygg/ricemap-f245c3a60e58">
            Read more
          </a>
        </div>
        <div className="imageContainer">
          <img src={friedRice} className="inBetweenSticker" />
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
// <div className="restaurantContent">
//           <div className="mobTitle">Partnership Restaurant</div>
//           <div className="mobSubText">
//             We are partnering with restaurants around the world with the aim of creating of a global foodie community.
//           </div>
//           <CarouselProvider
//             naturalSlideWidth={100}
//             naturalSlideHeight={50}
//             className="slides"
//             totalSlides={3}
//             visibleSlides={1}
//             currentSlide={1}
//             infinite
//           >
//             <Slider>
//               <Slide className="slide" index={0}>
//                 <img src={aboutGraphic} className="restaurantImage" />
//                 <div className="locationBox">
//                   <div className="title2">Sai Gon</div>
//                   <div className="body2">Vietnam</div>
//                 </div>
//               </Slide>
//               <Slide className="slide" index={1}>
//                 <img src={aboutGraphic} className="restaurantImage" />
//                 <div className="locationBox">
//                   <div className="title2">Sai Gon</div>
//                   <div className="body2">Vietnam</div>
//                 </div>
//               </Slide>
//               <Slide className="slide" index={2}>
//                 <img src={aboutGraphic} className="restaurantImage" />
//                 <div className="locationBox">
//                   <div className="title2">Sai Gon</div>
//                   <div className="body2">Vietnam</div>
//                 </div>
//               </Slide>
//             </Slider>
//           </CarouselProvider>
//           <a
//             target="_blank"
//             href="https://drive.google.com/file/d/1fbETttNt5pyOHq4bfL0Ay36C2yQKcvSS/view"
//             className="primaryButton"
//           >
//             Work with Us!
//           </a>
//         </div>
//         <div className="imageContainer">
//           <img src={heartSticker} className="inBetweenSticker" />
//         </div>
