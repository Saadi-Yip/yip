import React from "react";
import Img from "../../components/utils/image/Img";
import style from "./CoxWrapper2.module.css";
function CoxWrraper2() {
  return (
      <div className={style.container}>
        <div className={style.wrapper2_text}>
          <h3>
            <span>24/7</span> Quick and Efficient Assistance through{" "}
            <span>Cox Customer Service</span>
          </h3>
          <p>
            Cox Communications is known for its efficient customer service team.
            <span>Cox customer service</span> lines are always open for any
            queries that you may have. You can dial the Cox customer service
            phone number to learn more about your Cox Account, Billing,
            Technical Support, or any general queries regarding Cox services.
            The customer service team can help you learn more about any
            discounts or promotions being offered, placing an order, outages,
            and much more.
          </p>
          <p>
            Cox also offers support services in Spanish to cater to their
            Spanish customers. Contact <a href=""><span>Cox customer service</span></a> by dialing the
            customer service number or you can reach out through Live Chat,
            Email, and even SMS Support. Cox honors its legacy spanning over six
            decades of providing superior services and after-sales support to
            its loyal customer base. Rest assured, when you’re with Cox you are
            selecting one of the best in the business.
          </p>
        </div>
        <div className={style.wrapper2_img}>
        <Img 
        src={`${process.env.NEXT_PUBLIC_IMAGES_URL}cox-wrapper2-img.webp`}
          alt="wrapper2 image"
          sizes={{
          default: [50,34],
          mobile: [88,66],
      }}
      />
        </div>
      </div>
  );
}

export default CoxWrraper2;
