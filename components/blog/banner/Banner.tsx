import CursorAnimation from "../../utils/bg-cursor-animation/CursorAnimation";
import styles from "./banner.module.css";

const Banner = () => {
  return (
    <section className={styles.banner} >
      <CursorAnimation />
      <div className={styles.container + " container"}>
        <div
          className={
            styles.main_text + " flex justify-content-center align-items-center"
          }
        >
          <div className="read_blog">
            <a href="#">Read Our Blogs:</a>
          </div>
          <h1 className="heading__main">The Ever-Changing World of Internet</h1>
          <h4 className="para__primary">Bringing you the latest and greatest from the internet world.</h4>
        </div>
      </div>
    </section>
  );
};

export default Banner;
