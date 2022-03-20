import React from "react";
import "./mobileUnknownPage.scss";
import sadRice from "../unknownPage/sadRice.png";

// displays a page header

export default function MobileUnknownPage() {
  return (
    <div className="mobileUnknownPage">
      <div className="mobHeader">404</div>
      <div className="mobSubHeader">Something went wrong</div>
      <img src={sadRice} className="sideGraphic" />
    </div>
  );
}
