import React from "react";
import detail from "../Offerdetail/OfferDetail.module.css";

const OfferDetail = (props) => {
  return (
    <div className={detail.main_text_part}>
      <div className={detail.Large_text}>
        <h6 className={detail.headings}>{props.text}</h6>
        {props.children}
      </div>
    </div>
  );
};

export default OfferDetail;
