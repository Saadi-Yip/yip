import React from "react";
import Head from "next/head";
import { Header } from "../components/att/header/Header";

import style from "../components/att/main.module.css";
import Banner from "../components/att/banner/Banner";
import Section from "../components/att/Section/Section";
import Atdeals from "../components/att/Atdeals.tsx/Atdeals";
import AtDealsSection from "../components/att/Atdeals.tsx/AtDealsSection";
import Atwraper from "../components/att/AtWraper/Atwraper";
import Atwrapper from "../components/att/Atwraper2/Atwrapper";
import Atfaqs from "../components/att/AT FAQS/Atfaqs";
import Atfooter from "../components/att/Atfooter.tsx/Atfooter";
import Script from "next/script";

export default function Att() {
  return (
    <>
    <Script id="faq-att" type="application/ld+json">
    {`{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What types of devices are compatible with AT&T's network?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "AT&T's network is compatible with a wide range of devices, including smartphones, tablets, smartwatches, laptops, and other wireless-enabled devices. The specific compatibility can vary depending on the type of device and the AT&T service plan you have. AT&T also offers a variety of devices for purchase on their website or at their retail stores, including the latest smartphones and other wireless devices. It is always best to check with AT&T or the device manufacturer to ensure compatibility before purchasing a new device."
    }
  },{
    "@type": "Question",
    "name": "What is the cost of AT&T's plans and services?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The cost of AT&T's plans and services can vary depending on the type of service and plan that you choose. For example, their wireless plans start at around $35 per month, but can cost more depending on the amount of data and features included."
    }
  },{
    "@type": "Question",
    "name": "What is the coverage area of AT&T's wireless network?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "AT&T's wireless network covers a large portion of the United States, including all 50 states and Puerto Rico. However, coverage can vary depending on your location, and some rural areas may have limited coverage. AT&T provides a coverage map on their website where you can check the availability of service in your area."
    }
  },{
    "@type": "Question",
    "name": "What services does AT&T offer?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "AT&T offers a range of services, including wireless and wireline telecommunications, broadband internet, home phone, television, and digital entertainment services. They also offer a variety of plans for each service, with different options and features to meet the needs of their customers."
    }
  }]
}`}

    </Script>
      <Head>
        <title>
          AT&T Best Internet Services, TV, Home Phone Plans and Prices
        </title>
        <meta
          name="title"
          content=" AT&T Best Internet Services, TV, Home Phone Plans and Prices"
        />
        <meta
          name="description"
          content="AT&T services in 2023 for high speed internet, TV, and home phone plans and prices. Enjoy seamless connectivity and flexible packages tailored to your needs."
        />
        <meta
          name="keywords"
          content="at&t internet provider, at&t internet providers, internet provider at&t, at&t wireless internet providers, at&t business internet providers"
        />
        <meta name="robots" content="index,follow" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.yourinternetprovider.com/att"
        />
        <meta
          property="og:title"
          content="AT&T Best Internet Services, TV, Home Phone Plans and Prices"
        />
        <meta
          property="og:description"
          content=" AT&T services in 2023 for high speed internet, TV, and home phone plans and prices. Enjoy seamless connectivity and flexible packages tailored to your needs."
        />
        <meta
          property="og:image"
          content="https://www.yourinternetprovider.com/att/discussion.jpg"
        ></meta>
        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.yourinternetprovider.com/att"
        />
        <meta
          property="twitter:title"
          content="AT&T Best Internet Services, TV, Home Phone Plans and Prices"
        />
        <meta
          property="twitter:description"
          content="AT&T services in 2023 for high speed internet, TV, and home phone plans and prices. Enjoy seamless connectivity and flexible packages tailored to your needs."
        />
        <meta
          property="twitter:image"
          content="https://www.yourinternetprovider.com/att/discussion.jpg"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={style.att_wrapper}>
        <Header />
        <Banner />
        <Section />
        <AtDealsSection />
        <Atwraper />
        <Atwrapper />
        <Atfaqs />
        <Atfooter />
      </main>
    </>
  );
}
