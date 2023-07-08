import Head from "next/head";
import SpeedTester from "../components/speed-testing/speed-tester";
import Image from "next/image";
import Script from "next/script";

// components
// type t_ProgressBar = {
//   reference: React.RefObject<t_ProgressBarReference>;
// };
// type t_ResultContent = {
//   message: string;
// };
// type t_StartButton = {
//   handleClickOnGoBtn:
//     | t_handleClickDownloadStartBtn
//     | t_handleClickUploadStartBtn;
// };
// type t_handleClickUploadStartBtn = () => void;
// type t_updateDownloadProgressBar = t_progressBar;
// type t_updateUploadProgressBar = t_progressBar;

export default function SpeedTesting() {
  return (
    <>
      <Script type="application/ld+json" id="faqs">
        {`{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "How do I test my internet speed?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "You can test your internet speed using online speed testing tools offered by various websites or through dedicated speed testing apps. Simply connect your device to your internet network and follow the instructions on the speed testing tool to measure your internet speed."
    }
  },{
    "@type": "Question",
    "name": "Why is my internet connection dropping during online gaming or video streaming?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Online gaming and video streaming require stable and fast internet connections. If you're experiencing drops in your internet connection during these activities, it could be due to issues with network congestion, signal interference, or bandwidth limitations. Troubleshooting steps could include:
Optimizing your router settings.
Prioritizing gaming or streaming traffic.
Upgrading to a higher-speed internet plan."
    }
  },{
    "@type": "Question",
    "name": "How do I troubleshoot my modem or router?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Troubleshooting steps for modems and routers may include power cycling (restarting) the devices, checking for firmware updates, ensuring proper connections, and resetting to factory settings if necessary. It's recommended to consult the user manual or contact the manufacturer for specific instructions on troubleshooting your modem or router."
    }
  },{
    "@type": "Question",
    "name": "What should I do if I've tried troubleshooting steps but my internet is still not working?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "If you've attempted troubleshooting steps, but your internet is still not working, contacting your ISP for further assistance is recommended. They may be able to diagnose and resolve issues related to your internet service or provide guidance on the next steps."
    }
  },{
    "@type": "Question",
    "name": "Why is my internet connection slow?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "There could be several reasons for slow internet speeds, including network congestion, interference from other devices, outdated equipment, or issues with your internet service provider (ISP). Troubleshooting steps could include:
Resetting your modem and router.
Checking for software updates.
Optimizing your Wi-Fi signal.
Contacting your ISP for assistance."
    }
  },{
    "@type": "Question",
    "name": "Why does my internet keep disconnecting?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Various factors, such as signal interference, outdated modem or router firmware, or issues with your ISP (Internet Service Provider), can cause frequent internet disconnects. Troubleshooting steps could include:
Checking for loose cables.
Restarting your modem and router."
    }
  },{
    "@type": "Question",
    "name": "Why am I experiencing Wi-Fi signal issues?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Wi-Fi signal issues can occur due to interference from other devices, distance from the router, physical obstacles, or outdated equipment. Troubleshooting steps could include:
Repositioning your router.
Minimizing interference from other devices.
Using a Wi-Fi extender.
Upgrading to a newer router with improved coverage."
    }
  },{
    "@type": "Question",
    "name": "Why is my internet not working after a power outage?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Power outages can disrupt your internet connection if the modem, router, or other networking equipment loses power. Troubleshooting steps could include:
Checking power connections.
Resetting your modem and router.
Contact your ISP if the issue persists."
    }
  }]
}`}
      </Script>

      <Script type="application/ld+json" id="article">
        {`{
  "@context": "https://schema.org/",
  "@type": "Article",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.yourinternetprovider.com/speed-testing-tool"
  },
  "headline": "Internet Speed Test — Check Your online Speed - Yourinternetprovider.com",
  "description": "Test your internet speed with our accurate speed test tool. Get insights into your connection's performance and optimize your online experience. Try it now!",
  "image": "https://www.yourinternetprovider.com/speed-testing-tool.png",
  "author": {
    "@type": "Person",
    "name": "Muhammad Sheroz",
    "url": "https://www.yourinternetprovider.com/"
  },
  "publisher": {
    "@type": "Organization",
    "name": "YIP",
    "logo": {
      "@type": "ImageObject",
      "url": "https://next.thepic.store/frontend/logo.svg"
    }
  },
  "datePublished": "2023-06-01",
  "dateModified": "2023-06-01"
}`}
      </Script>

      <Head>
        <title>
          Online internet speed testing tool - Check Your Internet speed
        </title>
        <meta
          name="description"
          content="Test your internet speed with our accurate speed test tool. Get insights into your connection's performance and optimize your online experience. Try it now!"
        />
        <meta
          name="keywords"
          content="Internet speed test, Internet speed testing tool, internet speed test online, broadband speed checker, online speed testing tool"
        />
        <meta name="robots" content="index,follow" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* Open Graph / Facebook  */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.yourinternetprovider.com/speed-testing-tool"
        />
        <meta
          property="og:title"
          content="Online internet speed testing tool - Check Your Internet speed"
        />
        <meta
          property="og:description"
          content="Test your internet speed with our accurate speed test tool. Get insights into your connection's performance and optimize your online experience. Try it now!"
        />
        <meta
          property="og:image"
          content="https://www.yourinternetprovider.com/speed-testing-tool.png"
        />
        {/* Twitter  */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.yourinternetprovider.com/speed-testing-tool"
        />
        <meta
          property="twitter:title"
          content="Online internet speed testing tool - Check Your Internet speed"
        />
        <meta
          property="twitter:description"
          content="Test your internet speed with our accurate speed test tool. Get insights into your connection's performance and optimize your online experience. Try it now!"
        />
        <meta
          property="twitter:image"
          content="https://www.yourinternetprovider.com/speed-testing-tool.png"
        />
      </Head>
      <main>
        <Image
          width={1425}
          height={756}
          src="/speed-testing-tool.png"
          alt="Internet speed test, Internet speed testing tool, internet speed test online, broadband speed checker, online speed testing tool"
          style={{ display: "none" }}
        />
        <SpeedTester />
        {/* <section
          style={{
            height: "100vh",
            backgroundColor: "#cdcecf",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "48px",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <h2 style={{ marginBottom: "24px" }}>Download</h2>
            {!downloadSpeed ? (
              <ProgressBar reference={downloadProgreeBarRef} />
            ) : (
              <ResultContent
                message={`Speed : ${downloadSpeed.toFixed(2)} MB`}
              />
            )}
            <StartButton handleClickOnGoBtn={handleClickDownloadStartBtn} />
          </div>
          <div style={{ textAlign: "center" }}>
            <h2 style={{ marginBottom: "24px" }}>Upload</h2>
            {!uploadSpeed ? (
              <ProgressBar reference={uploadProgressBarRef} />
            ) : (
              <ResultContent message={`Speed : ${uploadSpeed.toFixed(2)} MB`} />
            )}
            <StartButton handleClickOnGoBtn={handleClickUploadStartBtn} />
          </div>
          <input
            type="file"
            onChange={(e: any) => {
              setImage(e.target.files[0]);
            }}
          />
        </section> */}
        {/* <SpeedTester /> */}
      </main>
    </>
  );
}
// components
// const StartButton = ({ handleClickOnGoBtn }: t_StartButton) => {
//   return (
//     <button
//       style={{ fontSize: "3vw", cursor: "pointer" }}
//       onClick={handleClickOnGoBtn}
//     >
//       Go
//     </button>
//   );
// };
// const ResultContent = ({ message }: t_ResultContent) => {
//   return <h2 style={{ marginBottom: "48px" }}>{message}</h2>;
// };
// const ProgressBar = ({ reference }: t_ProgressBar) => {
//   return (
//     <div
//       style={{
//         width: "30vw",
//         background: "white",
//         height: "34px",
//         borderRadius: "12px",
//         marginBottom: "48px",
//         position: "relative",
//         overflow: "hidden",
//       }}
//     >
//       <div
//         style={{
//           height: "100%",
//           position: "absolute",
//           top: "0",
//           left: "0",
//           background: "#0f3782",
//         }}
//         ref={reference}
//       ></div>
//     </div>
//   );
// };
