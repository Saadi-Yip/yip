import { Dispatch, useEffect } from "react";
import { motion } from "framer-motion";

import styles from "./tester.module.css";
import { t_handleClickDownloadStartBtn, t_animationProperties } from ".";

type Props = {
  reference: React.LegacyRef<HTMLDivElement> | undefined;
  handleClickDownloadStartBtn: t_handleClickDownloadStartBtn;
  isStart: boolean;
  setIsStart: Dispatch<boolean>;
  animationProperties: t_animationProperties;
  downloadSpeed?: number;
};

const Meter = ({
  reference,
  handleClickDownloadStartBtn,
  isStart,
  animationProperties,
  downloadSpeed,
}: Props) => {
  const meterVariants = {
    mount: {
      opacity: 1,
      display: "flex",
      transition: { delay: 0.5 },
    },
    unMount: {
      opacity: 0,
      display: "none",
      transition: { display: { delay: 0.5 } },
    },
  };
  const units = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

  useEffect(() => {
    if (isStart) handleClickDownloadStartBtn();
  }, [isStart]);

  return (
    <motion.div
      className={styles.meter_wrapper}
      animate={isStart ? "mount" : "unMount"}
      variants={meterVariants}
      initial={"unMount"}
    >
      <div className={styles.meter} ref={reference}>
        <Overlay animationProperties={animationProperties} />
        <div className={styles.circle}>
          <h3 id="heading"> {downloadSpeed ? downloadSpeed : 0} </h3>
          <span id="unit"> mbps</span>
        </div>
        {units.map((unit: number, index: number) => {
          const { checkClass, rotation } = getCircleValues(index);

          return (
            <span
              key={unit.toString()}
              className={styles.unit + " " + checkClass}
              style={{ rotate: rotation + "deg" }}
            >
              <p style={{ rotate: -rotation + "deg", display: "inline-block" }}>
                {unit}
              </p>
            </span>
          );
        })}
        {/* <Niddle animationProperties={animationProperties} /> */}
      </div>
    </motion.div>
  );
};

export default Meter;

const Niddle = ({
  animationProperties,
}: {
  animationProperties: t_animationProperties;
}) => {
  return (
    <motion.div
      className={styles.niddle}
      id="niddle"
      animate={{ rotate: animationProperties.niddle }}
      transition={{
        repeat: animationProperties.repeat,
        duration: 2,
        ease: "linear",
        repeatType: "reverse",
      }}
    >
      <img src="/niddle.svg" alt="Niddle" />
    </motion.div>
  );
};
const Overlay = ({
  animationProperties,
}: {
  animationProperties: t_animationProperties;
}) => {
  return (
    <motion.div
      className={styles.overlay}
      id="overlay"
      animate={{ rotate: animationProperties.overlay }}
      transition={{
        repeat: animationProperties.repeat,
        duration: 2,
        ease: "linear",
        repeatType: "reverse",
      }}
    />
  );
};

// utils
const getCircleValues = (position: number) => {
  let checkClass;
  let rotation;

  if (position < 5) {
    checkClass = styles.unit_left;
  } else if (position > 5) {
    checkClass = styles.unit_right;
  } else {
    checkClass = styles.unit_neutral;
  }

  switch (position) {
    case 0:
      rotation = 3;
      break;
    case 10:
      rotation = -3;
      break;
    default:
      rotation = position <= 5 ? position * 18 : (position - 10) * 18;
      break;
  }

  return { checkClass, rotation };
};
