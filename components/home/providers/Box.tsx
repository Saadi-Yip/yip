import Link from "next/link";
import React, { useState } from "react";
import Img from "../../utils/image/Img";
import styles from "./provider.module.css";

type props = {
  img : string,
  heading : string,
  para: any,
  url:string
}

export const Box = ({img, heading, para,url}:props) => {
  // const [isRead, setIsRead] = useState(true);
  // const toggleButton = () => {
  //   setIsRead(!isRead);
  // };

  return (
    <div className={styles.providers_col}>
      <Img 
        src={img}
        alt="Internet Service Provider"
        sizes={{
          default: [1.927,1.927],
          mobile: [7.927,7.823],
        }}
      />
      <Link href={url} legacyBehavior >
        <a className={styles.anchor}>{heading}</a>
      </Link>
      
        {para}
      {/* <p className="para__secondary"> */}
      {/* </p> */}
    </div>
  );
};
