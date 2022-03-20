import React, { useCallback, useEffect, useState } from "react";
import "./Team.scss";
import aboutGraphic from "../aboutPage/aboutGraphic.jpg";
import PaperClip from "../logo/PaperClip.svg";
import linkIcon from "../logo/linksIcon.svg";
import Divider from '@mui/material/Divider';
import Nam from "../teamPage/Nam.png";
import Giang from "../teamPage/Giang.png";
import Hai from "../teamPage/Hai.png";
import Moodi from "../teamPage/Moodi.png";
import Trung from "../teamPage/Trung.png";
import Vi from "../teamPage/Vi.png";
import Oxygen from "../teamPage/Oxygen.png";
import comboSticker4 from "../stickers/comboSticker4.png";
import comboSticker2 from "../stickers/comboSticker2.png";

import stickerGraingang from "../stickers/stickerGraingang.png";
import stickerChungCake from "../stickers/stickerChungCake.png";


export default function Team() {
  const [teamSelector, setTeamSelector] = useState("Nam Le");
  const [teamBio, setTeamBio] = useState(
    `Nam Le - founder of RiceDay & Fustic.Studio, is a Vietnamese Visual Artist. He has worked with top bands and artists such as Meta, Pull&Bear, and Billie Eilish. He loves to work with colors, music and explore abstraction through 3D design.`,
  );
  const [teamTitle, setTeamTitle] = useState(
    `Nam Le - founder of RiceDay & Fustic.Studio, is a Vietnamese Visual Artist. He has worked with top bands and artists such as Meta, Pull&Bear, and Billie Eilish. He loves to work with colors, music and explore abstraction through 3D design.`,
  );
  const [teamLink, setTeamLink] = useState(``);
  const [teamImage, setTeamImage] = useState(Nam);

  useEffect(() => {
    if (teamSelector == "Nam Le") {
      setTeamBio(
        `Nam Le - founder of RiceDay & Fustic.Studio, is a Vietnamese Visual Artist. He has worked with top bands and artists such as Meta, Pull&Bear, and Billie Eilish. He loves to work with colors, music and explore abstraction through 3D design.`,
      );
      setTeamTitle(`Founder • Art direction`);
      setTeamImage(Nam);
      setTeamLink(`https://twitter.com/namleday`);
    } else if (teamSelector == "Tra Giang") {
      setTeamBio(
        `Tra Giang (Digital pseudonym: Gydient) - founder of the project & Fustic.Studio, who is the heart of RiceDay’s adorable art. Giang is a queer Asian artist, whose work is recognized by foremost organizations like Art Director Club, Creative Boom, It’s Nice That.`,
      );
      setTeamTitle(`Founder • Art direction`);

      setTeamImage(Giang);
      setTeamLink(`https://twitter.com/Gydient_`);
    } else if (teamSelector == "Moodi") {
      setTeamBio(
        `Moodi is our tech lead and one of our most energetic and dynamic member. He handles web development, contract deployment, as well as community collaborations. 
          \nHe joined the NFT space back in May 2021 and after spending a day on Twitter & Discord, he become a full-time NFT degen.`,
      );
      setTeamTitle(`Tech Lead `);
      setTeamImage(Moodi);
      setTeamLink(`https://twitter.com/HeyMoodi`);
    } else if (teamSelector == "Vi Quan") {
      setTeamBio(
        `Vi Quan - starting as an UI/ UX Designer and now RiceDay’s Project Manager/ Community Lead. Big fat love for food, traveling and connecting with people. `,
      );
      setTeamTitle(`Community lead`);
      setTeamImage(Vi);
      setTeamLink(`https://twitter.com/ViQuaan`);
    } else if (teamSelector == "Trung Bao") {
      setTeamBio(
        `Trung Bao is a multidisciplinary Vietnamese artist, musician, founder of the award-winning collective - Fustic. Studio. His works lie at the intersection of technology and art, sound and image. He has worked with top brands and artists in the world and been featured on Hypebeast, Wallpaper magazine, Surface magazine.`,
      );
      setTeamTitle(`Creative/Art Direction • Gen Dev`);
      setTeamImage(Trung);
      setTeamLink(`https://twitter.com/TBaoCreate`);
    } else if (teamSelector == "Hai Doan") {
      setTeamBio(
        `Hai Doan is a Vietnamese creative director, visual artist, and founder of Fustic. Studio. He participated in many projects of many top brands and artists around the world. Combining technology and art is the primary medium he uses to express the narratives and the rationality of his works`,
      );
      setTeamTitle(`Art Direction • Narrative & rarity system`);
      setTeamImage(Hai);
      setTeamLink(`https://twitter.com/haidoanvisual`);
    }
  }, [teamSelector]);

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
        <div class="webSolid" />
      </div>
    );
  };
  return (
    <div className="TeamPage">
      <img src={comboSticker4} className="stickerCol1" />
      <div className="content">
        <div className="teamContent">
          <div className="teamText">
            <div className="webHeader">The Chefs</div>
            <div className="partnerDesign">
              <div class="webSolid" />
              {nameDesign("Nam Le")}
              {nameDesign("Tra Giang")}
              {nameDesign("Moodi")}
              {nameDesign("Vi Quan")}
              {nameDesign("Trung Bao")}
              {nameDesign("Hai Doan")}
            </div>
            <div className="testBox">
              <img src={PaperClip} className="paperClip" />
              <div className="partnerBox">
                <div style={{ color: "#3D3D3D" }} className="headline1">
                  {teamTitle}
                </div>
                <div style={{ marginTop: "3%" }} className="bodyText">
                  {teamBio}
                </div>
              </div>
            </div>
          </div>

          <div className="teamGraphic">
            <a target="_blank" href={teamLink} className="link">
              <img src={linkIcon} className="imageInside" />
            </a>
            <img src={teamImage} className="sideGraphic" />
          </div>
        </div>
        <div className="imageContainer">
          <img src={stickerGraingang} className="stickerTag" />
        </div>
        <div className="partnerContent">
          <div className="partnerText">
            <div className="webHeader">Partner</div>
            <div className="partnerDesign">
              <hr class="webSolid" />
              <div style={{ color: "#FF5E27", paddingLeft: "6%" }} className="headline1">
                0xygen labs
              </div>
              <hr class="webSolid" />
            </div>
            <div className="testBox">
              <img src={PaperClip} className="paperClip" />
              <div className="partnerBox">
                <div style={{ color: "#3D3D3D" }} className="headline1">
                  Even rocket engines need 0xygen
                </div>
                <div style={{ marginTop: "3%" }} className="bodyText">
                  0xygen Labs is founded by Rei and his team behind NANOPASS, nanovers HQ, and the upcoming Phantom
                  Network and NFTY Keys. The core team bring a diverse range of skill sets and our network is extensive.
                  Our passions lie in connecting with like-minded people in the NFT space, sharing knowledge, and
                  building each other up.
                </div>
              </div>
            </div>
          </div>
          <div className="partnerGraphic">
            <a target="_blank" href="https://twitter.com/0xygenLabs" className="link">
              <img src={linkIcon} className="imageInside" />
            </a>
            <img src={Oxygen} className="sideGraphic" />
          </div>
        </div>
      </div>
      <img src={comboSticker2} className="stickerCol1" />
    </div>
  );
}
