import BandwidthToolsText from '../../bandwidth-calculator/description/BandwidthToolsText'
import ProviderFeatures from '../../home/provider-features/ProviderFeatures';

const ProviderBenifits = ({dataProvider}:any) => {
    const data = [
        {
          type: `${process.env.NEXT_PUBLIC_SECOND_IMAGES_URL}customer.png`,
          heading: "California’s Internet Ranking",
          paragraph:
            "Our goal is to make it easy for you to find the best internet providers in your area by zip code. We use our advanced software to match your specific needs with the most convenient and reliable local providers, ensuring that you get the fastest and most affordable internet service available.",
            dataProvider : `${dataProvider?.usage.rank}`
        },
        {
          type: `${process.env.NEXT_PUBLIC_SECOND_IMAGES_URL}dollars.png`,
          heading: "Access to Wireless Broadband",
          paragraph:
            "Finding the right internet service can be a challenge, but with our zip code search, you can easily compare and choose the most affordable and suitable internet package for your needs. Plus, you can even qualify for exclusive discounts. Get started today and enjoy reliable high-speed internet in your area.",
            dataProvider : `${dataProvider?.usage.wireless}`
        },
        {
          type: `${process.env.NEXT_PUBLIC_SECOND_IMAGES_URL}24hrs.png`,
          heading: "Access to Wired Broadband",
          paragraph:
            "Get the best high-speed internet in your home with just one click! Our smart software covers over 10,000 zip codes nationwide, ensuring that you have access to all the best packages in your area. Enter your zip code now and experience lightning-fast internet like never before.",
            dataProvider : `${dataProvider?.usage.wired}`
          },
        {
          type: `${process.env.NEXT_PUBLIC_SECOND_IMAGES_URL}meter.png`,
          heading: "Number of Providers in California",
          paragraph:
            "Say goodbye to internet lags forever with Yourinternetprovider's blazing-fast internet service providers. Our high-speed internet service providers offer futuristic connectivity that will keep you connected and streaming without any frustrating interruptions. Say goodbye to buffering and hello to reliable internet today.",
            dataProvider : `${dataProvider?.usage.totalProviders}`
        },
      ];
  return (
    <>
      <BandwidthToolsText text="Internet Accessibility Facts and Stats, CA State" />

      {data.map((provider, i) => {
        return (
          <div className="benifcs_providers_row" key={i.toString()}>
            <ProviderFeatures
              heading={provider.heading}
              paragraph={provider.paragraph}
              type={provider.type}
              dataProvider={provider.dataProvider}
              dark={false}
            />
          </div>
        );
      })}
    </>
  )
}

export default ProviderBenifits
