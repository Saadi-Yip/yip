import Internetpakage from '../../services/internet-pakages/Internetpakage';
import style from './phonePackages.module.css';

const PhonePackages = () => {
    const data = [
        {
          heading: "Internet + Phone",
          headingone: "Cable",
          aslow: "As low as",
          price: "$49.99",
          month: "/month",
          entertainment: "Unlimited nationwide calling",
          fastconnection: "Up to 100 Mbps internet speeds",
          advancehome: "12 months with a 1-year contract",
          phone_num: "+1 (888) 262-0945",
        },
        {
          heading: "Internet + Phone",
          headingone: "Cable",
          aslow: "As low as",
          price: "$74.98",
          month: "/month",
          entertainment: "Unlimited nationwide calling",
          fastconnection: "Up to 400 Mbps internet speeds",
          advancehome: "12 months with a 1-year contract",
          phone_num: "+1 (888) 262-0945",
        },
        {
          heading: "Internet + Phone",
          headingone: "Cable",
          aslow: "As low as",
          price: "$109.99",
          month: "/month",
          entertainment: "Unlimited nationwide calling",
          fastconnection: "Up to 1000 Mbps internet speeds",
          advancehome: "12 months with a 1-year contract",
          phone_num: "+1 (888) 262-0945",
        },
      ];
      return (
        <div className={style.main}>
        <h2 className="heading__primary color__secondary">Top Phone Packages </h2>
    
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
                list={false}
                phone_num={detail.phone_num}
              />
            );
          })}
        </div>
        <p className="disclamer">Disclaimer: All areas may not have access to all products, pricing, and services. Actual pricing and speeds may differ and Internet speeds based on wired connection. Restrictions apply</p>
      </div>
      )
}

export default PhonePackages
