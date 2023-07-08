import React from "react";
import Img from '../../utils/image/Img'
import style from "./XfinityFooter.module.css";
function XfinityFooter() {
  return (
    <nav className={style.main_nav}>
      <div className={style.container}>
        <Img 
            src={`${process.env.NEXT_PUBLIC_IMAGES_URL}logo.WebP`}
            alt="Footer logo"
            sizes={{
              default: [14,5],
              mobile: [34,17],
          }}
        />
        <div className={style.nav_logo}>
          <Img src={`${process.env.NEXT_PUBLIC_IMAGES_URL}footer-logo.WebP`} alt="Footer logo" 
            sizes={{
              default: [8,8],
              mobile: [20,20],
          }}
          />
        </div>
      </div>
    </nav>
  );
}

export default XfinityFooter;
