import React from 'react'
import style from './Banner.module.css'
function Banner() {
  return (
   <div className={style.container}>
      <div className={style.banner} style={{backgroundImage:`linear-gradient(to right, rgb(0 0 0 / 96%), rgb(0 0 0 / 18%)),url("${process.env.NEXT_PUBLIC_IMAGES_URL}ban-img.WebP")`}}>
        <h2>Optimum Internet & TV Plans and Packages </h2>
        <ul>
          <li>Internet speeds starting from 300 Mbps</li>
          <li>220+ channels with Core TV</li>
          <li>Unlimited local and long distance calling</li>
          <li>Up to $300 in Visa Prepaid Cards with Optimum Internet</li>
        </ul>
        <h3>Optimum Triple Play price starting at</h3>
            <h4>$130 <sub>/month.*</sub></h4> 
            <p>For 12 months. Plus taxes, fees and other charges. Includes Auto Pay and Paperless Billing.</p>
        <a href="tel:+18882620945"> +1 (888) 262-0945</a>
      </div>
      </div>
  )
}

export default Banner