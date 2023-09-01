import BandwidthToolsText from "../components/bandwidth-calculator/description/BandwidthToolsText";
import policy from "../data/privacyPolicy.json";
import Head from "next/head";
const PrivacyPolicy = () => {
  return (
    <>
     <Head>
        <title>
          YIP | Privacy Policy
        </title>
        <meta name="robots" content="index,follow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <section className="privacy_policy_sec">
      <div style={{boxShadow: "0px 8px 20px #8080807a"}}>
      <BandwidthToolsText text="Privacy Policy" />
        <div className="privacy-text">
          <p>
            {policy.policies.primary_text}
          </p>
          <div className="privacy-para">
            <h6>{policy.policies.info_collect}</h6>
            <p>
              {policy.policies.info_para}
            </p>
            <p>
              {policy.policies.primary_text}
            </p>
          </div>
          <div className="privacy-para">
            <h6>{policy.policies.info_gather}</h6>
            <p>
              {policy.policies.info_gather_para}
            </p>
            <ul>
              <li>
                <span>{policy.policies.personal_info}</span>
                {policy.policies["personal_infoPara:"]}
              </li>
              <li>
                <span>{policy.policies.Usage_Information}</span>
                {policy.policies["Usage-Info_para"]}
              </li>
              <li>
                <span>{policy.policies.network_info}</span>
                {policy.policies.network_info_para}
              </li>
            </ul>
          </div>
          <div className="privacy-para">
            <h6>{policy.policies.use_info}</h6>
            <p>
              {policy.policies.info_type}
            </p>
            <ul>
              <li>
                <span>{policy.policies.our_Service}</span>
                {policy.policies.our_service_para}
              </li>
              <li>
                <span>{policy.policies["Improve-services"]}</span>
                {policy.policies.improve_para}
              </li>
              <li>
                <span>{policy.policies["obligations:"]}</span>
                {policy.policies.obligations_para}
              </li>
              <li>
                <span>{policy.policies.customize}</span>
                  {policy.policies.customize_para}
              </li>
            </ul>
          </div>

          <div className="privacy-para">
            <h6>{policy.policies.share}</h6>
            <p>
             {policy.policies.share_info}
            </p>
          </div>

          <div className="privacy-para">
            <h6>{policy.policies.data_security}</h6>
            <p>
              {policy.policies.security}
            </p>
          </div>

          <div className="privacy-para">
            <h6>{policy.policies.cookies_heading}</h6>
            <p>
              {policy.policies.cookies_paragraph}
            </p>
          </div>

          <div className="privacy-para">
            <h6>{policy.policies.choice}</h6>
            <p>
              {policy.policies["choice-paragraph"]}
            </p>
          </div>

          <div className="privacy-para">
            <h6>{policy.policies.children_privacy}</h6>
            <p>
              {policy.policies.children_privacy_para}
            </p>
          </div>

          <div className="privacy-para">
            <h6>{policy.policies.california_privacy}</h6>
            <p>
              {policy.policies.california_privacy_para}
            </p>
          </div>

          <div className="privacy-para">
            <h6>{policy.policies.contact}</h6>
            <p>
            {policy.policies.contact_us}
            </p>
            <a href="mailto:sales@leilaniinc.com">{policy.policies.email}</a>
            <address>{policy.policies.address}</address>
            <p>
             {policy.policies.response}
            </p>
          </div>
        </div>
      </div>
      
    </section>
      </main>
    </>
   
  );
};

export default PrivacyPolicy;
