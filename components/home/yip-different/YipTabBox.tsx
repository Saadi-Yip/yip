import styles from "./yip.module.css";
import { motion } from "framer-motion";
import Img from "../../utils/image/Img";


type YipTabBox = {
  text: string;
  heading: string;
  active: boolean;
  handleOnClick: () => void;
};

const YipTabBox = ({ text, heading, active, handleOnClick }: YipTabBox) => {

  return (
    <div className={styles.tab}>
      <motion.div className={styles.bar} onTap={handleOnClick}>
        <h3 className="heading__primary">{heading}</h3>
        <span>{active ? "-" : "+"}</span>
      </motion.div>
      <motion.div
        className={styles.content}
        initial={{ height: 0 }}
        animate={
          active
            ? { height: "auto", padding: "21px 0 0 30px" }
            : { height: 0, padding: 0 }
        }
        transition={{ duration: 0.3 }}
      >
        {text}
      </motion.div>
    </div>
  );
};

export default YipTabBox;
