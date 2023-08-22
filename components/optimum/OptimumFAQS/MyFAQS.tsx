import React, { useState } from "react";
import style from "./OptimumFAQS.module.css";

const MyFAQs = ({ question, answer }: any) => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className={style.question} onClick={() => setShow(!show)}>
        <h2>{question} </h2>
        <p onClick={() => setShow(!show)}>+</p>
      </div>
      <div className={style.answer}>
         <p className={show ? style.show : ""}>{answer}</p>
        </div>
    </div>
  );
};

export default MyFAQs;
