import React from 'react'
import Img from '../../components/utils/image/Img'
import style from './CoxBanner.module.css'
function CoxBanner() {
  return (
   <div className={style.container}>
      <div className={style.banner}>
        <h1> <span>/</span>Cox Communications: Internet | cable | Home Security</h1>
        <ul>
          <li>Blazing fast Cox Internet offers speeds up to 1 Gig</li>
          <li>Unlimited local and long-distance calling with Cox Voice</li>
          <li>An exhilarating lineup of more than 250 channels including HBO Max™, ShowTime®, and STARZ® with Cox Cable</li>
          <li>Take control of your entire home with Cox Home Security and Home Automation Solutions</li>
        </ul>
        <h2>Cox Internet Essential</h2>
            <h4>$49.99 <sub>/month</sub></h4> 
            <p>Everyday Low Price. No Term Contract.</p>
        <a href="tel:+8558627178"> (888) 262-0945</a>
      </div>
      <div className={style.bannar_image_sec}>
        <span><Img 
        src={`${process.env.NEXT_PUBLIC_IMAGES_URL}cox-banner-img.webp`}
          alt="Banner image"
          sizes={{
          default: [45,30],
          mobile: [91,59],
      }}
        /></span>
      </div>
      </div>
  )
}

export default CoxBanner