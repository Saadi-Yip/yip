import React from "react";
import style from "./CoxBundls.module.css";

type props ={
  text: string,
  price: string,
  month: string,
  list: string,
  list1: string,
  list2: string,
  list3: string,
  list4: string,
  everybody: string,
  btn: string,
}

function CoxBundls({text, price, month, list, list1,  list2, list3, list4, everybody, btn}:props ) {
  return (
    <div className={style.container}>
      <div className={style.division}>
          <div className={style.availability_text}> <p>{text}</p>
          <h4>{price}<span>{month}</span></h4>
          </div>
          <div className={style.division_list}>
            <h5>{everybody}</h5>
            <ul>
          <li>{list}</li>
          <li>{list1}</li>
          <li>{list2}</li>
          <li>{list3}</li>
          <li>{list4}</li>
          </ul>
          <a href="tel:+8558627178"> {btn}</a>
          </div>
      </div>
      </div>
  );
}

export default CoxBundls;
