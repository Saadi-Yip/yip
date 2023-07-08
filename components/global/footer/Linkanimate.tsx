import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./footer.module.css";
import useDimensions from "../../../hooks/use-dimensions";
import Img from "../../utils/image/Img";
const iconVariants = {
  default: {
    left: "0vw",
  },
  hover: {
    left: "100%",
  },
};
const textVariants = {
  default: {
    x: "2vw",
  },
  hover: {
    x: "-6%",
  },
};
type t_LinkAnimate = {
  text: string;
  url: string;
};

const breakpoint = {
  mobile: 600,
};

const Linkanimate = ({ text, url }: t_LinkAnimate) => {

  const { width } = useDimensions();
  const [isHover, setIsHover] = useState(false);
  return (
    <>
      {width < breakpoint.mobile ? (
        <>
          <Link href={url} legacyBehavior>
            <a className={styles.link}>
              <Img 
               src={`${process.env.NEXT_PUBLIC_IMAGES_URL}svg/double_arrow.svg`} 
               alt="Internet Service Providers"
                sizes={{
                  default: [1,1],
                  mobile: [5,5],
                }}
              />
              <span>{text}</span>
            </a>
          </Link>
        </>
      ) : (
        <>
          <Link href={url} legacyBehavior>
            <motion.a
              className={styles.link}
              onHoverStart={() => setIsHover(true)}
              onHoverEnd={() => setIsHover(false)}
            >
              <motion.img
                src={`${process.env.NEXT_PUBLIC_IMAGES_URL}svg/double_arrow.svg`} 
                alt="footer link"
                variants={iconVariants}
                initial="default"
                animate={isHover ? "hover" : "default"}
                transition={{
                  duration: 0.3,
                }}
              />
              <motion.span
                variants={textVariants}
                initial="default"
                animate={isHover ? "hover" : "default"}
                transition={{
                  duration: 0.3,
                }}
              >
                {text}
              </motion.span>
            </motion.a>
          </Link>
        </>
      )}
    </>
  );
};
export default Linkanimate;
