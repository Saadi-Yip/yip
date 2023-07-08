import React from "react";
import Img from "../../utils/image/Img";
import style from "./Atwraper.module.css";

const Atwraper = () => {
  return (
    <>
      <div className={style.all_part}>
        <div className={style.wraper_main}>
          <div className={style.wraper_text}>
            <h2>
              AT&T Internet empowers customers to create a smart, connected home
              lifestyle.
            </h2>
            <p>
              AT&T Internet supports advanced home automation technologies that
              can control lighting, temperature, and security systems remotely
              via a smartphone or tablet.
            </p>
            <ul className={style.lists}>
              <li className={style.list_items1}>
                <h5>
                  AT&T Internet provides fast and reliable internet speeds that
                  enable seamless streaming of content on multiple devices
                  throughout the home, including TVs, tablets, and smartphones.
                </h5>
              </li>
              <li className={style.list_items1}>
                <h5>
                  With AT&T Internet, customers can connect their home devices
                  to a secure Wi-Fi network and use the Smart Home Manager app
                  to manage their Wi-Fi network and monitor their devices'
                  activity.
                </h5>
              </li>
              <li className={style.list_items1}>
                <h5>
                  Customers can easily upgrade their AT&T Internet plan to
                  access faster internet speeds, giving them the flexibility to
                  adapt to their changing needs and take advantage of the latest
                  technologies.
                </h5>
              </li>
              <li className={style.list_items1}>
                <h5>
                  The Smart Home Manager app allows customers to set up parental
                  controls, troubleshoot connectivity issues, and test the speed
                  of their network to ensure optimal performance.
                </h5>
                <p></p>
              </li>
            </ul>
          </div>
        </div>
        <div className={style.main_img}>
        
          <Img
          src={`${process.env.NEXT_PUBLIC_IMAGES_URL}mobile-at.WebP`}
          alt="internet service provider" 
          sizes={{
            default: [50,45],
            mobile: [93.4,77],
          }}
          />
        </div>
      </div>
    </>
  );
};

export default Atwraper;



