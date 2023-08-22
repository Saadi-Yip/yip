import Img from "../utils/image/Img";
import Bannercalifornia from "./Bannercalifornia";
import style from "./california.module.css";
import Yipcalifornia from "./Yipcalifornia";
import useDimensions from "../../hooks/use-dimensions";
// import Networkcalifornia from "./Networkcalifornia";
const California = () => {
  const {width} = useDimensions();
  return (
    <section className={style.main}>
      <Bannercalifornia />
     
      <div className={style.main_section}>
      <div className={style.heading}>
          <h2 style={{display:width && width< 600 ? "none" : "block"}}>Internet Accessibility Facts and Stats, CA State</h2>
          <h2 style={{display:width && width < 600 ? "block" : "none"}}>YourInternetProvider Facts</h2>
        </div>
        <div className={style.content_section}>
          <div className={style.image_part}>
            <Img
              src={`${process.env.NEXT_PUBLIC_IMAGES_URL}connection.WebP`}
              alt="wrapper2 image"
              sizes={{
                default: [5.7, 6.5],
                mobile: [14,11],
              }}
            />
          </div>
            <div className={style.text_area}>
            <h3>California’s Internet Ranking</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit
              urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              et massa mi. Aliquam in hendrerit urna.Lorem ipsum dolor sit amet,
              consectetur adipiscing{" "}
            </p>
          </div>
        </div>

        <div className={style.content_section}>
          <div className={style.image_part}>
            <Img
              src={`${process.env.NEXT_PUBLIC_IMAGES_URL}modemcalifornia.WebP`}
              alt="wrapper2 image"
              sizes={{
                default: [5.7, 6.5],
                mobile: [14,11],
              }}
            />
          </div>
          <div className={style.text_area}>
            <h3>
              Access to Wireless Broadband <span> 97.5% </span>{" "}
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit
              urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              et massa mi. Aliquam in hendrerit urna.Lorem ipsum dolor sit amet,
              consectetur adipiscing{" "}
            </p>
          </div>
        </div>
        <div className={style.content_section}>
          <div className={style.image_part}>
            <Img
              src={`${process.env.NEXT_PUBLIC_IMAGES_URL}chipcalifornia.WebP`}
              alt="wrapper2 image"
              sizes={{
                default: [5.7, 6.5],
                mobile: [14,11],
              }}
            />
          </div>
          <div className={style.text_area}>
            <h3>
              Access to Wired Broadband <span>26.3%</span>{" "}
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit
              urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              et massa mi. Aliquam in hendrerit urna.Lorem ipsum dolor sit amet,
              consectetur adipiscing
            </p>
          </div>
        </div>

        <div className={style.content_section}>
          <div className={style.image_part}>
            <Img
              src={`${process.env.NEXT_PUBLIC_IMAGES_URL}providerscalifornia.WebP`}
              alt="wrapper2 image"
              sizes={{
                default: [5.7, 6.5],
                mobile: [14,11],
              }}
            />
          </div>
          <div className={style.text_area}>
            <h3>
              Number of Providers in California <span>289</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit
              urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              et massa mi. Aliquam in hendrerit urna.Lorem ipsum dolor sit amet,
              consectetur adipiscing{" "}
            </p>
          </div>
        </div>
        <Yipcalifornia />
      </div>
      {/* <Networkcalifornia/> */}

    </section>
  );
};

export default California;
