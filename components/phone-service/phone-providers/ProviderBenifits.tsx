import React from 'react'
import BandwidthToolsText from '../../bandwidth-calculator/description/BandwidthToolsText';
import ProviderFeatures from '../../home/provider-features/ProviderFeatures';

const ProviderBenifits = () => {
    const data = [
        {
          type: `https://res.cloudinary.com/dafe58jjh/image/upload/v1690959432/jdaqs5sk3e28cpuujukl.png`,
          heading: "Stress-Free Selection",
          paragraph:
            "There's no shortage of providers for high-quality home phone service, but the range of choices can be overwhelming. Finding relevant information for each provider, including pricing, features, availability, and billing rules can be a nightmare. Don't worry, YourInternetProvider is here to help make your search easy and stress-free.",
        },
        {
          type: `https://res.cloudinary.com/dafe58jjh/image/upload/v1690959432/mabxt2ewonnsse8zbhfp.png`,
          heading: "Streamlined Information Hub",
          paragraph:
            "Get all the necessary information in one easy-to-access location with YourInternetProvider. No more searching for individual provider details; find prices, availability, features, and billing rules in one place. Choose the best high-quality home phone service with ease. Our smart tool is designed to give comprehensive details of available packages. ",
        },
        {
          type: `https://res.cloudinary.com/dafe58jjh/image/upload/v1690959432/hmzzj0m2yju4vahlcvkm.png`,
          heading: "One-stop-Solution",
          paragraph:
            "Easily find home phone service providers in your area with our search tool. Compare packages and prices, and select your top three choices. Then, set up your static-free digital phone service by calling us. All the information you need is in one place.",
        },
        {
          type: `https://res.cloudinary.com/dafe58jjh/image/upload/v1690959432/asyyhwr73pnce2gbpc5m.png`,
          heading: "Easy Access ",
          paragraph:
            "Explore our smart tool to access a comprehensive list of home phone service providers, along with their features and packages. With your zip code, find the one that fits your budget and requirements, and call us to set up your service. Enjoy crystal-clear digital calling with reliable connectivity.",
        },
      ];
  return (
    <>
        <BandwidthToolsText text="YourInternetProvider Benefits"  />
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
