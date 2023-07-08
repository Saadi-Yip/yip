import Img from "../../utils/image/Img";
import style from "./Atwrapper.module.css";

const Atwrapper = () => {
  return (
    <div
      className={style.wrapper}
        style={{
        backgroundImage:`url(${process.env.NEXT_PUBLIC_IMAGES_URL}att_wrapper.WebP)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className={style.discription}>
        <h2>
          AT&T Wireless provides high-speed data with 5G capabilities at no
          additional charge.
        </h2>
        <p>
          What will you get out of subscribing to AT&T’s amazing wireless
          packages?
        </p>
      </div>
      <div className={style.wrapper_area}>
        <div className={style.main_img}>
          <Img
          src={`${process.env.NEXT_PUBLIC_IMAGES_URL}/internet-at.WebP`}
          alt="internet service provider" 
          sizes={{
            default: [50,40],
            mobile: [90.4,71],
          }}
          />
        </div>
        <div className={style.main_text}>
          <ul className={style.under_list}>
            <li className={style.item_list}>
              <h5>
                AT&T Wireless offers a variety of wireless plans to fit
                different budgets and data usage needs, including unlimited data
                plans and plans with limited data options.
              </h5>
            </li>
            <li className={style.item_list}>
              <h5>
                Customers can choose from a wide selection of the latest
                smartphones and devices, including Apple iPhone, Samsung Galaxy,
                and other popular brands.
              </h5>
            </li>
            <li className={style.item_list}>
              <h5>
                AT&T Wireless offers a range of value-added services, including
                mobile hotspot data, unlimited talk and text, and access to
                exclusive entertainment content.
              </h5>
            </li>
            <li className={style.item_list}>
              <h5>
                Customers can take advantage of flexible payment options,
                including device financing and trade-in programs, to make
                upgrading to the latest devices more affordable.
              </h5>
              <p>
                *Req’s AT&T Unlimited Starter. Includes 25% wireless disc. Req’s
                autopay and paperless bill. Taxes and fees extra.
              </p>
            </li>
          </ul>
          {/* <h2>AT&T Unlimited Your Way ℠</h2> */}
          <p>Starting at</p>
          <div className={style.price3}>
            <div className={style.dollars}>
              <h4>$35</h4>
              <h5>/mo. </h5>
              <div className={style.taxes}>
                <h6>plus taxes</h6>
              </div>
            </div>
          </div>
          <div className={style.pakage}>
            <p>
              AT&T offers the Unlimited Starter® plan, which includes autopay
              and paperless billing. Please note that taxes and fees are not
              included in the price. If the network is experiencing high demand,
              data speeds may be temporarily reduced. The price displayed takes
              into account all available discounts, which will be applied within
              the first two billing cycles. To access the AT&T 5G network and
              ActiveArmor app, you must have a compatible device. Please note
              that some mobile security features may not be available while
              roaming internationally. 5G service may not be available in all
              areas. For more information about coverage, please visit
              att.com/5Gforyou. Video quality may be limited to standard
              definition. A credit card may be required, except in
              Massachusetts, Pennsylvania, and North Dakota.
            </p>
          </div>
          {/* <h3>Find out more about<a href='AT&T wireless'>AT&T wireless</a>  plans and prices here.</h3> */}
        </div>
      </div>
    </div>
  );
};

export default Atwrapper;
