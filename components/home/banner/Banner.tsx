import CursorAnimation from "../../utils/bg-cursor-animation/CursorAnimation";
import { motion } from "framer-motion";
// style
import styles from "./banner.module.css";
import Img from "../../utils/image/Img";
import CTA from "../../cta/cta";
import { useState } from "react";

const Banner = ({ content }: any) => {
  const [show, setShow] = useState(true);
  const scrollToProviders = () => {
    const element = document.getElementById("down");
    if (element) {
      window.scrollTo(0, element.offsetTop + 50);
    }
  };
  return (
    <section className={styles.banner_sec}>
      <CursorAnimation />
      <img
        src={`${process.env.NEXT_PUBLIC_IMAGES_URL}_main.png`}
        style={{ display: "none" }}
        alt="yourinternetprovider, Your internet provider"
      />
      <div className={styles.banner_textCol}>
        <div className={styles.banner_heading + " text-center"}>
          <h1 className= {`${!show?'heading__main':styles.hidden}`} >{content.primary_heading}</h1>
          {!show && <p className="para__primary">{content.text}</p>}
          {!show && <button onClick={scrollToProviders} className="para__primary">
            {content.secondary_heading}
          </button>}
          {show&&<CTA show = {show} setShow = {setShow}/>}
          <motion.div
            className={styles.downArrow}
            animate={{ y: 20 }}
            transition={{
              ease: "linear",
              repeat: Infinity,
              duration: 1,
              repeatType: "reverse",
            }}
          >
            <button onClick={scrollToProviders}>
              <Img 
                src={`${process.env.NEXT_PUBLIC_IMAGES_URL}downArrow2.WebP`} 
                alt="Internet service provider"
                sizes={{
                  default: [0,0],
                  mobile: [4,8],
                }}
              />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Banner;
