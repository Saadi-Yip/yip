import styles from "./introductioService.module.css";


const IntroductionService = () => {
  return (
    <section className={styles.intoduction_bg}>
      <div className={styles.intoduction_row}>
        <div className={styles.intoduction}>
          <h2 className="heading__primary">
            Connecting You to the World: <br /> An Introduction to Internet Services
          </h2>
          <ul>
            <li>
              <a href="#internetServiceProviders" className="color__primary heading__secondary">
                Internet Service Providers
              </a>
            </li>
            <li>
              <a href="#cableServiceProviders" className="color__primary heading__secondary">
                Cable Service Providers
              </a>
            </li>
            <li>
              <a href="#wirelessInternetService" className="color__primary heading__secondary">
                Wireless Internet Service
              </a>
            </li>
            <li>
              <a href="#highSpeedBusinessInternet" className="color__primary heading__secondary">
                High-Speed Business Internet
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.intoduction_text}>
          <p className="para__primary">
            The United States is one of the world's largest consumers and
            providers of internet services, with a robust and rapidly evolving
            market. The country has a highly developed internet services
            infrastructure, including wired and wireless technologies. According
            to recent studies, over 90% of the US population has access to
            broadband internet services, with an average download speed of
            around 140 Mbps.
          </p>
          <p className="para__primary">
            Many internet services are available in the US, including DSL,
            cable, fiber-optic, and satellite internet. Each type of internet
            service has advantages and limitations, and the availability and
            quality of these services can vary by region.
          </p>
          <p className="para__primary">
            The demand for high-speed internet services has been steadily
            increasing, especially with the rise of remote work and online
            learning. As a result, internet service providers are continuously
            working to improve their services and expand their coverage to meet
            the growing demand. With so many options available, consumers in the
            US have the flexibility to choose the internet service provider and
            plan that best fits their needs and budget.
          </p>
        </div>
      </div>

    </section>
  );
};

export default IntroductionService;
