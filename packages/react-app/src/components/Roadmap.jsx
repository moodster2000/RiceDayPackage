import React from "react";
import "./Roadmap.scss";
import comboSticker5 from "../stickers/comboSticker5.png";
import comboSticker7 from "../stickers/comboSticker7.png";
import aboutGraphic from "../aboutPage/aboutGraphic.jpg";
import friedRice from "../stickers/stickerFriedRice.png";
import heartSticker from "../stickers/stickerRiceHead.png";
import roadmapImg from "../roadmapPage/Roadmap_Desktop.png";

export default function Roadmap() {
  return (
    <div className="webRoadmap">
      <img src={comboSticker5} className="stickerCol1" />
      <div className="webContent">
        <div className="roadmapContent">
          <div className="webTitle">Roadmap</div>
          <a className="readMore" target="_blank" href="https://t.co/ANHz04RMbA">
            Read more
          </a>
        </div>
        <img src={roadmapImg} className = "webImage"/>
        <div className="imageContainer">
          <img src={friedRice} className="stickerDet" />
        </div>
      </div>
      <img src={comboSticker7} className="stickerCol1" />
    </div>
  );
}
// {<div className="restaurantContent">
// <div className="webTitle">Partnership Restaurant</div>
// <div className="contentRow">
//   <div className="subText">
//     We are partnering with restaurants around the world with the aim of creating of a global foodie community.
//   </div>
//   <a
//     target="_blank"
//     href="https://drive.google.com/file/d/1fbETttNt5pyOHq4bfL0Ay36C2yQKcvSS/view"
//     className="primaryButton"
//   >
//     Work with Us!
//   </a>
// </div>
// <div className="restaurants">
//   <div className="restaurant">
//     <img src={aboutGraphic} className="restaurantImage" />
//     <div className="locationBox">
//       <div className="title2">New York City</div>
//       <div className="body2">USA</div>
//     </div>
//   </div>
//   <div className="restaurant">
//     <img src={aboutGraphic} className="restaurantImage" />
//     <div className="locationBox">
//       <div className="title2">Sai Gon</div>
//       <div className="body2">Vietnam</div>
//     </div>
//   </div>
//   <div className="restaurant">
//     <img src={aboutGraphic} className="restaurantImage" />
//     <div className="locationBox">
//       <div className="title2">Sai Gon</div>
//       <div className="body2">Vietnam</div>
//     </div>
//   </div>
// </div>
// </div>
// <div className="altImageContainer">
// <img src={heartSticker} className="stickerDet" />
// </div>}