import style from "./internetmeter.module.css";
const Internetmeter = () => {
  return (
    <>
      <div className={style.dashed_border}>
        <div className={style.speedometer_container}>
          <div className={style.center_point}>
            <h2>125</h2>
            <h5>mbps</h5>
          </div>
          <div className={style.speedometer_center_hide}></div>
          <div className={style.speedometer_bottom_hide}></div>
          <div className={style.count}></div>
          <div className={`${style.speedometer_scale1} ${style.scale}`}>
            <span>0</span>
          </div>

         
          <div className={`${style.speedometer_scale3} ${style.scale}`}>
            <span>20</span>
          </div>
         
          <div className={`${style.speedometer_scale5} ${style.scale}`}>
            <span>40</span>
          </div>
          <div className={`${style.speedometer_scale6} ${style.scale}`}>
            <span></span>
          </div>
          <div className={`${style.speedometer_scale7} ${style.scale}`}>
            <span>60</span>
          </div>
          <div className={`${style.speedometer_scale9} ${style.scale}`}>
            <span>80</span>
          </div>
          <div className={`${style.speedometer_scale11} ${style.scale}`}>
            <span>100</span>
          </div>
          <div className={`${style.speedometer_scale12} ${style.scale}`}>
            <span></span>
          </div>
          <div className={`${style.speedometer_scale13} ${style.scale}`}>
            <span>120</span>
          </div>
          
          <div className={`${style.speedometer_scale15} ${style.scale}`}>
            <span>140</span>
          </div>
        
          <div className={`${style.speedometer_scale17} ${style.scale}`}>
            <span>180</span>
          </div>
         
          <div className={`${style.speedometer_scale19} ${style.scale}`}>
            <span>200</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Internetmeter;
