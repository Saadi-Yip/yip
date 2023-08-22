import React from "react";
import style from "./Atfaqs.module.css";
import { data } from "./Faqdata";
import { useState } from "react";
import Myfaqs from "./Myfaqs";

const Atfaqs = () => {
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
                <Myfaqs key={element.id} {...element} />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Atfaqs;
