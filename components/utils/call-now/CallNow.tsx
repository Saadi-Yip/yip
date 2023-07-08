import useDimensions from "../../../hooks/use-dimensions";
import styles from "./callNow.module.css";
import Img from "../image/Img";

const callVarient = {
  default: {
    width: "22px",
    transition: {
      delay: 0.4,
      ease: "easeInOut",
    },
  },
  move: {
    width: 0,
    transition: {
      delay: 0.3,
      ease: "easeInOut",
    },
  },
};

const CallNow = () => {
  const { width } = useDimensions();
  return (
    <>
      {width && (width < 600 ? (
        <div style={{ border: "1px solid #000" }}>
          <a
            href="tel:855-862-7178"
            className={styles.callNow}
          >
            <Img
              src={`${process.env.NEXT_PUBLIC_IMAGES_URL}svg/call.svg`}
              alt="call now"
              sizes={{
                default: [0,0],
                mobile: [7.4,7],
              }}
            />
          </a>
        </div>
      ) : (
        ""
      )) || ""}
    </>
  );
};

export default CallNow;
