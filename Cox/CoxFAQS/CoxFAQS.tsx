import React from 'react'
import style from './CoxFAQS.module.css'
import { data } from "./FAQsData";
import { useState } from 'react';
import MyFAQs from './MyFAQS';
const CoxFAQS = () => {
    const [datas, setDatas] = useState(data);
  
    return (
      <div className={style.Acordition}>
        <div className={style.faq}>
          <h1>FAQS</h1>
  
          <div className={style.acordition_block}>
            {datas.map((element: any) => {
              const { id } = element;
              return (
                <>
                  <MyFAQs key={element.id} {...element} />
                </>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

export default CoxFAQS