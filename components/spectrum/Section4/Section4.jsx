import React from "react";
import Img from "../../utils/image/Img";
import style from "../Section4/Section4.module.css";
function Section4() {
  return (
    <div className={style.sectio4_main}>
      <div className={style.head_text}>
        <h2>Save with Spectrum One</h2>
        <p>
        Experience seamless connectivity across all of your devices from America’s leading Internet provider.
        </p>
      </div>
      <div className={style.sec_3div_main1}>
        <div className={`${style.container} ${style.sec_3div_main2}`}>
          <div className={style.sec_3div_inner}>
            <div className={style.sec_3div_wrapper}>
              <div className={style.text_center}>
                <div className={style.upper_text}>
                  <h2>
                    <span>INTERNET</span> <br /> <p> + WIFI + MOBILE </p>
                  </h2>
                  <div className={style.lower_text}>
                    <div className={style.doller}>$</div>
                    <b>49</b>
                    <div className={style.mo_12}>
                      <div className={style.decimal_99}>
                        99<span>/mo</span>
                      </div>
                      <div className={style.for_12}>
                        for 12 mos when bundled
                      </div>
                    </div>
                  </div>
                  <div className={style.text_internet}> INTERNET</div>
                </div>
                <div className={style.icons}>
                  <div className={style.first_icon}>
                    <Img 
                      src={`${process.env.NEXT_PUBLIC_IMAGES_URL}spectrum/pc.WebP`} 
                      alt="Spectrum Internet service provider" 
                      sizes={{
                        default: [2,2],
                        mobile: [8.4,7.5],
                      }}
                    />
                    <p>
                      <span>Up to</span>
                      <br /> 300 Mbps
                    </p>
                  </div>
                  <div className={style.second_icon}>
                    <Img 
                    src={`${process.env.NEXT_PUBLIC_IMAGES_URL}spectrum/wifi.WebP`} alt="Spectrum Internet service provider" 
                    sizes={{
                      default: [2.5,2],
                      mobile: [9.4,7],
                    }}
                    />
                    <p>
                      <span>Advance</span>
                      <br /> Wifi
                    </p>
                  </div>
                  <div className={style.third_icon}>
                    <Img
                     src={`${process.env.NEXT_PUBLIC_IMAGES_URL}spectrum/mbl.WebP`} alt="Spectrum Internet service provider" 
                     sizes={{
                      default: [1.5,2.5],
                      mobile: [5,8.5],
                    }}
                     />
                    <p>
                      <span>unlimited</span>
                      <br /> Mobile Line
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* second div icon */}

        <div className={`${style.container} ${style.sec_3div_main2}`}>
          <div className={style.sec_3div_inner}>
            <div className={style.sec_3div_wrapper}>
              <div className={style.text_center}>
                <div className={style.upper_text}>
                  <h2>
                    <span>INTERNET ULTRA</span> <br /> <p> + WIFI + MOBILE </p>
                  </h2>
                  <div className={style.lower_text}>
                    <div className={style.doller}>$</div>
                    <b>69</b>
                    <div className={style.mo_12}>
                      <div className={style.decimal_99}>
                        99<span>/mo</span>
                      </div>
                      <div className={style.for_12}>
                        for 12 mos when bundled
                      </div>
                    </div>
                  </div>
                  <div className={style.text_internet}> ULTRA</div>
                </div>
                <div className={style.icons}>
                  <div className={style.first_icon}>
                    <Img
                     src={`${process.env.NEXT_PUBLIC_IMAGES_URL}spectrum/pc.WebP`} alt="Spectrum Internet service provider"
                     sizes={{
                      default: [2,2],
                      mobile: [8.4,7.5],
                    }}
                     />
                    <p>
                      <span>Up to</span>
                      <br /> 500 Mbps
                    </p>
                  </div>
                  <div className={style.second_icon}>
                    <Img
                     src={`${process.env.NEXT_PUBLIC_IMAGES_URL}spectrum/wifi.WebP`} alt="Spectrum Internet service provider"
                     sizes={{
                      default: [2.5,2],
                      mobile: [9.4,7],
                    }}
                     />
                    <p>
                      <span>Advance</span>
                      <br /> Wifi
                    </p>
                  </div>
                  <div className={style.third_icon}>
                    <Img
                     src={`${process.env.NEXT_PUBLIC_IMAGES_URL}spectrum/mbl.WebP`} alt="Spectrum Internet service provider" 
                     sizes={{
                      default: [1.5,2.5],
                      mobile: [5,8.5],
                    }}
                     />
                    <p>
                      <span>unlimited</span>
                      <br /> Mobile Line
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3rd div section */}

        <div className={`${style.container} ${style.sec_3div_main2}`}>
          <div className={style.sec_3div_inner}>
            <div className={style.sec_3div_wrapper}>
              <div className={style.text_center}>
                <div className={style.upper_text}>
                  <h2>
                    <span>INTERNET GIG</span> <br /> <p> + WIFI + MOBILE </p>
                  </h2>
                  <div className={style.lower_text}>
                    <div className={style.doller}>$</div>
                    <b>89</b>
                    <div className={style.mo_12}>
                      <div className={style.decimal_99}>
                        99<span>/mo</span>
                      </div>
                      <div className={style.for_12}>
                        for 12 mos when bundled
                      </div>
                    </div>
                  </div>
                  <div className={style.text_internet}> GIG</div>
                </div>
                <div className={style.icons}>
                  <div className={style.first_icon}>
                    <Img 
                    src={`${process.env.NEXT_PUBLIC_IMAGES_URL}spectrum/pc.WebP`} alt="Spectrum Internet service provider" 
                    sizes={{
                      default: [2,2],
                      mobile: [8.4,7.5],
                    }}
                    />
                    <p>
                      <span>Up to</span>
                      <br /> 1 Gbps
                    </p>
                  </div>
                  <div className={style.second_icon}>
                    <Img 
                    src={`${process.env.NEXT_PUBLIC_IMAGES_URL}spectrum/wifi.WebP`} alt="Spectrum Internet service provider"
                    sizes={{
                      default: [2.5,2],
                      mobile: [9.4,7],
                    }}
                    />
                    <p>
                      <span>Advance</span>
                      <br /> Wifi
                    </p>
                  </div>
                  <div className={style.third_icon}>
                    <Img 
                    src={`${process.env.NEXT_PUBLIC_IMAGES_URL}spectrum/mbl.WebP`} alt="Spectrum Internet service provider" 
                    sizes={{
                      default: [1.5,2.5],
                      mobile: [5,8.5],
                    }}
                    />
                    <p>
                      <span>unlimited</span>
                      <br /> Mobile Line
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4;
