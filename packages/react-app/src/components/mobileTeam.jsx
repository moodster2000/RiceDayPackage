import React, { useCallback, useEffect, useState, useContext } from "react";
import "./mobileTeam.scss";
import comboSticker5 from "../stickers/comboSticker3.png";
import aboutGraphic from "../aboutPage/aboutGraphic.jpg";
import PaperClip from "../logo/PaperClip.svg";
import linkIcon from "../logo/linksIcon.svg";
import Nam from "../teamPage/Nam.png";
import Giang from "../teamPage/Giang.png";
import Hai from "../teamPage/Hai.png";
import Moodi from "../teamPage/Moodi.png";
import Trung from "../teamPage/Trung.png";
import Vi from "../teamPage/Vi.png";
import Oxygen from "../teamPage/Oxygen.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import stickerGraingang from "../stickers/stickerGraingang.png";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 1000, min: 200 },
    items: 1,
    paritialVisibilityGutter: 30,
  },
};

export default function MobileTeam() {
  const [teamSelector, setTeamSelector] = useState("Nam Le");
  const [currentIndex, setCurrentIndex] = useState(1);
  const [teamBio, setTeamBio] = useState(
    `Nam Le - founder of RiceDay & Fustic.Studio, is a Vietnamese Visual Artist. He has worked with top bands and artists such as Meta, Pull&Bear, and Billie Eilish. He loves to work with colors, music and explore abstraction through 3D design.`,
  );
  const [teamTitle, setTeamTitle] = useState(
    `Nam Le - founder of RiceDay & Fustic.Studio, is a Vietnamese Visual Artist. He has worked with top bands and artists such as Meta, Pull&Bear, and Billie Eilish. He loves to work with colors, music and explore abstraction through 3D design.`,
  );
  const [teamImage, setTeamImage] = useState(Nam);
  const teamImageArray = [Nam, Giang, Moodi, Vi, Trung, Hai];
  const [teamLink, setTeamLink] = useState(``);

  useEffect(() => {
    if (currentIndex == 0) {
      setTeamBio(
        `Nam Le - founder of RiceDay & Fustic.Studio, is a Vietnamese Visual Artist. He has worked with top bands and artists such as Meta, Pull&Bear, and Billie Eilish. He loves to work with colors, music and explore abstraction through 3D design.`,
      );
      setTeamSelector("Nam Le");
      setTeamTitle(`Founder • Art direction`);
      setTeamLink(`https://twitter.com/namleday`);
    } else if (currentIndex == 1) {
      setTeamBio(
        `Tra Giang (Digital pseudonym: Gydient) - founder of the project & Fustic.Studio, who is the heart of RiceDay’s adorable art. Giang is a queer Asian artist, whose work is recognized by foremost organizations like Art Director Club, Creative Boom, It’s Nice That.`,
      );
      setTeamSelector("Tra Giang");
      setTeamTitle(`Founder • Art direction`);
      setTeamLink(`https://twitter.com/Gydient_`);
    } else if (currentIndex == 2) {
      setTeamBio(
        `Moodi is our tech lead and one of our most energetic and dynamic member. He handles web development, contract deployment, as well as community collaborations. 
          \n He joined the NFT space back in May 2021 and after spending a day on Twitter & Discord, he become a full-time NFT degen.`,
      );
      setTeamSelector("Moodi");
      setTeamTitle(`Tech Lead `);
      setTeamLink(`https://twitter.com/HeyMoodi`);

    } else if (currentIndex == 3) {
      setTeamBio(
        `Vi Quan - starting as an UI/ UX Designer and now RiceDay’s Project Manager/ Community Lead. Big fat love for food, traveling and connecting with people. `,
      );
      setTeamSelector("Vi Quan");
      setTeamTitle(`Community Lead`);
      setTeamLink(`https://twitter.com/ViQuaan`);

    } else if (currentIndex == 4) {
      setTeamBio(
        `Trung Bao is a multidisciplinary Vietnamese artist, musician, founder of the award-winning collective - Fustic. Studio. His works lie at the intersection of technology and art, sound and image. He has worked with top brands and artists in the world to design narratives through visual media, motion, generative art & installations. He has been featured on Hypebeast, Wallpaper magazine, Surface magazine, Fast Company.`,
      );
      setTeamSelector("Trung Bao");
      setTeamTitle(`Creative/Art Direction • Gen Dev`);
      setTeamLink(`https://twitter.com/TBaoCreate`);
    } else if (currentIndex == 5) {
      setTeamBio(
        `Hai Doan is a Vietnamese creative director, visual artist, and founder of Fustic. Studio. He participated in many projects of many top brands and artists around the world. Combining technology and art is the primary medium he uses to express the narratives and the rationality of his works`,
      );
      setTeamSelector("Hai Doan");
      setTeamTitle(`Art Direction • Narrative & rarity system`);      setTeamLink(`https://twitter.com/haidoanvisual`);
      setTeamLink(`https://twitter.com/haidoanvisual`);
    }
  }, [currentIndex]);

  const nameDesign = name => {
    return (
      <div
        className="nameSelector"
        onClick={() => {
          setTeamSelector(name);
        }}
      >
        <div style={{ color: teamSelector == name ? "#FF5E27" : "#D8C6AC", paddingLeft: "6%" }} className="headline1">
          {name}
        </div>
        <hr class="solid" />
      </div>
    );
  };
  return (
    <div className="MobileTeam">
      <div className="content">
        <div className="teamContent">
          <div className="mobileHeader">The Chefs</div>
          <Carousel
            afterChange={(previousSlide, { currentSlide, onMove }) => {
              setCurrentIndex(currentSlide-2);
            }}
            autoPlay={false}
            className="slides"
            infinite
            draggable = {false}
            autoPlaySpeed={1000000000}
            partialVisbile={false}
            responsive={responsive}
          >
            <div className="slide">
              <a target="_blank" href={teamLink} className="link">
                <img src={linkIcon} className="imageInside" />
              </a>
              <img src={Nam} className="restaurantImage" />
            </div>
            <div className="slide">
              <a target="_blank" href={teamLink} className="link">
                <img src={linkIcon} className="imageInside" />
              </a>
              <img src={Giang} className="restaurantImage" />
            </div>
            <div className="slide">
              <a target="_blank" href={teamLink} className="link">
                <img src={linkIcon} className="imageInside" />
              </a>
              <img src={Moodi} className="restaurantImage" />
            </div>
            <div className="slide">
              <a target="_blank" href={teamLink} className="link">
                <img src={linkIcon} className="imageInside" />
              </a>
              <img src={Vi} className="restaurantImage" />
            </div>
            <div className="slide">
              <a target="_blank" href={teamLink} className="link">
                <img src={linkIcon} className="imageInside" />
              </a>
              <img src={Trung} className="restaurantImage" />
            </div>
            <div className="slide">
              <a target="_blank" href={teamLink} className="link">
                <img src={linkIcon} className="imageInside" />
              </a>
              <img src={Hai} className="restaurantImage" />
            </div>
          </Carousel>
          <div className="name">
            <hr class="mobileSolid" />
            <div style={{ color: "#FF5E27" }} className="mobileHeadline1">
              {teamSelector}
            </div>
            <hr class="mobileSolid" />
          </div>
          <div className="testBox">
            <img src={PaperClip} className="paperClip" />
            <div className="partnerBox">
              <div style={{ color: "#3D3D3D", textAlign: "start" }} className="mobileHeadline1">
                {teamTitle}
              </div>
              <div style={{ marginTop: "3%" }} className="mobileBodyText">
                {teamBio}
              </div>
            </div>
          </div>
        </div>
        <div className="imageContainer">
          <img src={stickerGraingang} className="inBetweenSticker" />
        </div>
      </div>
    </div>
  );
}
