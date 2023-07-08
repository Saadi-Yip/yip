import style from "./meter.module.css";
import { meter } from "./MeterBox";

const Meter = ({ speed, values }: meter) => {
  return (
    <div className={style.flex}>
      <div className="gauge mainn">
        <div className="percentage"></div>
        <div className="mask"></div>
        <span className="value">
          {speed} <sub>mbs</sub>
        </span>

        <div className={style.mainmeter}>
          {values.map((data: number, i: number) => {
            return (
              <div
                className={`${style.speedometer_scale1} ${style.scale1}`}
                key={i.toString()}
              >
                <span>{data}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Meter;