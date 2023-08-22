import styles from "./service-card.module.css";

import { t_paginationTitle } from ".";

type Props = {
  currentSlide: number;
  paginateTitle: t_paginationTitle;
};

const Pagination = ({ currentSlide, paginateTitle }: Props) => {
  return (
    <div className={styles.pagination}>
      <div className={styles.wrapper}>
        {[1, 2, 3].map((n: number) => (
          <span
            key={n.toString()}
            className={`${currentSlide >= n ? styles.full : styles.outline} 
          ${currentSlide === n ? styles.active : ""}`}
          ></span>
        ))}
      </div>
      <span
        className={styles.paginateDetail}
        style={{
          left:
            currentSlide === 1 ? "-5%" : currentSlide === 2 ? "unset" : "unset",
          right: currentSlide === 3 ? "-5%" : "unset",
        }}
      >
        {paginateTitle}
      </span>
    </div>
  );
};

export default Pagination;
