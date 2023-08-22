import React from "react";
import styles from "./tab.module.css";
import { motion } from "framer-motion";
import useDimensions from "../../../hooks/use-dimensions";

type t_TabBox = {
  text: string;
  heading: string;
  active: boolean;
  handleOnClick: () => void;
};

const TabBox = ({ text, heading, active, handleOnClick }: t_TabBox) => {
  const {width} = useDimensions();
  return (
    <div className={styles.tab}>
      <motion.div className={styles.bar} onTap={handleOnClick}>
        <h3 className="para__primary ">{heading}</h3>
        <span>{active ? "-" : "+"}</span>
      </motion.div>
      <motion.div
        className={styles.content}
        initial={{ height: 0 }}
        animate={
          active
            ? { height: "auto", padding: "21px 0 0 21px" }
            : { height: 0, padding: 0 }
        }
        transition={{duration: width < 600 ? 0.2 :0.3}}
      >
        <p>{text}</p>
      </motion.div>
    </div>
  );
};

export default TabBox;
