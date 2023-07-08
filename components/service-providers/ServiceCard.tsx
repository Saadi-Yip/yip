import React, { useState } from "react";
import { motion } from "framer-motion";

import styles from "./service-card.module.css";
import Link from "next/link";
import Img from "../utils/image/Img";


type t_ServiceCard = {
  service: string;
  image: string;
  packages?: string[];
  speed: { unit: number; type: string };
  offer: string;
  description: string;
  phone: string;
  price?: {
    time:string
  };
};

export default function ServiceCard({
  service,
  image,
  packages,
  speed,
  offer,
  description,
  phone,
  price,
}: t_ServiceCard) {
  const heading =
    description.length > 150
      ? `${description.slice(0, 150)} ${"..."}`
      : description;

  const [isActive, setIsAcitve] = useState(false);
  return (
    <motion.div
      className={styles.card}
    >
      <div className={styles.top}>
        <motion.div
          className={styles.card_wrapper}
          animate={isActive ? { y: "1.042vw" } : { y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className={styles.front_side}
            animate={isActive ? { opacity: 0 } : { opacity: 1 }}
          >
            <div className={styles.service__row}>
              <div className={styles.service}>
                <Img 
                  src={`${process.env.NEXT_PUBLIC_IMAGES_URL}svg/wifi.svg`} 
                  alt="Internet service provider"
                  sizes={{
                    default: [2,1],
                    mobile: [6,3],
                  }}
                />
                <span>{service}</span>
              </div>
              <div className={styles.image}>
                <Img 
                  src={image} 
                  alt="Internet service provider"
                  sizes={{
                    default: [12,3],
                    mobile: [19.4,16],
                  }}  
                />
              </div>
            </div>
            <div className={styles.speed__row} style={{ marginTop: "auto" }}>
              <div className={styles.speed}>
                <span>upto</span>
                <h2>{speed.unit}</h2>
                <sub style={{textTransform:"capitalize"}}>{speed.type}</sub>
              </div>
              <div className={styles.price}>
                <Img
                  src={`${process.env.NEXT_PUBLIC_IMAGES_URL}svg/montPrice.svg`} 
                  alt="Internet service provider" 
                  sizes={{
                    default: [0,0],
                    mobile: [3,5],
                  }}
                />
                <span>Starting from</span>
                <h2>${offer}</h2>
                <sub>{price?.time ? price.time : "/month"}</sub>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className={styles.bottom}>
        <motion.a href={`tel:${phone}`}>
          <Img 
            src={`${process.env.NEXT_PUBLIC_IMAGES_URL}svg/phone.svg`} 
            alt="Internet Service Provider"
            sizes={{
              default: [2,1],
              mobile: [9,4],
            }}
          />
          {phone}
        </motion.a>
      </div>
    </motion.div>
  );
}
