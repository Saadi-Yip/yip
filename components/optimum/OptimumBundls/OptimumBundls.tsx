import { type } from "os";
import React from "react";
import style from "./OptimumBundls.module.css";

type props = {
  text : string,
  price : string,
  month : string,
  everybody : string,
  list: string,
  list1: string,
  list2: string,
  p :  string,
  btn : string
}

function OptimumBundls({text, price, month, everybody, list, list1, list2  , p, btn}:props) {
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
          </ul>
          <p>{p}</p>
          <a href="tel:+18882620945"> {btn}</a>
          </div>
      </div>
      </div>
  );
}

export default OptimumBundls;
