import Link from "next/link";
import useDimensions from "../../../hooks/use-dimensions";
import styles from "./yip.module.css";
import YipTabs from "./YipTabs";

const YipDifferent = () => {
  const { width } = useDimensions();
  const data = [
    {
      heading: "Find in your Area",
      text: <p> The first step is to enter your zip code on Yourinternetprovider.com to see the list of internet providers available in your area. Once you enter your zip code, you'll be see the lists all the internet providers and available in your area.</p>,
    },
    {
      heading: "Calculate Speed",
      text: <p>A special feature offered by Yourinternetprovider.com is its ability to compute and present the required  internet speed options based on the user's input about the number and kind of devices. The user can choose the bundles they require because to this functionality.</p>,
    },
    {
      heading: "Compare",
      text: <p>This phase displays three internet speed suggestions based on the user's chosen devices. Minimum option shows the internet speed if the usage is very basic i.e. personal use on phone or laptop (less video streaming). The second option (Average) is for customers who stream and download videos frequently. For those that require high speed internet for gaming, live streaming, etc., the third option (Maximum) is available.</p>,
    },
    {
      heading: "Order",
      text: <p>Ordering services is easy! You can simply call us at (855) 862-7178, and our highly trained customer service representatives will guide you through the process. We understand that navigating the world of telecom can be overwhelming, so we are here to help you find the perfect internet service provider to meet your unique needs.</p>,
    },
  ];
  return (
    <div className={styles.yip_Sec}>
      <div className={styles.yip_row}>
        <div className={styles.yip_col}>
          <div className={styles.yip_col__inner}>
            <h2 className="heading__primary">What makes Y/IP different?</h2>
            <p className="para__primary">
              Y/IP examines your pain-points, your struggles, your efforts to
              find the perfect service providers, and gives you a data-driven
              answer through its state-of-the-art platform. By simply entering
              your zip code in its advanced search engine, you can see a
              comprehensive list of all big & small internet, TV and{" "}
              phone providers in your area
              . The data is always kept up to speed, meaning you can’t miss out
              on anything at all.
              <br />
            </p>
            <p className="para__primary">So, what can you get out of Y/IP</p>
            <h4
              className="heading__primary"
              style={{ display: width < 600 ? "block" : "none" }}
            >
              What can you get out of Y/IP?
            </h4>
            <ul>
              <li className="para__primary">Simple and easy search</li>
              <li className="para__primary">
                Discover the top providers in your area
              </li>
              <li className="para__primary">
                Compare prices, speeds, channels and more
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.yip_col_right}>
          <YipTabs data={data} />
        </div>
      </div>
    </div>
  );
};

export default YipDifferent;
