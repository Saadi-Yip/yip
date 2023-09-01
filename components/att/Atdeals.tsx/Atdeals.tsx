import React from "react";
import style from "./atdeal.module.css";
type props={
heading:string,
speed:string,
claimspeed:string,
uploadfast:string,
comparisonInternet:string,
multiplayer?:string,
unlimited?:string,
activearmor:string,
guards:string,
dollar:string,
mo:string,
autopay:string,
seeDetail:string,
order:string
}
const Atdeals = ({heading,speed,claimspeed,uploadfast,comparisonInternet,multiplayer,unlimited,activearmor,guards,dollar,mo,autopay,seeDetail,order}:props) => {
  return (
    <div className={style.deals_cards}>
    <div className={style.deal}>
      <div className={style.price_plan}>
        <h2>{heading}</h2>
      </div>
      {/* Here is the lower section after price plan */}
      <ul className={style.list1}>
        <li className={style.list_items}>
          <h4>{speed}</h4>
          <p>{claimspeed}</p>
        </li>
        <li className={style.list_items}>
          <h4>{uploadfast}</h4>
          <p>{comparisonInternet}</p>
        </li>
        <li className={style.list_items}>
          <h4>{multiplayer}</h4>
        </li>
        <li className={style.list_items}>
          <h4>{unlimited}</h4>
        </li>
        <li className={style.list_items}>
          <h4>{activearmor}</h4>
          <p>{guards}</p>
        </li>
      </ul>
      <div className={style.price_box}>
        <div className={style.price_main}>
          <div className={style.dollar_price}>
            <h4>{dollar}</h4>
            <h5>{mo}</h5>
            <div className={style.tax}>
              <h6>.plus taxes</h6>
            </div>
          </div>
        </div>
        <div className={style.internetterm}>
          <small>
            {autopay}
            <a href="#">{seeDetail}</a>
          </small>
        </div>
        <div className={style.tag1}>
          <a href="tel:+1888-262-0945">{order}</a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Atdeals;
