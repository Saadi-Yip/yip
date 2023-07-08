import Internetpakage from "./Internetpakage";
import style from "./pakages.module.css";

const Mypakages = () => {
  const data = [
    {
      heading: "Internet + Cable",
      headingone: "Cable",
      aslow: "As low as",
      price: "$50",
      month: "/month",
      entertainment: "Up to 300 Mbps internet speed",
      fastconnection: "Enjoy fast and secure internet connectivity",
      advancehome: "65 channels of cable TV",
      combinecable: "12 months with a 1-year contract",
      phone_num: "(855) 862-7178",
    },
    {
      heading: "Internet + Cable",
      headingone: "Cable",
      aslow: "As low as",
      price: "$70",
      month: "/month",
      entertainment: "Up to 300 Mbps internet speed",
      fastconnection: "Enjoy fast and secure internet connectivity",
      advancehome: "65 channels of cable TV",
      combinecable: "12 months with a 1-year contract",
      phone_num: "(855) 862-7178",
    },
    {
      heading: "Internet + Cable",
      headingone: "Cable",
      aslow: "As low as",
      price: "$90",
      month: "/month",
      entertainment: "Up to 300 Mbps internet speed",
      fastconnection: "Enjoy fast and secure internet connectivity",
      advancehome: "65 channels of cable TV",
      combinecable: "12 months with a 1-year contract",
      phone_num: "(855) 862-7178",
    },
  ];
  return (
    <>
      <div className={style.main}>
        <h2 className="heading__primary color__secondary">Top Internet Packages </h2>

        <div className={style.main_section}>
          {data.map((detail, i) => {
            return (
              <Internetpakage
                key={i.toString()}
                heading={detail.heading}
                headingone={detail.headingone}
                aslow={detail.aslow}
                price={detail.price}
                month={detail.month}
                entertainment={detail.entertainment}
                fastconnection={detail.fastconnection}
                advancehome={detail.advancehome}
                combinecable={detail.combinecable}
                phone_num={detail.phone_num}
                list={true}
                listStyle = {true}
              />
            );
          })}
        </div>
        <p className="disclamer">Disclaimer: All areas may not have access to all products, pricing, and services. Actual pricing and speeds may differ and Internet speeds based on wired connection. Restrictions apply</p>
      </div>
    </>
  );
};

export default Mypakages;
