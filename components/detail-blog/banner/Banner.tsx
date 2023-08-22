import useDimensions from "../../../hooks/use-dimensions";
import styles from "./banner.module.css";

const Banner = ({blog}:any) => {
  const {width} = useDimensions();
  return (
    <section className={styles.banner}>
      <div className={styles.container + " container"}>
        <div className={styles.main_text}>
          <img src={`${blog?.image}`} alt="Internet service provider"/>
          {width > 600 && <h1>{blog?.title}</h1>}
        </div>
      </div>
    </section>
  );
};

export default Banner;
