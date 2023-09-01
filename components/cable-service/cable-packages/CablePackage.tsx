import Internetpakage from "../../services/internet-pakages/Internetpakage";
import style from "./cablepackage.module.css";
const CablePackage = () => {
    const data = [
        {
          heading: "Internet + Cable",
          headingone: "Cable",
          aslow: "As low as",
          price: "$110",
          month: "/month",
          entertainment: "up to 300 Mbps internet speed",
          fastconnection: "65 channels of cable TV",
          advancehome: "12 months with a 1-year contract",
          phone_num: "+1 (888) 262-0945",
        },
        {
          heading: "Internet + Cable",
          headingone: "Cable",
          aslow: "As low as",
          price: "$79.99",
          month: "/month",
          entertainment: "up to 200 Mbps internet speed",
          fastconnection: "138 channels of cable TV",
          advancehome: "12 months with a 1-year contract",
          phone_num: "+1 (888) 262-0945",
        },
        {
          heading: "Internet + Cable",
          headingone: "Cable",
          aslow: "As low as",
          price: "$85.00",
          month: "/month",
          entertainment: "100 Mbps internet speed",
          fastconnection: "38 channels of live TV",
          advancehome: "12 months with a 1-year contract.",
          phone_num: "+1 (888) 262-0945",
        },
      ];
  return (
    <div className={style.main}>
    <h2 className="heading__primary color__secondary">Top Cable TV Packages </h2>
    <div className={style.main_section}>
      {data.map((detail, i) => {
        return (
          <Internetpakage
            key={i}
            heading={detail.heading}
            headingone={detail.headingone}
            aslow={detail.aslow}
            price={detail.price}
            month={detail.month}
            entertainment={detail.entertainment}
            fastconnection={detail.fastconnection}
            advancehome={detail.advancehome}
            phone_num={detail.phone_num}
            list={false}
          />
        );
      })}
    </div>
    <p className="disclamer">Disclaimer: All areas may not have access to all products, pricing, and services. Actual pricing and speeds may differ and Internet speeds based on wired connection. Restrictions apply</p>
  </div>
  )
}

export default CablePackage
