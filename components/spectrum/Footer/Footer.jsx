import React from "react";
import OfferDetail from "../Offerdetail/OfferDetail";
import styles from "../Footer/Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.text_portion}>
          <p>740 W LITTLE YORK RD SUITE B HOUSTON, TX 77091, <br/>USA</p>
        </div>
        <div className={styles.image_portion}>
          <img src={`${process.env.NEXT_PUBLIC_IMAGES_URL}logo.svg`} alt="Internet service provider" />
        </div>
      </div>
      <div className={styles.All_text}>
        <OfferDetail text="Offer Details" para="">
          <p>
          Limited time offer; subject to change; valid to qualified residential customers who have notsubscribed to any services within the previous 30 days and have no outstanding obligations to Charter.
          All services provided are subject to their respective terms and conditions, which are subject to change without prior notice.Services not available in all areas. Restrictions apply. INTERNET & ADVANCED WIFI: Standard rates for Internet andAdvanced WiFi apply after yr 1. Please note that standard rates will be applicable for Internet, WiFi, and Mobile services if the Mobile line remains inactive for more than 30 days and isn't utilized during the promotional period. Equipment fees and additional services are not included in the promotion and will be charged separately. Furthermore, installation and other supplementary services may also incur additional costs.99.9% reliability based on Spectrum network availability; excludesoutages caused by external events.  See <a href="#">spectrum.com/reliability</a> for
            details. Speed based on wiredconnection. Available Internet speeds may vary by address.SPECTRUM MOBILE services are not yet accessible in all locations.Spectrum Internet and Auto Pay required. Other restrictions apply. Other restrictions
            apply. Visit <a href="#">spectrum.com/mobile/plans</a> for details.
            UNLIMITED: Standard rates apply after yr 1. Smartwatch doesnot qualify as a line.After 20GB of consumption per line, data speeds may be slowed down to guarantee a consistent internet experience for all customers.Consumers who choose the Mobile Unlimited Plus subscriptionwill be required to pay an additional monthly fee of $10 for this service.Smartwatch does not qualify as a line.To ensure a fair internet experience for all users, data speeds may be reduced after 30GB of usage per line. To access 5G services, customers must have a 5G compatible phone and an active 5G service. Not all 5G-enabled smartphones work with all 5G services.Speeds may vary. Visit <a href="#">spectrum.com/mobile/5g</a> for
            details.If you're a new customer and looking to add lines, or if you're an existing mobile customer planning to add Unlimited lines to your current service, then you're eligible for this offer. The Unlimited plan may result in reduced data speeds after 20GB of usage per line. However, with the Unlimited Plus plan, data speeds may be reduced only after 30GB of usage per line. Visit
            <a href="#">spectrum.com/mobile/plans</a> for details.
          </p>
        </OfferDetail>
        <OfferDetail text="Performance Details" para="">
          <p>
          Speed based on wired connection. Available Internet speeds may vary by address. Gig capable modem required for Gig speed. For a list of Gig capable modems, visit <a href="#">spectrum.net/modem</a>
          </p>
        </OfferDetail>
        <OfferDetail text="Restrictions apply" para="">
          <p>
          Service not available in all areas. To activate each line, Spectrum Internet and Auto Pay are mandatory, and an activation fee will be charged accordingly.Other restrictions apply. 
            Visit<a href="#">spectrum.com/mobile/plans </a> for details.
          </p>
        </OfferDetail>

        <OfferDetail text="#1 Service Claim" para="">
          <p>
          Leading claimbased on Internet subscribers among top Internet Service Providers. 
          </p>
        </OfferDetail>

        <OfferDetail para="">
          <p>Copyright © 2021 - 2022. Charter Communications</p>
        </OfferDetail>
      </div>
    </div>
  );
}

export default Footer;
