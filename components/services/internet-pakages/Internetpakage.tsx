import useDimensions from "../../../hooks/use-dimensions";
import style from "./pakages.module.css";

type props = {
  heading: string;
  headingone: string;
  aslow: string;
  price: string;
  month: string;
  entertainment: string;
  fastconnection: string;
  advancehome: string;
  combinecable?: string;
  phone_num: string;
  list: boolean;
  listStyle ? : boolean
};

const Internetpakage = ({
  heading,
  headingone,
  aslow,
  price,
  month,
  entertainment,
  fastconnection,
  advancehome,
  combinecable,
  phone_num,
  list,
  listStyle
}: props) => {
  const { width } = useDimensions();
  const listPart = listStyle ? "removeClass" : "addClass";
  return (
    <div className={style.pakage_section}>
      <div className={style.card}>
        <div className={style.price_part}>
          <div className={style.internet_pakage}>
            <h3 style={{ display: width && width < 600 ? "none" : "block" }}>
              {heading}
            </h3>
            <h3 style={{ display: width && width < 600 ? "block" : "none" }}>
              {headingone}
            </h3>
          </div>

          <span>{aslow}</span>
          <div className={style.dollar_price}>
            <h4>{price}</h4>
            <div className={style.tax}>
              <h6>{month}</h6>
            </div>
          </div>
          <h5></h5>
        </div>
        <ul className={style.list_part + " " + listPart}>
          <li className={style.list}>{entertainment}</li>
          <li className={style.list}>{fastconnection}</li>
          <li className={style.list}>{advancehome}</li>
          {list && <li className={style.list}>{combinecable}</li>}
        </ul>
        <div>
          <a href="tel:+11-0900-78601" className={style.phone_btn}>
            {phone_num}
          </a>
        </div>
      </div>
      
    </div>
    
  );
};

export default Internetpakage;
