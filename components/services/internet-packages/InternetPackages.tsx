import useDimensions from "../../../hooks/use-dimensions";
import Img from "../../utils/image/Img";
import styles from "./Internetpackages.module.css";

const InternetPackages = (props:any) => {
  const {width} = useDimensions();
  return (
    <div className={styles.cable_section}>
      <div className={styles.cable__inner__section}>
        <div className={styles.providers}>
          <div className={styles.provider}>
            <div className={styles.up_side} style={{display: width &&  width > 600 ? "block" : "none"}}>
              <span className="heading__primary">{props.one}</span>
            </div>
            <div className={styles.down_side}>
              <div className={width < 600 ? `${styles.mobile}` : ""}>
                <div className={styles.up_side} >
                  <span className="heading__primary" style={{display: width &&  width < 600 ? "block" : "none"}}>{props.one}</span>
                </div>
                <Img
                  src={props.image}
                  alt="Banner image"
                  sizes={{
                    default: [15, 4.5],
                    mobile: [29, 10],
                  }}
                />
              </div>
              <a href="tel:11-0900-78601">{props.call}</a>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default InternetPackages;
