import Detail from "./Detail";
import Sidebar from "./Sidebar";

import styles from "./content.module.css";

const Content = ({blog,relatedBlogs}:any) => {
  return (
    <section className={styles.content}>
      <div className={styles.contentContainer + " container"}>
        <div className={styles.main_text}>
          <Detail blog={blog} />
          <Sidebar blog={blog} relatedBlogs={relatedBlogs} />
        </div>
      </div>
    </section>
  );
};

export default Content;
