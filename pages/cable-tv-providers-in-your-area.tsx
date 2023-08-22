import Head from "next/head";
import Banner from "../components/cable-service/banner/Banner";
import CablePackage from "../components/cable-service/cable-packages/CablePackage";
import CableLatestBlogs from "../components/cable-service/latest-blogs/CableLatestBlogs";
import ProviderBenifits from "../components/cable-service/provider-benifits/ProviderBenifits";
import Myinternet from "../components/services/internet-packages/Myinternet";
import getBlogs from "../controllers/getBlogs";
import Yiptrustbox from "../components/cable-service/yip-trust/Yiptrustbox";
import Image from "next/image";

const CableServices = ({ data }: any) => {
  return (
    <>
      <Head>
        <title>
          Cable Tv Internet service providers in your area by Zip code{" "}
        </title>
        <meta
          name="description"
          content="Looking for Cable Tv Internet service providers in your area? Use our zip code lookup tool to find and compare the best broadband Cable Tv plans and prices."
        />
        <meta
          name="keywords"
          content="cable Tv service provider, Cable Services Providers in Your Area, cheapest cable tv providers in my area, cable providers in my area, cable providers in my area by zip code"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index,follow" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph / Facebook  */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.yourinternetprovider.com/cable-tv-providers-in-your-area"
        />
        <meta
          property="og:title"
          content="Cable Tv Internet service providers in your area by Zip code"
        />
        <meta
          property="og:description"
          content="Looking for Cable Tv Internet service providers in your area? Use our zip code lookup tool to find and compare the best broadband Cable Tv plans and prices."
        />
        <meta
          property="og:image"
          content="https://www.yourinternetprovider.com/cable.png"
        />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.yourinternetprovider.com/cable-tv-providers-in-your-area"
        />
        <meta
          property="twitter:title"
          content="Cable Tv Internet service providers in your area by Zip code"
        />
        <meta
          property="twitter:description"
          content="Looking for Cable Tv Internet service providers in your area? Use our zip code lookup tool to find and compare the best broadband Cable Tv plans and prices."
        />
        <meta
          property="twitter:image"
          content="https://www.yourinternetprovider.com/cable.png"
        />
      </Head>
      <main>
        <Image
          width={1421}
          height={597}
          src="/cable.png"
          alt="cable Tv service provider, Cable Services Providers in Your Area, cheapest cable tv providers in my area, cable providers in my area, cable providers in my area by zip code"
          style={{ display: "none" }}
        />
        <Banner />
        <div className="providers_page_bg">
          <div className="providers_page_bg_inner">
            <ProviderBenifits />
            <CablePackage />
            <Myinternet />
            <Yiptrustbox />
            <CableLatestBlogs blogs={data} />
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

export default CableServices;
