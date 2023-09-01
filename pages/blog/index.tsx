import Head from "next/head";
import AllBlogs from "../../components/blog/all-blogs/AllBlogs";
import Banner from "../../components/blog/banner/Banner";
import Trending from "../../components/blog/trending/Trending";
 
import QnA from "../../components/global/QnA/QnA"; 
import Link from "next/link";
import getBlogs from "../../controllers/getBlogs";

const Blog = ({ data }: any) => {
  console.log(data)
  const faqData = [
    {
      heading: "What is YourInternetProvider?",
      text: "YourInternetProvider is an online portal that helps you find the best TV, internet, and home phone deals in your area. Simply enter your Devices and address, and we'll search through a range of top-rated service providers to find the best packages to fit your needs. Our expert team is always available to help you find the right deal and answer any questions you have. Our goal is to make it easy for you to discover and compare available options to find the perfect package.",
    },
    {
      heading: "What services does YourInternetProvider offer?",
      text: (
        <p>
          As an authorized retailer for top telecom providers in the U.S.A,
          YourInternetProvider helps you find the best deals on{" "}
          <Link
            href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}phone-services-providers`}
          >
            phone
          </Link>
          ,{" "}
          <Link
            href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}cable-tv-providers-in-your-area`}
          >
            cable
          </Link>
          , and{" "}
          <Link
            href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}internet-providers-in-your-area`}
          >
            internet services
          </Link>{" "}
          in your area. Our website features a comprehensive list of all
          available provider according to your zip code, allowing you to easily
          compare Starting pricing, features, terms & conditions.
        </p>
      ),
    },
    {
      heading: "How can I get services from YourInternetProvider?",
      text: (
        <p>
          Ordering services is easy! You can simply call us at{" "}
          <a href="tel:+18882620945"> +1 (888) 262-0945</a>, and our highly trained
          customer service representatives will guide you through the process.
          We understand that navigating the world of telecom can be
          overwhelming, so we're here to help you find the perfect internet
          service provider to meet your unique needs.
        </p>
      ),
    },
    {
      heading: "What information do I need to provide when ordering services?",
      text: "To get started, all you need to provide is your address and contact information. We'll take care of the rest! Our advanced technology scans thousands of service providers to find the best offers available in your area. By providing your information, you can be confident that you'll get the best service at the best price.",
    },
  ];
  
  return (
    <>
      <Head>
        <title>
          Bringing you the latest and greatest from the internet world.
        </title>
        <meta
          name="title"
          content="Bringing you the latest and greatest from the internet world."
        />
        <meta
          name="description"
          content="Check out articles, tips and guides for everything related to the Internet."
        />
        <meta name="robots" content="index,follow" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="k47DZLbHpRIgn1Th9lbawTO52jPvz_M9J-t-B4-mZx0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Banner />
        <AllBlogs blogs = {data}/>
        <QnA data={faqData} />
      </main>
    </>
  );
};
 


export async function getServerSideProps({ query }:any) {
  const { page = 1 } = query;
  const apiUrl = `https://backend-yip.cyclic.app/blog?limit=6&page=${page}`;
  const response = await fetch(apiUrl);
  const data = await response.json();

  return {
    props: {
      data:data,
    },
  };
}

export default Blog;
