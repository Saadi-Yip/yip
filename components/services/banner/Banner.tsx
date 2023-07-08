import InternetBanner from "./InternetBanner";

const Banner = () => {
  return (
    <>
      <InternetBanner
        text={
          <>
            Locate <span className="color__secondary">Internet</span> Providers
            in Your Area
          </>
        }
        paragraph="To search for the best performing California Internet, Phone & TV Providers, simply enter your zipcode below."
      />
    </>
  );
};

export default Banner;
