import React from "react";
import Img from "../../components/utils/image/Img";
import style from "./CoxWrapper.module.css";
function CoxWrapper() {
  return (
    <div className={style.container}>
      <div className={style.banner}>
        <div className={style.banner_img}>
        <Img 
        src={`${process.env.NEXT_PUBLIC_IMAGES_URL}cox2-img.webp`}
          alt="wrapper1  image"
          sizes={{
          default: [50,44],
          mobile: [88,62],
      }}
      />
        </div>
        <div className={style.banner_text}>
          <h6>
            <span>Cox Voice</span> - Stay Connected With Zero Hassles through
            Cox Phone
          </h6>
          <p>
            Cox Phone is equipped with advanced calling features that will help
            you remain connected without any hassle. It is the seventh-largest
            telephone service provider in the country with over 3.2 million
            digital phone users. Cox was the first service provider in Northern
            America to set up a VoIP telephone service for businesses known as
            the Cox Business VoiceManager. All these initiatives taken by Cox
            are a testament to the superior telephone service that <span> Cox Phone </span>
            offers to both its business and residential subscribers.
          </p>
          <ul>
            <li>Unlimited Local and Long-distance calling within the US and to neighboring countries like Canada and Mexico</li>
            <li>Readable Voicemail sends out transcripts of all received messages to your preferred email address</li>
            <li>Easily Block Calls from unwanted numbers</li>
            <li>Affordable International Calling plans</li>                                                                                          
            <li>Enhanced 911</li>
            <li>3-Way Conference Calling</li>
            <li>Call Waiting ID to identify who’s calling you while you’re on another call</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CoxWrapper;
