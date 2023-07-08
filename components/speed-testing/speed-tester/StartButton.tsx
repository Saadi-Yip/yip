import { motion } from "framer-motion";
import styles from "./tester.module.css";

type Props = {
    handleClick:()=>void;
    isStart:boolean;
};

const StartButton = ({handleClick,isStart}:Props) => {
  const ringVariants = {
    mount: {
      rotate: [0, 360],
      transition: { duration: 5, repeat: Infinity, ease: "linear" },
    },
    unMount: {
      rotate: [0, 360],

      transition: {
        rotate: { duration: 0.2, repeat: 4, ease: "linear" },
      },
    },
  };
  const wrapperVariants = {
    mount: {
      opacity: 1,
      display: "flex",
    },
    unMount: {
      display: "none",
      opacity: 0,
      transition: { display: { delay: 0.5 } },
    },
  };
  return (
    <motion.div
      className={styles.btn_wrapper}
      variants={wrapperVariants}
      animate={isStart ? "unMount" : "mount"}
      transition={{ duration: 1 }}
    >
      <motion.div className={styles.ring} variants={ringVariants}/>
      <button className={styles.button} onClick={handleClick}>
        Go
      </button>
    </motion.div>
  );
};

export default StartButton;
