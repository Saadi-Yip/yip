import BandwidthToolsText from "../../bandwidth-calculator/description/BandwidthToolsText";
import ProviderFeatures from "../../home/provider-features/ProviderFeatures";

const ProviderBenifits = () => {
  const data = [
    {
      type: `${process.env.NEXT_PUBLIC_SECOND_IMAGES_URL}customer.png`,
      heading: "Connect Fast",
      paragraph:
        "Our goal is to make it easy for you to find the best internet providers in your area by zip code. We use our advanced software to match your specific needs with the most convenient and reliable local providers, ensuring that you get the fastest and most affordable internet service available.",
    },
    {
      type: `${process.env.NEXT_PUBLIC_SECOND_IMAGES_URL}dollars.png`,
      heading: "Affordability",
      paragraph:
        "Finding the right internet service can be a challenge, but with our zip code search, you can easily compare and choose the most affordable and suitable internet package for your needs. Plus, you can even qualify for exclusive discounts. Get started today and enjoy reliable high-speed internet in your area.",
    },
    {
      type: `${process.env.NEXT_PUBLIC_SECOND_IMAGES_URL}24hrs.png`,
      heading: "Access",
      paragraph:
        "Get the best high-speed internet in your home with just one click! Our smart software covers over 10,000 zip codes nationwide, ensuring that you have access to all the best packages in your area. Enter your zip code now and experience lightning-fast internet like never before.",
    },
    {
      type: `${process.env.NEXT_PUBLIC_SECOND_IMAGES_URL}meter.png`,
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
