import React, { useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";
import useCoordinates from "../../../hooks/use-coordinates";

import styles from "./cursor-animation.module.css";
import useDimensions from "../../../hooks/use-dimensions";

const CursorAnimation = () => {
  const [circleDimensions, setCircleDimensions] = useState({
    width: 500,
    height: 500,
  });
  const coordinates = useCoordinates();
  const { width } = useDimensions();

  // handle circle width & height on difference breakpoints
  useEffect(() => {
    if (width <= 768) {
      setCircleDimensions({
        width: 200,
        height: 200,
      });
    } else if (width <= 1200) {
      setCircleDimensions({
        width: 300,
        height: 300,
      });
    } else {
      setCircleDimensions({
        width: 500,
        height: 500,
      });
    }
  }, [width]);

  return (
    <div className={styles.wrapper}>
      <motion.span
        animate={{
          x: coordinates.x - circleDimensions.width / 2,
          y: coordinates.y - circleDimensions.width / 2,
        }}
        className={styles.cursor}
        style={{
          width: circleDimensions.width + "px",
          height: circleDimensions.height + "px",
        }}
      ></motion.span>
      <ul>
        {Array.from(Array(100).keys()).map((i) => (
          <li key={i} className={styles.box}></li>
        ))}
      </ul>
    </div>
  );
};

export default CursorAnimation;
