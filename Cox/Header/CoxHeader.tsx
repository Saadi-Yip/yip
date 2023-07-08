import React from "react";
import Img from "../../components/utils/image/Img";
import style from "./CoxHeader.module.css";
function CoxHeader() {
  return (
    <nav className={style.main_nav}>
      <div className={style.container}>
        <Img
          src={`${process.env.NEXT_PUBLIC_IMAGES_URL}cox_logo.svg`}
          alt="Banner image"
          sizes={{
            default: [9, 7],
            mobile: [25, 17],
          }}
        />
        <div className={style.nav_btn}>
          <a href="tel:1-844-572-2228">1-844-572-2228</a>
        </div>
      </div>
    </nav>
  );
}

export default CoxHeader;
