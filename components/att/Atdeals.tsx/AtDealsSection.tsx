import React from "react";
import Atdeals from "./Atdeals";
import style from "./atdeal.module.css";


const AtDealsSection = () => {
  const data = [
    {
      heading: "AT&T INTERNET 500Mbps",
      speed: "AT&T offers equal upload and download speeds of 500Mbps.",
      claimspeed:"AT&T's internet speed claims are based on the maximum network service capability speeds and require a wired connection to the gateway. New customers who have the latest router BGW320 and recommended setup can access 1 GIG speeds. However, actual customer speeds may vary depending on several factors and are not guaranteed. To learn more, visit www.att.com/speed101.",
      uploadfast: "AT&T offers upload speeds that are 20 times faster than cable internet.",
      comparisonInternet:
        "The wired upload connection speed for Internet 500 is being compared to Xfinity, Spectrum, and Cox plans that offer 600Mb, 400Mb, and 500MB download speeds and 10MB and 20MB upload speeds.",
      multiplayer: "Ideal for multiplayer gaming.",
      unlimited: "",
      activearmor: "AT&T ActiveArmor SM Internet Security is included.",
      guards:
        "It only guards against known threats and requires a compatible Gateway and Smart Home Manager app. Security features must also be enabled.",
      dollar: "$65",
      mo: "/mo ",
      autopay:
        "Autopay and Paperless Bill are required. Availability is limited to select areas. Please call or visit att.com/getfiber to check eligibility. The price reflected is after a $5 per month discount for Autopay and Paperless Bill, which will be applied within two billing cycles. There is also a monthly State Cost Recovery Charge in TX, OH, NV. Additionally, a one-time installation charge may apply. ",
      seeDetail: "See details",
      order: "Order Now",
    },
    {
      heading: "AT&T INTERNET 1GIG",
      speed: "500Mbps equal upload and download speeds",
      claimspeed:
        "Claims about internet speeds are based on the maximum network service capability and assume a wired connection to the gateway. New customers can access speeds of up to 1 GIG with the latest router (the BGW320) and recommended setup. However, actual customer speeds may vary depending on a variety of factors and are not guaranteed. For additional information, visit www.att.com/speed101.",
      uploadfast: "AT&T offers upload speeds that are 25 times faster than cable internet.",
      comparisonInternet:
        "To compare AT&T Fiber's starting, mid, and high-speed tiers with similar speed tiers offered by Xfinity, Spectrum, and Cox, please visit www.att.com/speed101 for more information.",
      
      activearmor: "AT&T ActiveArmorSM Internet Security is provided as part of the service.",
      guards:
        "AT&T ActiveArmorSM Internet Security protects against known threats only and requires a compatible Gateway and the Smart Home Manager app. Additionally, users must enable the security features.",
      dollar: "$80",
      mo: "/mo ",
      autopay:
        "Autopay and Paperless Bill are required. Availability is limited to select areas. Please call or visit att.com/getfiber to check eligibility. The price reflected is after a $5 per month discount for Autopay and Paperless Bill, which will be applied within two billing cycles. There is also a monthly State Cost Recovery Charge in TX, OH, NV. Additionally, a one-time installation charge may apply ",
      seeDetail: "See details",
      order: "Order Now",
    },
    {
      heading: "AT&T INTERNET 2-Gig",
      speed: "2-Gig equal upload and download speeds",
      claimspeed:
        "Claims about internet speeds reflect the maximum wired network service capability speeds to the home with recommended setup. However, actual customer speeds may vary and are not guaranteed. For 5 Gig Speed, the maximum single device wired speed is 4.7Gbps. For more details, please visit www.att.com/speed101.",
      uploadfast: "Our pricing is straightforward and won't increase after 12 months. Additionally, there's no annual contract required.",
      comparisonInternet:
        "Comparison of Internet 500 wired upload connection speed to Xfinity, Spectrum and Cox 600Mb, 400Mb and 500MB plans with 600Mb, 400Mb and 500MB download and 10MB and 20MB upload",
      // multiplayer: "Perfect for multi-player gaming",
      unlimited: "Unlimited internet data",
      activearmor: "AT&T ActiveArmor SM Internet Security included",
      guards:
        "Guards against known threats only. Compatible Gateway and Smart Home Manager app required; security features must be enabled.",
      dollar: "$110",
      mo: "/mo ",
      autopay:
        "Autopay & Paperless Bill req’d*.Limited availability in select areas. Call or go to att.com/getfiber to ck eligibility.*Price after $5/mo Autopay & Paperless bill discount (w/in 2 bills). Monthly State Cost Recovery Charge in TX, OH, NV applies. One time install chrg may apply. ",
      seeDetail: "See details",
      order: "Order Now",
    },
   
  
  ];
  return (
    <div className={style.deals_main}>
      {data.map((detail, i) => {
        return (
            <Atdeals
              heading={detail.heading}
              speed={detail.speed}
              claimspeed={detail.claimspeed}
              uploadfast={detail.uploadfast}
              comparisonInternet={detail.comparisonInternet}
              multiplayer={detail.multiplayer}
              unlimited={detail.unlimited}
              activearmor={detail.activearmor}
              guards={detail.guards}
              dollar={detail.dollar}
              mo={detail.mo}
              autopay={detail.autopay}
              seeDetail={detail.seeDetail}
              order={detail.order}
              key={detail.speed}
            />
        )
      })}
    </div>
  );
};

export default AtDealsSection;
