import Img from "../../utils/image/Img";
import style from "./XfinityBundls.module.css";

type props = {
  text: string,
  fast: string,
  list: string,
  tick: string,
  list2: string,
  list3: string,
  bottomText: string,
  foot: string,
  spn: string,
  btn: string, 
}

function XfinityBundls({text, fast , list ,tick, list2, list3, bottomText, foot, spn, btn,}:props ) {
  return (
    <div className={style.container}>
        <div className={style.division_head}>
          <div className={style.availability_text}><span>{fast}</span> <p>{text}</p></div>
          <div className={style.main_list}>
          <div className={style.division_list}>
          <Img src={tick} alt="Chekmark_image"
              sizes={{
                default: [1.2,1.6],
                mobile: [5,4.9],
            }}
          /> <p>{list}</p>
          </div>
          <div className={style.division_list}>
          <Img src={tick} alt="Chekmark_image" 
             sizes={{
              default: [1.2,1.6],
              mobile: [5,4.9],
          }}
         /> <p>{list2} </p>
          </div>
          <div className={style.division_list}>
          <Img src={tick} alt="Chekmark_image" 
              sizes={{
                default: [1.2,1.6],
                mobile: [5,4.9],
            }}
          /> <p>{list3}</p>
          </div>
          </div>
        <div className={style.division_body}>
           <p>{bottomText}</p>
        </div>
        <div className={style.division_foot}>
           <h4>{foot}<span>{spn}</span></h4>
           <a href="tel:+18559525706"> {btn}</a>
        </div>
        </div>
      </div>
  );
}

export default XfinityBundls;
