import { t_handleClickOnSlidesHandler } from ".";

type Props = {
  currentSlide: number;
  isAllowToGo: boolean;
  loading: boolean;
  handleClickOnSlidesHandler: t_handleClickOnSlidesHandler;
  width: number;
};

const NextButton = ({
  currentSlide,
  isAllowToGo,
  loading,
  handleClickOnSlidesHandler,
  width,
}: Props) => {
  if (!loading && isAllowToGo && currentSlide !== 3) {
    return (
      <button
        className={`${
          width > 600 ? "load_more load_providers" : "load_more_mobile"
        }`}
        style={{ marginBottom: "1.563vw" }}
        onClick={handleClickOnSlidesHandler}
      >
        Next
      </button>
    );
  }
  return <></>;
};

export default NextButton;
