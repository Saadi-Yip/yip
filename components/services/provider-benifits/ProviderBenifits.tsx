import BandwidthToolsText from "../../bandwidth-calculator/description/BandwidthToolsText";
import ProviderFeatures from "../../home/provider-features/ProviderFeatures";

const ProviderBenifits = () => {
  const data = [
    {
      type: `https://res.cloudinary.com/dafe58jjh/image/upload/v1690959432/v9nd53bkawldcigirgos.png`,
      heading: "Connect Fast",
      paragraph:
        "Our goal is to make it easy for you to find the best internet providers in your area by zip code. We use our advanced software to match your specific needs with the most convenient and reliable local providers, ensuring that you get the fastest and most affordable internet service available.",
    },
    {
      type: `https://res.cloudinary.com/dafe58jjh/image/upload/v1690959432/asyyhwr73pnce2gbpc5m.png`,
      heading: "Affordability",
      paragraph:
        "Finding the right internet service can be a challenge, but with our zip code search, you can easily compare and choose the most affordable and suitable internet package for your needs. Plus, you can even qualify for exclusive discounts. Get started today and enjoy reliable high-speed internet in your area.",
    },
    {
      type: `https://res.cloudinary.com/dafe58jjh/image/upload/v1690959432/hmzzj0m2yju4vahlcvkm.png`,
      heading: "Access",
      paragraph:
        "Get the best high-speed internet in your home with just one click! Our smart software covers over 10,000 zip codes nationwide, ensuring that you have access to all the best packages in your area. Enter your zip code now and experience lightning-fast internet like never before.",
    },
    {
      type: `https://res.cloudinary.com/dafe58jjh/image/upload/v1690959432/u9ykcr6ewxiywzpeekn2.png`,
      heading: "High-Speed Internet",
      paragraph:
        "Say goodbye to internet lags forever with Yourinternetprovider's blazing-fast internet service providers. Our high-speed internet service providers offer futuristic connectivity that will keep you connected and streaming without any frustrating interruptions. Say goodbye to buffering and hello to reliable internet today.",
    },
  ];
  return (
    <>
      <BandwidthToolsText text="YourInternetProvider Benefits" />
      {data.map((provider, i) => {
        return (
          <div className="benifcs_providers_row" key={i.toString()}>
            <ProviderFeatures
              heading={provider.heading}
              paragraph={provider.paragraph}
              type={provider.type}
              dark={false}
            />
          </div>
        );
      })}
    </>
  );
};

export default ProviderBenifits;
