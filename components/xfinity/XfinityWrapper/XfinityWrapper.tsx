import Img from "../../utils/image/Img";
import style from "./XfinityWrapper.module.css";
function XfinityWrapper() {
  return (
    <div className={style.container}>
      <div className={style.banner}>
        <div className={style.banner_img}>
          <img src={`${process.env.NEXT_PUBLIC_IMAGES_URL}/wrapper-img2.WebP`} alt="xfinity internet customer service" />
          {/* <Img src={`${process.env.NEXT_PUBLIC_IMAGES_URL}/wrapper-img2.WebP`} alt="Xfinity Internet offers, Xfinity Internet deals" 
            sizes={{
              default: [41,32],
              mobile: [100,65],
          }}
          /> */}
        </div>
        <div className={style.banner_text}>
        <h6> <span>/</span> Save big on fast, reliable Internet speeds and all the live TV, sports, and entertainment you love with Xfinity!</h6>
          <div className={style.banner_text_list}>
                 <Img src={`${process.env.NEXT_PUBLIC_IMAGES_URL}cable-tv.WebP`} alt="checkmark"
                  sizes={{
                    default: [4,4],
                    mobile: [10,10],
                }}
                 /> <p>Fast, reliable connections for all your devices</p>
          </div>
          <div className={style.banner_text_list}>
          <Img src={`${process.env.NEXT_PUBLIC_IMAGES_URL}pc.WebP`} alt="checkmark"
                  sizes={{
                    default: [4,4],
                    mobile: [10,10],
                }}
                 /> <p>Live TV, On Demand, sports & streaming apps all in one place</p>
          </div>
          <div className={style.banner_text_list}>
          <Img src={`${process.env.NEXT_PUBLIC_IMAGES_URL}wifi.WebP`} alt="checkmark"
                  sizes={{
                    default: [4,4],
                    mobile: [10,10],
                }}
                 />
                  <p>DVR you can set and watch anytime, anywhere</p>
          </div>
          <div className={style.banner_btn}><a href="tel:+18559525706">(855) 952-5706</a></div>
        </div>
      </div>                                                                                                        
    </div>
  );
}

export default XfinityWrapper;
