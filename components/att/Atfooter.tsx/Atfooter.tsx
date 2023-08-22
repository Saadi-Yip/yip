import React from 'react'
import Img from '../../utils/image/Img';
import style from "./Atfooter.module.css";

const Atfooter = () => {
  return (
    <div className={style.footer}>
      <div className={style.main}>
          <div className={style.footer_logo}>
        <Img 
src={`${process.env.NEXT_PUBLIC_IMAGES_URL}/att-new.WebP`}       
  alt='img'
  sizes={{
    default: [10,4.5],
    mobile: [33.4,13.4],
  }}
         />
        </div>
        <div className={style.footer_area2}>
            <div className={style.image_1}>
            <Img 
      src={`${process.env.NEXT_PUBLIC_IMAGES_URL}/logo.svg`}       
      alt='img'
       sizes={{
       default: [21,6.5],
       mobile: [35.4,17.4],
           }}
           />
           </div>
           
           

        </div>

       </div>

    </div>
  )
}

export default Atfooter