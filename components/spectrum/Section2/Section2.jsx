import React from "react";
import Img from "../../utils/image/Img";
import style from "../Section2/Section2.module.css";
import Link from "next/link";
function Section2() {
  return (
    <section className={style.container}>
      <div className={style.main}>
        <div className={style.sec_img}>
          <Img 
            src={`${process.env.NEXT_PUBLIC_IMAGES_URL}spectrum/brust_save.WebP`}
            alt="spectrum cable deals"
            sizes={{
              default: [40.4,38.88],
              mobile: [80.4,70],
            }}
          />
        </div>
        <div className={style.sec_main_text}>
          <p className={style.spectrum_mbl}>SPECTRUM MOBILE™</p>
          <h2 className="heading-2">A Better Way to Mobile Is Here</h2>
          <div className={style.tick_icon1}>
            <Img
              src={`${process.env.NEXT_PUBLIC_IMAGES_URL}spectrum/tick-solid.WebP`}
              alt="Spectrum Internet service provider"
              sizes={{
                default: [1,1],
                mobile: [2.9,2.5],
              }}
            />
            <p>Mix and match data plans with Unlimited or By the Gig options</p>
          </div>
          <div className={style.tick_icon1}>
            <Img 
              src={`${process.env.NEXT_PUBLIC_IMAGES_URL}spectrum/tick-solid.WebP`}
              alt="Spectrum Internet service provider"
              sizes={{
                default: [1,1],
                mobile: [2.9,2.5],
              }}
            />
            <p>Most reliable mobile service coast to coast</p>
          </div>
          <div className={style.tick_icon1}>
            <Img 
              src={`${process.env.NEXT_PUBLIC_IMAGES_URL}spectrum/tick-solid.WebP`}
              alt="Spectrum Internet service provider"
              sizes={{
                default: [1,1],
                mobile: [2.9,2.5],
              }}
            />
            <p>Unlimited nationwide talk and text</p>
          </div>
          <div className={style.tick_icon1}>
            <Img 
              src={`${process.env.NEXT_PUBLIC_IMAGES_URL}spectrum/tick-solid.WebP`}
              alt="Spectrum Internet service provider"
              sizes={{
                default: [1,1],
                mobile: [2.9,2.5],
              }}
            />
            <p>No contracts, added taxes or hidden fees</p>
          </div>
          <div className={style.phone}>
            <div className={style.number}>
              <Link href="tel:855-837-6852">
                <Img
                  src={`${process.env.NEXT_PUBLIC_IMAGES_URL}spectrum/phome_icon.WebP`}
                  alt="Spectrum Internet service provider"
                  sizes={{
                    default: [1.1,1.1],
                    mobile: [4,4],
                  }}
                />
                (855) 837-6852
              </Link>
             
            </div>
          </div>
          <div className={style.foot_text}>
            <p>
            ^^Savings based on single line comparison of unlimited plans among major nat’l carriers as of 08/2022: prepaid excl: data usage limits vary by carrier.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section2;
