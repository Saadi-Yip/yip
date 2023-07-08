import React from "react";
import Img from "../../utils/image/Img";
import styles from "../Area/Area.module.css";

function Section() {
  return (
    <div className={styles.area_3}>
      <div className={styles.deals}>
        <div className={styles.left_section}>
          <p>OUR BEST DEAL EVER!</p>
          <h2>Spectrum Mobile Unlimited Data Plans</h2>
          <div className={styles.content}>
            <p>
            Enjoy special savings on Unlimited data with plans starting at just $29.99/mo per line.Experience the ultimate digital freedom with unlimited data usage, complemented by the expansive coverage of nationwide 5G integration.
            </p>
          </div>
          <div className={styles.dollar_2}>
            <div className={styles.price_2}>
              <span>$</span>
              <h2>29</h2>
            </div>
            <div className={styles.dollar_main3}>
              <div className={styles.membership_2}>
                <h3>99</h3>
                <span>/mo</span>
              </div>
              <div>
                <p>Per line</p>
              </div>
            </div>
          </div>
          <div className={styles.restriction}>
            <p>Restrictions Apply Spectrum Internet required.</p>
          </div>
        </div>

        <div className={styles.image_part}>
          <Img
            src={`${process.env.NEXT_PUBLIC_IMAGES_URL}spectrum/more-saving.WebP`}
            alt="spectrum package deals"
            sizes={{
              default: [35.45,16.9],
              mobile: [84,40],
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Section;
