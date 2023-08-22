import React from "react";
import Img from "../../utils/image/Img";
import style from "./OptimumWrapper.module.css";
function OptimumWrapper() {
  return (
    <div className={style.container}>
      <div className={style.banner}>
        <div className={style.banner_img}>
          <Img 
            src="https://next.thepic.store/frontend/image2.jpg"
            alt="Wrapper image"
            sizes={{
              default:[50,30],
              mobile : [100,55]
            }} 
          />
        </div>
        <div className={style.banner_text}>
          <h6>
          Optimum Packages for <span>Fiber-Fanatics</span>
          </h6>
          <p>
          An internet connection that’s not fast enough is an internet connection that’s useless. Optimum by Altice understands the need for lightning-fast speeds, and offers state-of-the-art fiber network plans. Optimum packages like Altice Fiber 1 Gig include:
          </p>
          <ul>
            <li>Speeds up to 940 Mbps</li>
            <li>Unlimited data ideal for streaming in 4K</li>
            <li>Smart Wi-Fi</li>
            <li>No annual contract</li>                                                                                          
            <li>$300 Visa Gift Card</li>
          </ul>
          <p>Plus taxes, fees and other charges. Includes Auto Pay and Paperless Billing.</p>
        </div>
      </div>
    </div>
  );
}

export default OptimumWrapper;
