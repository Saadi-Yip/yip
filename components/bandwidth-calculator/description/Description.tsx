import BandwidthToolsText from "./BandwidthToolsText";
import styles from "./description.module.css";
import HowWorks from "./HowWorks";
import Img from "../../utils/image/Img";

type Feature = {
  icon: string;
  iconSize?: string;
  heading: string;
  text: string;
};
type t_Features = {
  content: Feature[];
};

const Description = () => {
  const features = [
    {
      icon: `${process.env.NEXT_PUBLIC_IMAGES_URL}/svg/devices.svg`,
      heading: "Enter Number of Devices",
      text: "The following step involves entering your zip code to obtain a comprehensive list of local internet service providers. Once you have entered your zip code, the tool will present you with all the available internet service providers and plans in your region for you to review and select from.",
      iconSize: "8vw",
    },
    {
      icon: `${process.env.NEXT_PUBLIC_IMAGES_URL}/svg/area.svg`,
      heading: "Enter Area Code",
      text: "To get accurate results, input the total number of internet-connected devices at your home or workplace our tool will analyze the speed requirements of each device and provide precise results accordingly.",
    },
    {
      icon: `${process.env.NEXT_PUBLIC_IMAGES_URL}svg/compare.svg`,
      heading: "Compare",
      text: "This phase displays three internet speed suggestions based on the user's chosen devices. Minimum option shows the internet speed if the usage is very basic i.e. personal use on phone or laptop (less video streaming). The second option (Average) is for customers who stream and download videos frequently. For those that require high speed internet for gaming, live streaming, etc., the third option (Maximum) is available.",
      iconSize: "8vw",
    },
    {
      icon: `${process.env.NEXT_PUBLIC_IMAGES_URL}svg/order.svg`,
      heading: "Order",
      text: "Ordering services is easy! You can simply call us at (855) 862-7178, and our highly trained customer service representatives will guide you through the process. We understand that navigating the world of telecom can be overwhelming, so we're here to help you find the perfect internet service provider to meet your unique needs.",
    },
  ];
  if(null){
    
  }
  return (
    <section className={styles.description_section}>
      {null ? "" :""}
      <div className={styles.container}>
        <HowWorks mobileData={features} />
        <div className="main_text">
          <div className={styles.tools_left}>
            <span>
              <Img
                src={`${process.env.NEXT_PUBLIC_IMAGES_URL}svg/angle.svg`}
                alt="Internet service provider"
                sizes={{
                  default: [0,0],
                  mobile: [0,0],
                }}
              />
            </span>
            <BandwidthToolsText text="YourInternetProvider Bandwidth Calculator Tool" />
          </div>

          <div className={styles.content}>
            {/* <Features content={features} /> */}
            <TrustPoints />
          </div>
        </div>
      </div>
    </section>
  );
};

// const Features = ({ content }: t_Features) => {
//   return (
//     <ul className={styles.features}>
//       {content.map((f: Feature, i: number) => (
//         <li key={i.toString()}>
//           <div className={styles.image}>
//             <img
//               src={f.icon}
//               alt={f.heading}
//               style={{ width: f.iconSize ? f.iconSize : "5.99vw" }}
//             />
//           </div>
//           <div style={{ flexBasis: " 84%", marginLeft: "3%" }}>
//             <h3>{f.heading}</h3>
//             <p>{f.text}</p>
//           </div>
//         </li>
//       ))}
//     </ul>
//   );
// };

export const TrustPoints = () => {
  return (
    <div className={styles.trust_points_container}>
      <div className={styles.main_text}>
        <p>
          Don't settle for a sluggish internet connection when you can have
          lightning-fast speeds. The key to unlocking maximum speed is through
          your bandwidth. However, determining the optimal bandwidth for your
          household can be overwhelming, especially if you're unsure how much
          bandwidth you need. That's where Yourinternetprovider's one-of-a-kind
          bandwidth calculator comes in.
        </p>
        <ul>
          <li>
            Our innovative bandwidth calculator is a free tool that accurately
            estimates the amount of bandwidth you need based on the number of
            devices and online activities in your household. No more overpaying
            for excessive bandwidth or experiencing frustrating slow speeds due
            to insufficient bandwidth. With our bandwidth calculator, you can
            make informed decisions about your internet service and elevate your
            online experience.
          </li>
          <li>
            At Yourinternetprovider, we believe that everyone should have access
            to fast, reliable, and affordable internet. That's why our bandwidth
            calculator is just one of the many ways we strive to make that a
            reality for our customers. We're committed to empowering you with
            the tools you need to stay connected and enjoy a seamless internet
            experience.
          </li>
          <li>
            Not only do we offer a revolutionary bandwidth calculator, but we
            also provide a range of internet plans that cater to every
            household. Whether you're a casual internet user or a hardcore
            online gamer, YourInternetProvider has a plan that fits your needs
            and budget. Our commitment to providing high-quality internet
            service and exceptional customer support is unwavering. We
            understand that staying connected is essential, which is why our
            affordable internet plans and bandwidth calculator are designed to
            help you enjoy the full benefits of the internet.
          </li>
        </ul>
      </div>
      <div className={styles.main_text_inner}>
        <h4>
          By using our High-tech bandwidth calculator, you can enjoy several
          benefits, including
        </h4>
        <ul>
          <li>
            <span>Cost Savings:</span> BDon't waste your hard-earned cash on
            expensive internet plans with high speeds and data limits you don't
            need. With YourInternetProvider, you can save money and choose the
            perfect internet plan that caters to your specific usage habits.
          </li>
          <li>
            <span>Improved Performance:</span> Don't settle for sluggish
            internet speeds and frustrating buffering times. With
            YourInternetProvider, you can experience lightning-fast download and
            upload speeds, reduced buffering times, and smooth streaming that
            takes your online experience to the next level.
          </li>
          <li>
            <span>Personalization:</span> At YourInternetProvider, we understand
            that each customer has unique internet usage habits. Our
            cutting-edge bandwidth calculator provides personalized
            recommendations based on your individual needs and habits, so you
            receive a tailored internet plan that meets your requirements.
          </li>
          <li>
            <span>Convenience</span> With our innovative bandwidth calculator,
            you can eliminate the guesswork that comes with choosing an internet
            plan. Rather than wasting time and effort trying to figure out which
            plan is right for you, our tool provides quick and easy results.
            Enjoy the convenience of hassle-free internet service with
            YourInternetProvider.
          </li>
        </ul>
      </div>

      <div className={styles.main_text_inner}>
        <h4>Why Choose Y/IP?</h4>
        <p>
          Yourinternetprovider.com is the go-to destination for finding and
          comparing cable, internet, and phone services from the top providers
          in your area.
        </p>
        <p>Here's why you can trust Yourinternetprovider.com:</p>
        <ul>
          <li>
            <span>Extensive Provider Network:</span>
            We partner with the nation's top cable, internet, and phone
            providers, giving you access to a broad range of options to choose
            from.
          </li>
          <li>
            <span>Transparent Pricing:</span> Our platform lets you compare
            prices and plans from multiple providers side-by-side, ensuring you
            get the best deal possible. Plus, we guarantee no hidden fees or
            surprises on your bill.
          </li>
          <li>
            <span>Expert Customer Service:</span> Our team of dedicated customer
            service representatives is always ready to answer your questions and
            help you choose the perfect package to fit your needs.
          </li>
          <li>
            <span>Easy-to-Use Platform:</span> The Yourinternetprovider.com
            website is intuitive and user-friendly, letting you quickly and
            easily compare plans, prices, and features.
          </li>
          <li>
            <span>Satisfaction Guarantee:</span> We stand behind our service and
            offer a satisfaction guarantee, so you can have confidence in your
            chosen provider and plan. In summary, Yourinternetprovider.com
            provides a seamless and convenient way to find the best cable,
            internet, and phone deals in your area.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Description;
