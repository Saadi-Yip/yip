import { useState, useRef } from "react";

// components
import StartButton from "./StartButton";
import Meter from "./Meter";

import { downladTests, uploadTests } from "../../../utils/internet-speed-test";
import getImageFile from "../../../utils/get-imagefile";

import styles from "./tester.module.css";
import ComparisonChart from "./ComparisonChart";
import QnA from "../../global/QnA/QnA";
import Link from "next/link";

const imagesURL = process.env.NEXT_PUBLIC_TEST_IMAGES
  ? JSON.parse(process.env.NEXT_PUBLIC_TEST_IMAGES)
  : [];
// const imgUploadURL = `https://backend-yip.cyclic.app/upload`;

// Types
type t_ProgressBarReference = HTMLDivElement;
export type t_animationProperties = {
  overlay: number[];
  niddle: number[];
  repeat: number;
};

// handlers
type t_progressBar = (progress: number) => void;
export type t_handleClickDownloadStartBtn = () => void;

const SpeedTester = () => {
  const [isStart, setIsStart] = useState(false);
  const downloadProgreeBarRef = useRef<t_ProgressBarReference>(null);
  const [animationProperties, setAnimationProperties] = useState({
    overlay: [10, 14, 18, 12, 20, 15, 16, 8, 18],
    niddle: [10, 14, 18, 12, 20, 15, 16, 8, 18],
    repeat: Infinity,
  });

  const [downloadSpeed, setDownloadSpeed] = useState<number | undefined>();
  const dataProvider = [
    {
      heading: "Why is my internet connection slow?",
      text: (
        <div>
          <p>
            There could be several reasons for slow internet speeds, including
            network congestion, interference from other devices, outdated
            equipment, or issues with your internet service provider (ISP).
            Troubleshooting steps could include:
          </p>
          <ul>
            <li>Resetting your modem and router.</li>
            <li>Checking for software updates.</li>
            <li>Optimizing your Wi-Fi signal.</li>
            <li>Contacting your ISP for assistance.</li>
          </ul>
        </div>
      ),
    },
    {
      heading: "Why does my internet keep disconnecting?",
      text: (
        <div>
          <p>
            Various factors, such as signal interference, outdated modem or
            router firmware, or issues with your ISP (Internet Service
            Provider), can cause frequent internet disconnects. Troubleshooting
            steps could include:
          </p>
          <ul>
            <li>Checking for loose cables.</li>
            <li>Restarting your modem and router.</li>
            <li>Updating firmware. </li>
            <li>Contacting your ISP for further assistance.</li>
          </ul>
        </div>
      ),
    },
    {
      heading: "Why am I experiencing Wi-Fi signal issues?",
      text: (
        <div>
          <p>
            Wi-Fi signal issues can occur due to interference from other
            devices, distance from the router, physical obstacles, or outdated
            equipment. Troubleshooting steps could include:
          </p>
          <ul>
            <li>Repositioning your router.</li>
            <li>Minimizing interference from other devices.</li>
            <li>Using a Wi-Fi extender. </li>
            <li>Upgrading to a newer router with improved coverage.</li>
          </ul>
        </div>
      ),
    },
    {
      heading: "How do I test my internet speed?",
      text: (
        <div>
          <p>
            You can test your internet speed using{" "}
            <strong>online speed testing tools</strong>
            offered by various websites or through dedicated{" "}
            <strong>speed testing apps</strong>. Simply connect your device to
            your internet network and follow the instructions on the speed
            testing tool to measure your internet speed.
          </p>
        </div>
      ),
    },
    {
      heading: "Why is my internet not working after a power outage?",
      text: (
        <div>
          <p>
            Power outages can disrupt your internet connection if the modem,
            router, or other networking equipment loses power. Troubleshooting
            steps could include:
          </p>
          <ul>
            <li>Checking power connections.</li>
            <li>Resetting your modem and router.</li>
            <li>Contact your ISP if the issue persists. </li>
          </ul>
        </div>
      ),
    },
    {
      heading:
        "Why is my internet connection dropping during online gaming or video streaming?",
      text: (
        <div>
          <p>
            Online <strong>gaming</strong> and <strong>video streaming</strong>{" "}
            require stable and <strong>fast internet connections</strong>. If
            you're experiencing drops in your internet connection during these
            activities, it could be due to{" "}
            <strong>issues with network congestion</strong>, signal
            interference, or{" "}
            <Link
              href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/bandwidth-calculator-tool`}
            >
              bandwidth
            </Link>{" "}
            limitations. Troubleshooting steps could include:
          </p>
          <ul>
            <li>Optimizing your router settings.</li>
            <li>Prioritizing gaming or streaming traffic.</li>
            <li>
              Upgrading to a <strong>higher-speed internet plan</strong>.{" "}
            </li>
          </ul>
        </div>
      ),
    },
    {
      heading: "How do I troubleshoot my modem or router?",
      text: (
        <div>
          <p>
            Troubleshooting steps for modems and routers may include power
            cycling (restarting) the devices, checking for firmware updates,
            ensuring proper connections, and <strong>resetting</strong> to
            factory settings if necessary. It's recommended to consult the user
            manual or contact the manufacturer for specific{" "}
            <strong>instructions</strong> on <strong>troubleshooting</strong>{" "}
            your modem or <strong>router</strong>.
          </p>
        </div>
      ),
    },
    {
      heading:
        "What should I do if I've tried troubleshooting steps but my internet is still not working?",
      text: (
        <div>
          <p>
            If you've attempted troubleshooting steps, but your internet is
            still not working, contacting your ISP for further assistance is
            recommended. They may be able to diagnose and resolve issues related
            to your internet service or provide guidance on the next steps.
          </p>
        </div>
      ),
    },
  ];
  // const uploadProgressBarRef = useRef<t_ProgressBarReference>(null);
  // const [uploadSpeed, setUploadSpeed] = useState<number | undefined>();
  // const [image, setImage] = useState<any>("");

  // handler

  // Download
  const handleClickDownloadStartBtn: t_handleClickDownloadStartBtn = () => {
    setAnimationProperties({
      overlay: [10, 14, 18, 12, 20, 15, 16, 8, 18],
      niddle: [10, 14, 18, 12, 20, 15, 16, 8, 18],
      repeat: Infinity,
    });
    setDownloadSpeed(undefined);
    downladTests(imagesURL, () => {}, updateMeter).then((speed: number) => {
      setDownloadSpeed(Number(speed.toFixed(2)));
      setIsStart(false);
      setAnimationProperties({ overlay: [], niddle: [], repeat: 1 });
    });
  };
  // const updateDownloadProgressBar: t_updateDownloadProgressBar = (
  //   progress
  // ) => {};
  // const updateUploadProgressBar: t_updateUploadProgressBar = (progress) => {
  //   if (uploadProgressBarRef.current) {
  //     uploadProgressBarRef.current.style.width = progress + "%";
  //   }
  // };
  // Upload
  // const handleClickUploadStartBtn: t_handleClickUploadStartBtn = async () => {
  //   // reset old results
  //   if (uploadSpeed) setUploadSpeed(undefined);

  //   const root = "/test/";
  //   const imagesURL = ["5_mb.jpg", "6mb_img.jpg"];

  //   const images = await Promise.all(
  //     imagesURL.map((url: string) => getImageFile(root + url))
  //   );

  //   const avgSpeed = await uploadTests(images, updateUploadProgressBar);

  //   setUploadSpeed(avgSpeed);
  // };
  const updateMeter = (downloadSpeed: number) => {
    if (downloadProgreeBarRef.current) {
      const targetEle = downloadProgreeBarRef.current;
      if (targetEle) {
        const overlay = targetEle.querySelector("#overlay");
        const niddle = targetEle.querySelector("#niddle");
        const heading = targetEle.querySelector("#heading");
        let rotationRatio;

        switch (true) {
          case downloadSpeed === 50:
            rotationRatio = -2;
            break;
          case downloadSpeed > 90:
            rotationRatio = -4;
            break;
          case downloadSpeed > 50:
            rotationRatio = -3;
            break;
          default:
            rotationRatio = 2;
            break;
        }

        const overlayRotation = rotationRatio + downloadSpeed * 1.8;
        const niddleRotation = (90 - downloadSpeed) * 1.8;

        if (heading) {
          heading.innerHTML = downloadSpeed.toFixed(2);
        }

        if (overlay)
          if (niddle)
            // @ts-ignore
            niddle.style.rotate = niddleRotation + "deg";

        setAnimationProperties({
          ...animationProperties,
          overlay: [
            overlayRotation - 2,
            overlayRotation - 5,
            overlayRotation + 3,
            overlayRotation - 4,
          ],
          niddle: [
            niddleRotation - 2,
            niddleRotation - 5,
            niddleRotation + 3,
            niddleRotation - 4,
          ],
        });
      }
    }
  };
  return (
    <>
      <section className={styles.section}>
        <div className="container">
          <div className={styles.main_text}>
            <h1 className="heading__main"> Check your Internet Speed </h1>
            <StartButton
              handleClick={() => setIsStart(true)}
              isStart={isStart}
            />
            {downloadSpeed && !isStart && (
              <div className={styles.download}>
                <div>
                  <img src="/download.svg" />
                  <h3>Download </h3>
                  <span>Mbps</span>
                </div>
                <span className={styles.speed}>{downloadSpeed} </span>
              </div>
            )}
            <Meter
              reference={downloadProgreeBarRef}
              handleClickDownloadStartBtn={handleClickDownloadStartBtn}
              isStart={isStart}
              setIsStart={setIsStart}
              animationProperties={animationProperties}
              downloadSpeed={downloadSpeed}
            />
            {/* {downloadSpeed && (
            <button
              onClick={() => {
                setIsStart(true);
                setIsStart(true);
                setDownloadSpeed(undefined);
              }}
              className={styles.start_btn}
            >
              GO
            </button>
          
          )} */}
          </div>
        </div>
      </section>
      <ComparisonChart />
      <QnA
        data={dataProvider}
        description={
          <p>
            Curious about how fast your internet is? Our{" "}
            <strong>free internet speed testing tool</strong> is here to help!
            With just a few clicks, you can quickly and accurately measure your
            internet speed and gain insights into your performance. Our tool is
            designed to be user-friendly and provides reliable results, so you
            can trust the data to reflect your internet connection speed. You'll
            have a complete picture of your internet performance with a
            comprehensive analysis of download and upload speeds, latency, and
            other key metrics. Not only does our tool help you assess the
            quality of your current internet service, but it also allows you to
            compare your results with national averages and other providers in
            your area. This can help you make informed decisions about your
            internet service and ensure you get the best possible speeds for
            your needs.
            <br />
            Best of all, our internet speed testing tool is free to use! Test
            your internet speed today with confidence and gain insights into
            your internet connection like never before. Try it now and
            experience the convenience and accuracy of our free{" "}
            <strong>internet speed testing</strong> tool!
          </p>
        }
        aboutHeading={
          <h2>
            Internet Speed Testing Tool:
            <br /> Measure Your Internet Speed with Confidence!
          </h2>
        }
        faqsDescirpion="If you're facing issues with your internet connection, you may have questions on how to troubleshoot and resolve them. We've compiled a list of frequently asked questions (FAQs) related to internet troubleshooting to provide answers and guidance on resolving common internet issues."
      />
    </>
  );
};

export default SpeedTester;
