import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./header.module.css";
import useDimensions from "../../../hooks/use-dimensions";
import Img from "../../utils/image/Img";

const tabVariants = {
  default: {
    rotate: 0,
  },
  move: {
    rotate: 90,
  },
};
const menuVariants = {
  default: {
    opacity: 0,
    display: "none",
    transition: {
      duration: 0.3,
      display: {
        delay: 0.4,
      },
    },
  },
  move: {
    opacity: 1,
    display: "flex",
    transition: {
      delay: 0.3,
      duration: 0.3,
    },
  },
};
const linkVariants = {
  default: {
    fontSize: "0.469vw",
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.6,
    },
  },
  move: {
    fontSize: "0.833vw",
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4,
      duration: 0.6,
    },
  },
};

type Props = {
  label: string;
  links: { text: string; url: string }[];
  onAnimationStart: CallableFunction;
  onAnimationEnd: CallableFunction;
};

const NavLinkDropdown = ({
  label,
  links,
  onAnimationStart,
  onAnimationEnd,
}: Props) => {
  const [isHover, setIsHover] = useState(false);
  const { width } = useDimensions();

  const toggler = (status: boolean) => {
    setIsHover(status);
    status ? onAnimationStart() : onAnimationEnd();
  };

  return (
    <div className={styles.provider}>
      {width > 600 ? (
        <>
          <motion.span
            onHoverStart={() => toggler(true)}
            onHoverEnd={() => toggler(false)}
            className={
              styles.link + " flex justify-content-center align-items-center"
            }
          >
            <motion.span
              initial={"default"}
              animate={isHover ? "move" : "default"}
              variants={tabVariants}
              className={styles.dropdown_icon}
              transition={{
                duration: 0.4,
              }}
            >
              <Img 
                src= '/double_arrow.png'
                alt="Internet Service Provider"
                sizes={{
                  default: [1,1],
                  mobile: [2,2],
                }}
              />
            </motion.span>
            {label}
          </motion.span>
          <motion.ul
            transition={{ duration: 0.4 }}
            initial="default"
            animate={isHover ? "move" : "default"}
            variants={menuVariants}
            onHoverStart={() => toggler(true)}
            onHoverEnd={() => toggler(false)}
          >
            {links.map((l, i) => (
              <Link key={i.toString()} href={l.url}>
                <motion.li
                  onClick={() => console.log('click...')}
                  animate={isHover ? "move" : "default"}
                  initial={"default"}
                  variants={linkVariants}
                  className={styles.link}
                  key={i.toString()}
                >
                  {l.text}
                </motion.li>
              </Link>
            ))}
          </motion.ul>
        </>
      ) : (
        <>
          <motion.span
            onClick={() => toggler(!isHover)}
            className={
              styles.link + " flex align-items-center"
            }
          >
            <motion.span
              initial={"default"}
              animate={isHover ? "move" : "default"}
              variants={tabVariants}
              className={styles.dropdown_icon}
              transition={{
                duration: 0.4,
              }}
            >
              <Img 
                src='/double_arrow.png'
                alt="Internet Service Provider"
                sizes={{
                  default: [1,1],
                  mobile: [5,5],
                }}
              />
            </motion.span>
            {label}
          </motion.span>
          <motion.ul
            transition={{ duration: 0.4 }}
            initial="default"
            animate={isHover ? "move" : "default"}
            variants={menuVariants}
            onHoverStart={() => toggler(true)}
            // onHoverEnd={() => toggler(false)}
          >
            {links.map((l, i) => (
              <Link key={i.toString()} href={l.url}>
                <motion.li
                  onClick={() =>toggler(false)}
                  animate={isHover ? "move" : "default"}
                  initial={"default"}
                  variants={linkVariants}
                  className={styles.link}
                  key={i.toString()}
                >
                  {l.text}
                </motion.li>
              </Link>
            ))}
          </motion.ul>
        </>
      )}
    </div>
  );
};

export default NavLinkDropdown;
