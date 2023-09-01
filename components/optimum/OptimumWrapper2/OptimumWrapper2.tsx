import React from "react";
import style from "./OptimumWrapper2.module.css";
function OptimumWrraper2() {
  return (
    <div className={style.container}>
      <div
        className={style.wrapper2_text}
        style={{
          backgroundImage: `linear-gradient(to right, rgb(0 0 0 / 96%), rgb(0 0 0 / 18%)),url("${process.env.NEXT_PUBLIC_IMAGES_URL}image1.webp")`,
        }}
      >
        <div>
          <h3>Optimum internet plans for all your surfing needs</h3>
          <p>
            Say goodbye to the most annoying thing on the planet – buffering -
            by subscribing to Optimum internet. Optimum by Altice promises a
            lag-free online experience, which is ultra-fast and upholds
            everything that promotes seamless connectivity. With internet plans
            starting from 300 Mbps and download speeds reaching up to 1 Gig in
            select areas, Optimum packages and plans ensure an internet
            connection that meets all your broadband requirements. Moreover,
            Optimum offers an excellent built-in Wi-Fi system whenever you wish
            to go wireless, and enjoy:
          </p>
          <ul>
            <li>
              Video streaming in 4K quality TV across more than one device
            </li>
            <li>Multiplayer online gaming and business conferencing</li>
            <li>
              Speed assurance by Netflix and YouTube, establishing Optimum’s
              credibility
            </li>
          </ul>
          <a href="tel:+18882620945"> +1 (888) 262-0945</a>
        </div>
      </div>
    </div>
  );
}

export default OptimumWrraper2;
