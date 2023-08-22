import React from "react";
import XfinityBundls from "./XfinityBundls";
import style from "./XfinityBundls.module.css";

const XfinityBox = () => {
  return (
    <>
      <div className={style.head_text}>
        <h2>
          <sub>/</sub> Xfinity Bundles{" "}
        </h2>
      </div>
      <div className="Xfinity-Child">
        <XfinityBundls
          text="The rates, speeds, channel lineup, and package accessibility may differ depending on the location"
          fast="Fast Internet"
          list="Up to 400 Mbps download speeds"
          tick={`${process.env.NEXT_PUBLIC_IMAGES_URL}/checkmark.WebP`}
          list2="Option to add the flex 4K streaming "
          list3="Very high speed for manydevices No term contract"
          bottomText="The quoted price is liable to modification and excludes the fees for regional sports and broadcast TV.Taxes and equipment not included. Paperless billing  automatic payments required. "
          foot="$55.00 "
          spn="/mo"
          btn="(855) 952-5706"
        />
        <XfinityBundls
          text="  +Depending on the location, popular TV options may not be available or may have different pricing, speeds, channels, and bundle options. "
          fast="Fast Internet"
          list="Up to 400 Mbps download speed"
          tick={`${process.env.NEXT_PUBLIC_IMAGES_URL}/checkmark.WebP`}
          list2="125+ Channles"
          list3="20 Hours of DVR Service"
          bottomText="No term contract. The quoted price is liable to modification and excludes the fees for regional sports and broadcast TV.Taxes and equipment not included.Paperless billing and automatic payments required. "
          foot="$105.00 "
          spn="/mo"
          btn="(855) 952-5706"
        />
        <XfinityBundls
          text=" + Ultimate TV + Voice"
          fast="Superfast Internet"
          list="Up to 800 Mbps download speed"
          tick={`${process.env.NEXT_PUBLIC_IMAGES_URL}/checkmark.WebP`}
          list2="185+ Channels"
          list3="Unlimited Nationwide Calling"
          bottomText="No term contract. The quoted price is liable to modification and excludes the fees for regional sports and broadcast TV.Taxes and equipment not included. Paperless billingand automatic payments required. "
          foot="$150.00 "
          spn="/mo"
          btn="(855) 952-5706"
        />
      </div>
    </>
  );
};

export default XfinityBox;
