import Head from "next/head";
import Description from "../components/bandwidth-calculator/description/Description";
import QnA from "../components/global/QnA/QnA";
import ServiceProvider from "../components/service-providers";
import Script from "next/script";

export default function BandwidthCalculator() {
  const data = [
    {
      heading: "What is a bandwidth calculator? ",
      text: "A bandwidth calculator is a tool that helps you estimate the amount of internet data you will use and the amount of bandwidth you need.",
    },
    {
      heading: "How accurate are bandwidth calculators?",
      text: "Bandwidth calculators provide estimates based on many factors, including your internet usage habits, the number of devices in your household, and the types of activities you do online. While the estimates may not be exact, they can give you a good idea of how much bandwidth you need.",
    },
    {
      heading: "How can I use a bandwidth calculator to choose the right internet plan? ",
      text: "Once you estimate your bandwidth needs, you can compare that to the bandwidth offered by different internet plans. Choose a plan that meets your needs without paying more than you need.",
    },
    {
      heading: "Can a bandwidth calculator help me save money?",
      text: "Yes! By accurately estimating your bandwidth needs, you can avoid overpaying for a plan that offers more bandwidth than you need.",
    },
    {
      heading: "Where can I find a bandwidth calculator?",
      text: "Your internet provider offers a free bandwidth calculator on our website. Input your internet usage habits and the number of devices in your household to estimate your bandwidth needs.",
    }
  ];
  return (
    <>
     <Script type="application/ld+json" id="bandwidth-calculator">
          {`{"@context": "http://schema.org/",
              "@type": "Product",
              "name": "BandWidth Calculator Tool",
              "image": [
                "https://www.yourinternetprovider.com/_next/image?url=https%3A%2F%2Fnext.thepic.store%2Fyourinternetprovider-bandwidth-tool.webp&w=1920&q=75",
                "https://www.yourinternetprovider.com/_next/image?url=https%3A%2F%2Fnext.thepic.store%2Fyourinternetprovider-bandwidth-tool.webp&w=1920&q=75"
              ],
              "description": "Estimate of your bandwidth needs with our bandwidth calculator tool. Avoid slow internet speeds & choose the right internet plan for your needs with YourInternetProvider's free tool.",
              "mpn": "0",
              "url":"https://www.yourinternetprovider.com/bandwidth-calculator-tool",
              "brand": {
                "@type": "Thing",
                "name": "yourinternetprovider.com"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "16900"
              },
              "offers": {
                "@type": "Offer",
                "priceCurrency": "USD",
                "price": "0",
                "priceValidUntil": "2023-03-09",
                "itemCondition": "http://schema.org/UsedCondition",
                "availability": "http://schema.org/InStock",
                "seller": {
                  "@type": "Organization",
                  "name": "Muhammad Sheroz"
                }
              }}
            `}
      </Script>
      <Head>
        <title>
          Estimate your business internet usage Bandwidth calculator tool
        </title>
        <meta
          name="title"
          content="Estimate your business internet usage Bandwidth calculator tool"
        />
        <meta
          name="description"
          content="Estimate of your bandwidth needs with our bandwidth calculator tool. Avoid slow internet speeds & choose the right internet plans for your needs with YourInternetProvider free tool."
        />
        <meta
          name="keywords"
          content="online bandwidth calculator, wireless bandwidth calculator, streaming bandwidth calculator, free bandwidth calculator, bandwidth calculator tool"
        />
        <meta name="robots" content="index,follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.yourinternetprovider.com/bandwidth-calculator"
        />
        <meta
          property="og:title"
          content="Estimate your business internet usage - Bandwidth calculator tool"
        />
        <meta
          property="og:description"
          content="Estimate of your bandwidth needs with our bandwidth calculator tool. Avoid slow internet speeds & choose the right internet plan for your needs with YourInternetProvider's free tool."
        />
        <meta
          property="og:image"
          content="https://next.thepic.store/frontend/bandwidth_calculator.png"
        ></meta>
        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://next.thepic.store/frontend/bandwidth_calculator.png"
        />
        <meta
          property="twitter:title"
          content="Estimate your business internet usage - Bandwidth calculator tool"
        />
        <meta
          property="twitter:description"
          content="Estimate of your bandwidth needs with our bandwidth calculator tool. Avoid slow internet speeds & choose the right internet plan for your needs with YourInternetProvider's free tool."
        />
        <meta
          property="twitter:image"
          content="https://www.yourinternetprovider.com/logo.svg"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
       
      </Head>
      <main>
        <ServiceProvider />
        <Description />
        <QnA data={data} />
      </main>
    </>
  );
}
