import style from "./meter.module.css";
import Meter from "./Meter";

export type meter = {
  speed: string;
  values: number[];
};

const MeterBox = () => {
  const data = [
    {
      speed: "125",
      values: [0, 20, 40, 60, 80, 100, 120, 140, 160, 180],
    },
    {
      speed: "125",
      values: [0, 20, 40, 60, 80, 100, 120, 140, 160, 180],
    },
    {
      speed: "122",
      values: [0, 20, 40, 60, 80, 100, 120, 140, 160, 180],
    },
  ];

  return (
    <section className={style.main_sectionone}>
      <h3> Check your Internet Speed </h3>
      <div className={style.meter_row}>
        {data.map(({speed,values}:meter, i: number) => {
          return <Meter speed={speed} values={values} key={i.toString()} />
        })}
      </div>
    </section>
  );
};

export default MeterBox;
