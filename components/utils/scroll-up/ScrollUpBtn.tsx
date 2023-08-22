import React from "react";
import Img from "../image/Img";

import styles from "./scroll-up.module.css";

const ScrollUpBtn = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <button className={styles.btn} onClick={scrollToTop}>
      <Img 
        src={`${process.env.NEXT_PUBLIC_IMAGES_URL}svg/arrow_up_b.svg`} 
        alt="scroll up" 
        sizes={{
          default: [2,3],
          mobile: [6,6],
        }}
      />
    </button>
  );
};

export default ScrollUpBtn;
