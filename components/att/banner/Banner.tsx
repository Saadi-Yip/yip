import React from "react";
import style from "./banner.module.css";
import Link from "next/link";

const Banner = () => {
  return (
    <div
      className={style.section_main}
      style={{
        backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGES_URL}att_banner.WebP)`,
      }}
    >
      <div className={style.banner_text}>
        <h1>AT&T services enhance your overall experience.</h1>
        <p>
          AT&T's comprehensive plans offer the perfect internet service for you
          to acquire.
        </p>
        <ul className={style.list}>
          <li className={style.list_item}>
            <h3>AT&T offers equal upload and download speeds</h3>
            <p>
              (which represent the maximum network service capability speeds
              based on a wired connection to the gateway. However, the actual
              speeds that customers may experience can vary due to various
              factors, and are not guaranteed. More information can be found at
              www.att.com/speed101. It's important to note that 1 GIG speeds are
              only available to new customers with the latest router ("BGW320")
              and recommended setup. )
            </p>
          </li>
          <li className={style.list_item}>
            <h3>Unlimited internet data plans</h3>
            <p>
              AT&T allow customers to browse, stream, and download without
              worrying about data caps or limits.
            </p>
          </li>
          <li className={style.list_item}>
            <h3>
              AT&T provides upload speeds that are 15 times faster than those
              provided by cable internet.
            </h3>
            <p>
              (Internet 300's wired upload connection speed is being compared to
              Xfinity, Spectrum, and Cox's plans that offer 300MB, 400MB, and
              500MB download speeds and 10MB and 20MB upload speeds.)
            </p>
          </li>
        </ul>

        <div className={style.text_fibernet}>
          <h3>Fiber Internet</h3>
          <div className={style.price}>
            <div className={style.dollar}>
              <h4>$55</h4>
              <h5>/mo. </h5>
              <div className={style.tax}>
                <h6>plus taxes</h6>
              </div>
            </div>
          </div>
        </div>
        <div className={style.internet_term}>
          <small>
            Autopay and paperless billing is req’d.*
            <br />
            Fiber services are only available in select areas. To check
            eligibility, please call or visit att.com/getfiber. *<br />
            The price of the service will be reduced by $5 per month after
            enrolling in both Autopay and Paperless billing (within two billing
            cycles). A monthly State Cost Recovery Charge in TX, OH, NV will
            also apply. Additionally, one-time installation charges may apply.
            <Link href="/att">
               See details
            </Link>
          </small>
        </div>
        <div className={style.tag}>
          <a href="tel:+1888-262-0945">855-644-1024</a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
