import Link from "next/link";
import ProviderFeatures from "./ProviderFeatures";
import styles from "./providerFeatures.module.css";
const ProviderFeatureBox = () => {
  const data = [
    {
      id: "internetServiceProviders",
      type: `${process.env.NEXT_PUBLIC_IMAGES_URL}radioSignal.webp`,
      heading: "Internet Service Providers",
      paragraph: (
        <p>
          If you're looking for high speed{" "}
          internet services
          , YourInternetProvider has you covered. As one of the top{" "}
          internet service providers
          in the market, YourInternetProvider offers reliable and fast internet
          connectivity to ensure a seamless browsing and streaming experience.
          With various internet plans, you can select the one that best suits
          your needs and budget. You can also enjoy additional benefits such as
          free installation and a dedicated customer support team to assist you
          whenever needed. Choose YourInternetProvider today and experience
          lightning-fast{" "}
          internet services
          that cater to all your needs.
        </p>
      ),
    },
    {
      id: "cableServiceProviders",
      type: `${process.env.NEXT_PUBLIC_IMAGES_URL}tvSignal.webp`,
      heading: "Cable Service Providers",
      paragraph: (
        <p>
          YourInternetProvider is one of the top cable service providers in the market, offering access to various TV channels and
          entertainment options. With YourInternetProvider cable services , you
          can enjoy crystal-clear picture quality and a variety of programming
          options that cater to your interests. You can choose from various
          packages offering different channels and features, ensuring you get
          the most value. Whether you're a sports fan, a movie buff, or just
          looking for family-friendly programming, YourInternetProvider cable
          services have you covered.
        </p>
      ),
    },
    {
      id: "wirelessInternetService",
      type: `${process.env.NEXT_PUBLIC_IMAGES_URL}modem.webp`,
      heading: "Wireless Internet Service",
      paragraph:
        <p>YourInternetProvider is one of the country's top wireless internet service providers , offering reliable and high speed internet connectivity without the need for cables or wires. Our wireless internet services allow you to enjoy seamless browsing and streaming experiences. We offer various wireless internet plans that cater to different needs and budgets. Our dedicated customer support team can always assist you with queries or issues. Choose YourInternetProvider today and experience the freedom of wireless internet services.</p>,
    },
    {
      id: "highSpeedBusinessInternet",
      type: `${process.env.NEXT_PUBLIC_IMAGES_URL}webWWW.webp`,
      heading: "High-Speed Business Internet",
      paragraph:
        <p>As a business owner, you understand the importance of having a reliable internet connection. YourInternetProvider offers high-speed business internet services that can support your company's needs as one of the market's leading  business internet service providers. With various business internet plans, you can select the one that suits your business requirements and budget.Our internet services offer fast and reliable connectivity, ensuring you can efficiently run your business without disruptions. We also offer additional benefits, such as free installation and a dedicated customer support team to assist you whenever needed. Choose YourInternetProvider today and experience fast and reliable business internet services that cater to all your needs. Contact us now to learn more about our internet service providers and find the perfect plan for you.</p>,
    },
  ];
  return (
    <>
      <div className={styles.InternetFeaturesBox}>
        <div className={styles.InternetFeaturesBox_inner}>
          {data.map((provider, i) => {
            return (
              <ProviderFeatures
                key={i.toString()}
                id={provider.id}
                heading={provider.heading}
                paragraph={provider.paragraph}
                type={provider.type}
                dark={true}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProviderFeatureBox;
