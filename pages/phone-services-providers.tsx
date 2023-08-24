import Head from "next/head";
import Banner from "../components/phone-service/banner/Banner";
import LatestBlogs from "../components/phone-service/latest-blogs/LatestBlogs";
import PhonePackages from "../components/phone-service/phone-packages/PhonePackages";
import ProviderBenifits from "../components/phone-service/phone-providers/ProviderBenifits";
import TopProviders from "../components/phone-service/top-providers/TopProviders";
import getBlogs from "../controllers/getBlogs";
import Yiptrustbox from "../components/phone-service/yip-trust/Yiptrustbox";

const PhoneService = ({ data }: any) => {
  return (
    <>
      <Head>
        <title>Phone Services Provider in your area by zip code</title>
        <meta
          name="title"
          content="Phone Services Provider in your area by zip code"
        />
        <meta
          name="description"
          content="Looking for phone services in your area? Look no further than our phone services providers, serving by zip code. Our team offers top-quality phone services with unbeatable customer support."
        />
        <meta
          name="keywords"
          content="Phone Services Provider"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index,follow" />
        <link rel="icon" href="/favicon.ico" />
           {/* Open Graph / Facebook  */}
           <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.yourinternetprovider.com/phone-services-providers"
        />
        <meta
          property="og:title"
          content="Phone Internet service providers in your area by Zip code"
        />
        <meta
          property="og:description"
          content="Find top phone internet service providers in your area by zip code. Compare plans, prices, and availability. Stay connected with reliable and fast internet services."
        />
        <meta
          property="og:image"
          content="https://yip-storage.s3.amazonaws.com/phone-services-provider-in-your-area.png"
        />
        {/* Twitter  */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.yourinternetprovider.com/phone-services-providers"
        />
        <meta
          property="twitter:title"
          content="Phone Internet service providers in your area by Zip code"
        />
        <meta
          property="twitter:description"
          content="Find top phone internet service providers in your area by zip code. Compare plans, prices, and availability. Stay connected with reliable and fast internet services."
        />
        <meta
          property="twitter:image"
          content="https://yip-storage.s3.amazonaws.com/phone-services-provider-in-your-area.png"
          />
      </Head>
      <main>
        <Banner />
        <div className="providers_page_bg">
          <div className="providers_page_bg_inner">
            <ProviderBenifits />
            <PhonePackages />
            <TopProviders />
            <Yiptrustbox />
            <LatestBlogs blogs={data} />
          </div>
        </div>
      </main>
    </>
  );
};
export async function getStaticProps() {
  const response = (await getBlogs(1, 5)) as any;
  if (response.length < 1) {
    return {
      props: {
        data: [],
      },
    };
  }
  return {
    props: {
      data: response.blogs,
    },
  };
}
export default PhoneService;
