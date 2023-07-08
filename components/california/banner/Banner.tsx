import InternetBanner from "../../services/banner/InternetBanner";

const Banner = ({data}:any) => {
  return (
    <>
      <InternetBanner
        text={
          <>
            Locate Internet, Phone &
            Cable Providers in <span className="color__secondary">{data?.name}</span>
          </>
        }
        paragraph={
          <>
            To search for the best performing {data?.name} Internet, Phone & TV Providers, simply enter your zipcode below.
          </>
        }
        size={true}
      />
    </>
  );
};

export default Banner;
