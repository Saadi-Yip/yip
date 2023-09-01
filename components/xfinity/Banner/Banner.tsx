import React from 'react'
import Img from '../../utils/image/Img'
import style from './Banner.module.css'
function Banner() {
  return (
   <div className={style.container}>
      <div className={style.banner}>
        <h1> <span> / </span> Xfinity provides its customers with some of the fastest internet speeds</h1>
        <ul>
          <li>High-quality connectivity and fast internet speeds</li>
          <li>Xfinity's X1 Entertainment System is a state-of-the-art TV experience that offers customers personalized recommendations</li>
          <li>Xfinity offers mobile services that allow customers to get unlimited data</li>
          <li>Flex is a streaming service that provides customers with access to over 10,000 free movies</li>
        </ul>
        <h2>Xfinity starting from</h2>
            <h4>$29.99 <sub>/mo</sub></h4> 
            <p>For the first 24 months with a 1-Year Agreement. Taxes and equipment not included. Paperless billing andautomatic payments required. </p>
        <a href="tel:+18559525706"> </a>
      </div>
      <div className={style.bannar_image_sec}>
        <span id ={style.bannar_img}>
          <img src={`${process.env.NEXT_PUBLIC_IMAGES_URL}banner-img.WebP`} alt="Xfinity internet provider, Xfinity Internet offers, Xfinity Internet deals" />
           {/* <Img 
          src={`${process.env.NEXT_PUBLIC_IMAGES_URL}banner-img.WebP`}
          alt="Xfinity internet provider, Xfinity Internet offers"
          sizes={{
          default: [41,30],
          mobile: [83,56],
      }}
        /> */}
        </span>
      </div>
      </div>
  )
}

export default Banner