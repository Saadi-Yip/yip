import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import localFont from "@next/font/local";
// components
import { Footer } from "../components/global/footer/Footer";
import CallNow from "../components/utils/call-now/CallNow";
import Header from "../components/global/header/Header";
// import SmoothScroll from "../components/smooth-scroll/SmoothScrolling";
// styles
import "../styles/globals.css";
import "../components/xfinity/main.css";
import "../styles/utility-classes.css";
import OfferBanner from "../components/offer-banner/OfferBanner";

const alliance = localFont({
  src: [
    {
      path: "./fonts/Alliance-2-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Alliance-2-Light.otf",
      weight: "300",
      style: "normal",
    },
    
  ],
});
const arial = localFont({
  src: [
    {
      path: "./fonts/arial.otf",
      weight: "400",
      style: "normal",
    },
  ],
});
     

export default function App({ Component, pageProps }: AppProps) {
 

  return (
    <>
      <NextNProgress color="#0b4fcb" />
      <style jsx global>{`
        html,
        * {
          font-family: ${alliance.style.fontFamily};
        }
        .arial_font *{
          font-family:${arial.style.fontFamily}
        }
      `}</style>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <CallNow />
    </>
  );
}
