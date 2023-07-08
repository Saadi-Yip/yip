import styles from "./service-card.module.css";

import { t_handleClickOnBackButton } from ".";

type Props = {
  currentSlide: number;
  handleClickOnBackButton: t_handleClickOnBackButton;
};

const BackButton = ({ currentSlide, handleClickOnBackButton }: Props) => {
  // Display back button if active slide is not the first slide
  if (currentSlide !== 1) {
    return (
      <button
        className={styles.slides_back_btn}
        onClick={handleClickOnBackButton}
      >
        <img
          src={`${process.env.NEXT_PUBLIC_IMAGES_URL}svg/back.svg`}
          alt="Internet service provider"
        />
      </button>
    );
  }
  return <></>;
};

export default BackButton;
