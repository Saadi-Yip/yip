import BandwidthToolsText from "../../bandwidth-calculator/description/BandwidthToolsText";
import ProviderFeatures from "../../home/provider-features/ProviderFeatures";

const ProviderBenifits = () => {
    const data = [
        {
          type: `${process.env.NEXT_PUBLIC_SECOND_IMAGES_URL}camcoder.png`,
          heading: "Stress-Free Selection ",
          paragraph:"There's no shortage of high-quality home phone service providers, but the range of choices can be overwhelming. Finding relevant information for each provider, including pricing, features, availability, and billing rules, can be a nightmare. Don't worry; YourInternetProvider is here to help make your search easy and stress-free."
        },
        {
          type: `${process.env.NEXT_PUBLIC_SECOND_IMAGES_URL}Group%20.png`,
          heading: "Streamlined Information Hub",
          paragraph:
            "Get all the necessary information in one easy-to-access location with YourInternetProvider. No more searching for individual provider details; find prices, availability, features, and billing rules in one place. Choose the best high-quality home phone service with ease. Our innovative tool is designed to give comprehensive details of available packages.  ",
        },
        {
          type: `${process.env.NEXT_PUBLIC_SECOND_IMAGES_URL}plus.png`,
          heading: "One-stop-Solution ",
          paragraph:
            "Easily find home phone service providers in your area with our search tool. Compare packages and prices, and select your top three choices. Then, please set up your static-free digital phone service by calling us. All the information you need is in one place.",
        },
        {
          type: `${process.env.NEXT_PUBLIC_SECOND_IMAGES_URL}speaker.png`,
          heading: "Easy Access",
          paragraph:
            "Explore our innovative tool to access a comprehensive list of home phone service providers, along with their features and packages. With your zip code, find the one that fits your budget and requirements, and call us to set up your service. Enjoy crystal-clear digital calling with reliable connectivity.",
        },
      ];
  return (
    <>
      <BandwidthToolsText text="YourInternetProvider Benefits " />
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
  )
}

export default ProviderBenifits
