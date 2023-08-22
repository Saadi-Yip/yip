import { useState } from "react";
import useDimensions from "../../../hooks/use-dimensions";
import CursorAnimation from "../../utils/bg-cursor-animation/CursorAnimation";
import Img from "../../utils/image/Img";
import style from "./internetBanner.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion } from "framer-motion";

type response = {
  providers?: Object[];
};

type props = {
  text : JSX.Element,
  paragraph : any,
  size ? :boolean,

}
const InternetBanner = ({text, paragraph, size}:props) => {
  const { width } = useDimensions();
  const [search, setIsSearch] = useState<response>({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleChnage = (e: any) => {
    setIsSearch(e.target.value);
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://backend-yip.cyclic.app/address?zip_code=${search}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        e.target.reset();
      }

      const val = await response.json();
      setIsSearch(val);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className={style.internet_banner_sec}>
        <CursorAnimation />
        <div className={style.banner_text}>
          <h1 className={`${size && style.california} ${"heading__main"}`}>{text}</h1>
          <p className="para__primary color__fourth">{paragraph}</p>

          <form onSubmit={handleSubmit}>
            <div className={style.search_row}>
              <input
                type="search"
                placeholder="Zip Code"
                name="zip_code"
                onChange={handleChnage}
                maxLength={5}
                required
              />

              {width && width > 600 ? (
                <button type="submit">
                  <Img
                    src="https://next.thepic.store/frontend/searchButton.WebP"
                    alt=""
                    sizes={{
                      default: [2, 2],
                      mobile: [4, 4],
                    }}
                  />
                </button>
              ) : null}
             
            </div>
            {isLoading ? (
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Img
                    src={`${process.env.NEXT_PUBLIC_IMAGES_URL}svg/loader.svg`}
                    alt="Internetservice provider"
                    sizes={{
                      default: [7, 6],
                      mobile: [18, 15],
                    }}
                  />
                </div>
              ) : (
                <motion.div
                  className="yip-category_slide"
                  initial={{
                    x: "100%",
                    top: "0px",
                  }}
                  animate={{ x: 0 }}
                  transition={{
                    duration: 0.8,
                    type: "spring",
                    stiffness: 50,
                    damping: 15,
                  }}
                >
                  <Swiper
                    className="categries_slider"
                    slidesPerView={width < 600 ? 1.3 : 3}
                    spaceBetween={50}
                    autoplay={{ delay: 2500 }}
                  >
                    {search?.providers?.map((data: any) => (
                      <SwiperSlide key={data.id}>
                        <div className="zipcode_category">
                          <div className="zipcode_category__inner">
                            <div className="service_btn__col">
                              <Img
                                src={`${process.env.NEXT_PUBLIC_IMAGES_URL}svg/wifi.svg`}
                                alt="Internet Service Provider"
                                sizes={{
                                  default: [1, 1],
                                  mobile: [3, 3],
                                }}
                              />
                              <p>{data.service}</p>
                            </div>

                            <Img
                              src={data.image}
                              alt=""
                              sizes={{
                                default: [8, 4],
                                mobile: [29, 13],
                              }}
                            />
                            <div className="serivce_row">
                              <div className="service-card_speed_">
                                <span>upto</span>
                                <h2>{data.speed}</h2>
                                <sub style={{ textTransform: "capitalize" }}>
                                  mbps
                                </sub>
                              </div>
                              <div className="service-card_speed_">
                                <span>Starting from</span>
                                <h2>${data.offer}</h2>
                                <sub style={{ textTransform: "capitalize" }}>
                                  /month
                                </sub>
                              </div>
                            </div>
                            <div className="service_card__bottom">
                              <a href={`tel:${data.phone}`}>{data.phone}</a>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </motion.div>
              )}
              {width && width < 600 ? (
                <button type="submit" className={style.find_btn}>Find</button>
              ) : null}
          </form>
        </div>
      </div>
    </>
  );
};

export default InternetBanner;
