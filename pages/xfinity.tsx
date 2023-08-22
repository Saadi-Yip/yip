import Head from "next/head";
import Banner from "../components/xfinity/Banner/Banner";
import XfinityFooter from "../components/xfinity/Footer/XfinityFooter";
import Header from "../components/xfinity/Header/Header";
import XfinityFAQS from "../components/xfinity/XfinityFAQS/XfinityFAQS";
import XfinityWrapper from "../components/xfinity/XfinityWrapper/XfinityWrapper";
import XfinityWrraper2 from "../components/xfinity/XfinityWrapper2/XfinityWrapper2";
import XfinityBox from "./../components/xfinity/XfinityBundls/XfinityBox";
import Script from "next/script";

export default function Xfinity() {
  return (
    <>
    <Script id="faq-xfinity" type="application/ld+json">
    {`{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What is Xfinity ?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Xfinity by Comcast is a corporation that provides internet, TV, and phone services. In addition to this, you can also get Xfinity home security system at affordable prices."
    }
  },{
    "@type": "Question",
    "name": "Is Comcast and Xfinity the same thing ?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "+ Comcast and Xfinity are the same things, more or less. +Comcast acts as the parent organization, while Xfinity takes the lead as the premier brand delivering a broad spectrum of services like cable TV, internet, phone, and additional utilities."
    }
  },{
    "@type": "Question",
    "name": "Is Xfinity available in my area ?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "While Xfinity has a considerable presence and expansive coverage across various states, the optimal approach to determine the availability in your vicinity is by entering your zip code."
    }
  },{
    "@type": "Question",
    "name": "How much does Xfinity cost after 12 months ?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "After a year of Xfinity service, you might see an increase in your monthly payment, which can depend on the plan you selected and your area."
    }
  },{
    "@type": "Question",
    "name": "How much does Xfinity cost ?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Xfinity extends an array of services in various packages, and the monthly subscription cost is contingent upon the services and packages you choose. An effective strategy to trim down your Xfinity bills is to bundle your Xfinity services."
    }
  }]
}`}

    </Script>
      <Head>
        <title>
          Xfinity Best Internet Services, TV, Home Phone Plans and Prices
        </title>
        <meta
          name="title"
          content="Xfinity Best Internet Services, TV, Home Phone Plans and Prices"
        />
        <meta
          name="description"
          content="Experience lightning-fast internet speeds with Xfinity. From streaming in 4K to staying connected on the go, our reliable service and 20 million WiFi hotspots have you covered."
        />
        <meta
          name="keywords"
          content="Xfinity internet provider, Xfinity Internet offers, Xfinity Internet deals, xfinity internet customer service, xfinity internet customer service phone number"
        />
        <meta name="robots" content="index,follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.yourinternetprovider.com/xfinity"
        />
        <meta
          property="og:title"
          content="Xfinity Best Internet Services, TV, Home Phone Plans and Prices"
        />
        <meta
          property="og:description"
          content=" Experience lightning-fast internet speeds with Xfinity. From streaming in 4K to staying connected on the go, our reliable service and 20 million WiFi hotspots have you covered."
        />
        <meta
          property="og:image"
          content="https://www.yourinternetprovider.com/_next/image?url=https%3A%2F%2Fnext.thepic.store%2Ffrontend%2Flogo.WebP&w=1920&q=75"
        />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.yourinternetprovider.com/xfinity"
        />
        <meta
          property="twitter:title"
          content="Xfinity Best Internet Services, TV, Home Phone Plans and Prices"
        />
        <meta
          property="twitter:description"
          content="Experience lightning-fast internet speeds with Xfinity. From streaming in 4K to staying connected on the go, our reliable service and 20 million WiFi hotspots have you covered."
        />
        <meta
          property="twitter:image"
          content="https://www.yourinternetprovider.com/_next/image?url=https%3A%2F%2Fnext.thepic.store%2Ffrontend%2Flogo.WebP&w=1920&q=75"
        />
      </Head>
      <main className="xfinity_wrapper">
        <Header />
        <Banner />
        <XfinityBox />
        <XfinityWrapper />
        <XfinityWrraper2 />
        <XfinityFAQS />
        <XfinityFooter />
      </main>
    </>
  );
}
