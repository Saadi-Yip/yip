import Head from "next/head";
import Banner from "../components/services/banner/Banner";
import InternetBanner from "../components/services/banner/InternetBanner";
import Myinternet from "../components/services/internet-packages/Myinternet";
import Mypakages from "../components/services/internet-pakages/Mypakages";
import InternetLatestBlogs from "../components/services/latest-blogs/InternetLatestBlogs";
import ProviderBenifits from "../components/services/provider-benifits/ProviderBenifits";
import Yiptrustbox from "../components/services/yip-trust/Yiptrustbox";
import getBlogs from "../controllers/getBlogs";

const InternetService = ({ data }: any) => {
  return (
    <>
      <Head>
        <title>Find Internet Services Providers in Your Area by Zip Code</title>
        <meta
          name="title"
          content="Find Internet Services Providers in Your Area by Zip Code"
        />
        <meta
          name="description"
          content="Looking for Internet service providers in your area? Use our zip code lookup tool to find and compare the best broadband plans and prices. Get started now!"
        />
        <meta
          name="keywords"
          content="Internet Services Providers in Your Area, fiber optic internet in my area, Internet Providers For My Address, Internet Providers in Your Area, internet services by zipcode"
        />
        <meta name="robots" content="index,follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
                {/* Open Graph / Facebook  */}
         <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.yourinternetprovider.com/internet-providers-in-your-area"
        />
        <meta
          property="og:title"
          content="Find Internet Services Providers in Your Area by Zip Code"
        />
        <meta
          property="og:description"
          content="Looking for Internet service providers in your area? Use our zip code lookup tool to find and compare the best broadband plans and prices. Get started now!"
        />
        <meta
          property="og:image"
          content="https://yip-storage.s3.amazonaws.com/internet-services-provider-in-my-area.png"
        />
        {/* Twitter  */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.yourinternetprovider.com/internet-providers-in-your-area"
        />
        <meta
          property="twitter:title"
          content="Find Internet Services Providers in Your Area by Zip Code"
        />
        <meta
          property="twitter:description"
          content="Looking for Internet service providers in your area? Use our zip code lookup tool to find and compare the best broadband plans and prices. Get started now!"
        />
        <meta
          property="twitter:image"
          content="https://yip-storage.s3.amazonaws.com/internet-services-provider-in-my-area.png"
          />
      </Head>
      <main>
        <Banner />
        <div className="providers_page_bg">
          <div className="providers_page_bg_inner">
            <ProviderBenifits />
            <Mypakages />
            <Myinternet />
            <Yiptrustbox />
            <InternetLatestBlogs blogs={data} />
          </div>
        </div>
      </main>
    </>
  );
};
// export async function getStaticProps() {
//   const response = (await getBlogs(1, 5)) as any;
//   if (response.length < 1) {
//     return {
//       props: {
//         data: [],
//       },
//     };
//   }
//   return {
//     props: {
//       data: response.blogs,
//     },
//   };
// }
export default InternetService;
