import React from "react";
import style from "./OfferBanner.module.css";
import Marquee from "react-fast-marquee";

const OfferBanner = () => {
  return (
    <div className={style.container}>
      <Marquee speed={30} >
        <p>
          Introducing Our Limited-Time Offer: Get <strong>30%</strong> Off on
          All Internet Packages for 3 Months!
        </p>
      </Marquee>
    </div>
  );
};

export default OfferBanner;
