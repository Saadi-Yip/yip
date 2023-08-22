import React from "react";
import Img from "../../utils/image/Img";
import style from "./XfinityWrapper2.module.css";
function XfinityWrraper2() {
  return (
    <div className={style.main_wrapper2}>
      <div className={style.container}>
        <div className={style.wrapper2_text}>
          <h3>
            <span>/</span> Xfinity Mobile
          </h3>
          <p>
            You can select from a number of inexpensive mobile phone plans with
            plenty of data through Xfinity. Nothing is more annoying than paying
            your mobile phone service provider more money only to discover that
            you are still not getting enough data.A good plan has flexibility 
            and data usage. In the middle of your monthly cycle,
             <span >  Xfinity Mobile  </span> gives you the freedom to convert from
            an unlimited data plan to shared gigabytes. Also, you have the
            option of paying for additional data if you need it.
          </p>
          <ul>
            <li>
              Save up tp $400 on your wireless bill, plus nationwide 5G included
              at no extra cost!{" "}
            </li>
            <li>$0 to switch with no activation or phone lines fees</li>
            <li>Nationwide 5G included at no extra cost</li>
            <li>
              Connect to the most reliable network and access over 20 million
              secure Xfinity WIFI hotspots on the go!
            </li>
          </ul>
        </div>
        <div className={style.wrapper2_img}>
          <img src={`${process.env.NEXT_PUBLIC_IMAGES_URL}phone-img.WebP`} alt="xfinity internet customer service phone number" />
          {/* <Img
            src={`${process.env.NEXT_PUBLIC_IMAGES_URL}phone-img.WebP`}
            alt="Xfinity internet provider, Xfinity Internet offers"
            sizes={{
              default: [32, 28],
              mobile: [77, 65],
            }}
          /> */}
        </div>
      </div>
    </div>
  );
}

export default XfinityWrraper2;
