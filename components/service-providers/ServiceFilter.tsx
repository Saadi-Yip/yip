import React, { useEffect, useState } from "react";
import styles from "./service-card.module.css";
// @ts-ignore
import { motion } from "framer-motion";
import useDimensions from "../../hooks/use-dimensions";
// types
import { t_device } from ".";

type t_Dropdown = {
  items?: t_device[];
  placeholder: string;
  handleClickOnProvider?: (item: t_device) => void;
  disabled?: boolean;
  reset?: boolean;
};

// variants
const iconBarVariants = (width: number) => {
  if (width < 600) {
    return {
      default: { y: "-6.8vw" },
      hover: {
        y: "-0.111vw",
      },
    };
  } else {
    return {
      default: { y: "-1.889vw" },
      hover: {
        y: "0.2vw",
      },
    };
  }
};
const iconVariants = {
  default: { rotate: 0 },
  active: { rotate: -180 },
};
const menuVariants = {
  default: {
    height: 0,
    y: -20,
    opacity: 0,
    zIndex: "-1",
    transition: {
      zIndex: { delay: 0.3 },
    },
  },
  active: {
    height: "auto",
    y: 0,
    opacity: 1,
    zIndex: 9,
  },
};

const breakpoint = {
  mobile: 600,
};
export default function ServiceFilter({
  items,
  placeholder,
  handleClickOnProvider,
  disabled,
  reset,
}: t_Dropdown) {
  const { width } = useDimensions();
  const [isActive, setIsAcitve] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [activeItem, setActiveItem] = useState<null | t_device>(null);

  useEffect(() => {
    if (reset) setActiveItem(null);
  }, [reset]);

  // handler
  const handleClickOnMenuItem = (item: t_device) => {
    setActiveItem(item);
    handleClickOnProvider && handleClickOnProvider(item);
  };

  return (
    <motion.div className={styles.dropdown}>
      <motion.div
        className={`${styles.head} ${disabled ? styles.disabled : " "}`}
        onTap={() => (!disabled ? setIsAcitve(!isActive) : setIsAcitve(false))}
      >
        <span className={styles.title}>
          {activeItem ? activeItem.name : placeholder}
        </span>
        <motion.div
          className={styles.iconWrapper}
          onHoverStart={() => setIsHover(true)}
          onHoverEnd={() => setIsHover(false)}
        >
          <motion.div
            className={styles.iconBar}
            variants={iconBarVariants(width)}
            animate={isHover ? "hover" : "default"}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <motion.div
              className={styles.light}
              variants={iconVariants}
              animate={isActive ? "active" : "default"}
              transition={{
                duration: 0.3,
              }}
            >
              <img
                src={`${process.env.NEXT_PUBLIC_IMAGES_URL}svg/arrowdown.svg`} alt="service"
              />
            </motion.div>
            <motion.div
              className={styles.dark}
              variants={iconVariants}
              animate={isActive ? "active" : "default"}
              transition={{
                duration: 0.3,
              }}
            >
              <img
                src={`${process.env.NEXT_PUBLIC_IMAGES_URL}svg/arrowdown.svg`} alt="service"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        className={styles.menu}
        variants={menuVariants}
        animate={isActive ? "active" : "default"}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      >
        {items &&
          items.length > 0 &&
          items.map((item, i) => (
            <button
              key={i.toString()}
              onClick={() => {
                handleClickOnMenuItem(item);
                setIsAcitve(false);
              }}
            >
              {item.name}
            </button>
          ))}
      </motion.div>
    </motion.div>
  );
}
