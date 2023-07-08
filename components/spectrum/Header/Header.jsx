import React from "react";
import Img from "../../utils/image/Img";
import styles from '../Header/Header.module.css'
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.text_main}>
        <div>
          <Img 
            src={`${process.env.NEXT_PUBLIC_IMAGES_URL}spectrum/spectrum_logo.WebP`} 
            alt="Internet service provider" 
            sizes={{
              default: [18.8,2.5],
              mobile: [40.4,4.5],
            }}
          />
        </div>
        <div>
          <h3>CALL FROM 10:00 AM TO 7:00 PM</h3>
          <a href="tel:(855) 862-7178">(855) 862-7178</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
