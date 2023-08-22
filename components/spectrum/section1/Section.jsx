import React from "react";
import Img from "../../utils/image/Img";
import styles from "../section1/Section.module.css";
function Section() {
  return (
    <div
      className={styles.section}
      style={{
        backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGES_URL}spectrum/hero-background.WebP)`,
      }}
    >
      <div className={styles.container}>
        <div className={styles.area1}>
          <div className={styles.spect_one}>
            <h2>Save with Spectrum One</h2>
          </div>
          <div className={styles.para_text}>
            <p>
            Experience seamless connectivity across all your devices. Experience the ultimate trifecta of connectivity with Spectrum One! Enjoy Spectrum Internet® for lightning-fast browsing, Advanced WiFi for seamless streaming, and an Unlimited Mobile line for staying connected on-the-go, all bundled together at an unbeatable price.
            </p>
          </div>
          <div className={styles.para_line}>
            <p>Internet + Advanced WiFi + Mobile</p>
          </div>
          <div className={styles.dollar_main}>
            <div className={styles.price}>
              <span>$</span>
              <h2>49</h2>
            </div>
            <div className={styles.dollar_main2}>
              <div className={styles.membership}>
                <h3>99</h3>
                <span>/mo</span>
              </div>
              <p>for 12 mos when bundled</p>
            </div>
          </div>
        </div>

        <div className={styles.image_area}>
          <div className={styles.spect_one_logo}>
            <Img 
              src={`${process.env.NEXT_PUBLIC_IMAGES_URL}spectrum/Spectrum_One_Logo.WebP`}
              alt=" spectrum internet provider, spectrum internet provider near me"
              sizes={{
                default: [29.5,5],
                mobile: [67.4,13],
              }}
            />
          </div>
          <div className={styles.device_pic}>
            <Img
              src={`${process.env.NEXT_PUBLIC_IMAGES_URL}spectrum/device-lockup.WebP`}
              alt="spectrum internet deals"
              sizes={{
                default: [35.5,24],
                mobile: [93.4,65],
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;
