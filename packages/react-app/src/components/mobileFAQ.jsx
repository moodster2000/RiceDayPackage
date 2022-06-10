import React from "react";
import "./mobileFAQ.scss";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { makeStyles } from "@mui/styles";
import comboSticker3 from "../stickers/comboSticker3.png";
import comboSticker4 from "../stickers/comboSticker4.png";
import stickerBubbleTea from "../stickers/stickerBubbleTea.png";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    borderColor: "rgba(0,0,0,0)",
  },
  MuiAccordionroot: {
    "&.MuiAccordion-root:before": {
      backgroundColor: "white",
      display: "none",
      borderColor: "rgba(0,0,0,0)",
      boxShadow: "none",
    },
  },
}));

export default function MobileFAQ() {
  const classes = useStyles();

  return (
    <div className="mobileFAQ">
      <div className="content">
        <div className="mobTitle">FAQs</div>
        <div className="listOfQuestions">
          <Accordion elevation={0} className="questionSet">
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
              <div className="question">What are the benefits of owning a RiceDay NFT?</div>
            </AccordionSummary>
            <AccordionDetails>
              <div className="answer">
                
                Addtionally, owning our genesis RiceDay NFT certifies you as an early supporter and will earn you
                priority access to our physical events as well as to our RiceDay app when it is released.
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion
            classes={{
              root: classes.MuiAccordionroot,
            }}
            elevation={0}
            disableGutters={true}
            className="questionSet"
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
              <div className="question">How many RiceDay NFTs will be available?</div>
            </AccordionSummary>
            <AccordionDetails>
              <div className="answer">There will be 8866 available!</div>
            </AccordionDetails>
          </Accordion>
          <Accordion
            classes={{
              root: classes.MuiAccordionroot,
            }}
            className="questionSet"
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
              <div className="question">What is the mint price?</div>
            </AccordionSummary>
            <AccordionDetails>
              <div className="answer">RiceList mint will cost __ and Public mint will cost __</div>
            </AccordionDetails>
          </Accordion>
          <Accordion
            classes={{
              root: classes.MuiAccordionroot,
            }}
            className="questionSet"
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
              <div className="question"> When will the RiceDay NFTs be available for minting?</div>
            </AccordionSummary>
            <AccordionDetails>
              <div className="answer">We will be minting __ March 2022</div>
            </AccordionDetails>
          </Accordion>
          <Accordion
            classes={{
              root: classes.MuiAccordionroot,
            }}
            className="questionSet"
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
              <div className="question">Which marketplaces will RiceDay be listed on?</div>
            </AccordionSummary>
            <AccordionDetails>
              <div className="answer">You can buy RiceDay on secondary markets such as OpenSea and LooksRare.</div>
            </AccordionDetails>
          </Accordion>
          <Accordion
            classes={{
              root: classes.MuiAccordionroot,
            }}
            className="questionSet"
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
              <div className="question">How do I get RiceListed?</div>
            </AccordionSummary>
            <AccordionDetails>
              <div className="answer">
                You should join our <a target="_blank" href="https://www.discord.gg/riceday">discord</a>, follow our{" "}
                <a  target="_blank"href="https://www.twitter.com/ricedaygg">twitter</a> as well as read this helpful{" "}
                <a
                  target="_blank" href={`https://firebasestorage.googleapis.com/v0/b/riceday-7b733.appspot.com/o/unknown.png?alt=media&token=a01d3508-d43a-44c8-8faa-b09415f0f4b7`}
                >
                  guide
                </a>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="imageContainer">
          <img src={stickerBubbleTea} className="inBetweenSticker" />
        </div>
      </div>
    </div>
  );
}
