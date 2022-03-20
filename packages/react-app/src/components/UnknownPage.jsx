import React from "react";
import "./UnknownPage.scss";
import sadRice from "../unknownPage/sadRice.png";

// displays a page header

export default function UnknownPage() {
  return (
    <div className="unknownPage">
      <div className="leftContent">
        <img src={sadRice} className="sideGraphic" />
      </div>
      <div className="rightContent">
        <div className="unHeader">404</div>
        <div className="unSubHeader">Something went wrong</div>
      </div>
    </div>
  );
}
