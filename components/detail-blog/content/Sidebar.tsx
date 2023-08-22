import { useState } from "react";
import { motion } from "framer-motion";

import styles from "./content.module.css";
import Blog from "./Blog";
import Link from "next/link";

const Sidebar = ({ blog, relatedBlogs }: any) => {
  const [isHover, setIsHover] = useState(false);
  const updatedBlogs =relatedBlogs && relatedBlogs ?  relatedBlogs?.filter((b: any) => b._id !== blog?._id) : [];
  const blogs =
    updatedBlogs?.length > 2 ? updatedBlogs.slice(0, 2) : updatedBlogs;

  return (
    <div className={styles.sidebar}>
      <div className={styles.stick_sidebar}>
        {/* <div className={styles.search_bar}>
          <input type="text" placeholder="Search Articles" />
          <motion.div
            className={styles.arrows_wrapper}
            onHoverStart={() => setIsHover(true)}
            onHoverEnd={() => setIsHover(false)}
          >
            <motion.div
              className={styles.arrows}
              animate={
                isHover
                  ? {
                      y: "-1.5vw",
                      x: "-0.4vw",
                    }
                  : { y: "0.3vw", x: "-0.48vw" }
              }
              transition={{ duration: 0.3 }}
            >
              <div className={styles.outlineArrowBox}>
                <img src={`${process.env.NEXT_PUBLIC_IMAGES_URL}svg/search.svg`} />
              </div>
              <div className={styles.darkArrowBox}>
                <img src={`${process.env.NEXT_PUBLIC_IMAGES_URL}svg/search.svg`} />
              </div>
            </motion.div>
          </motion.div>
        </div> */}
        {/* {blog?.tags.length > 0 && (
          <div className={styles.tags}>
            <h4>Tags</h4>
            <div className={styles.tags_wrapper}>
              {blog?.tags.map((t: any, i: number) => (
                <Link href="#" key={t._id}>
                  {t.name}
                </Link>
              ))}
            </div>
          </div>
        )} */}
                  {blogs && blogs.length > 0 && <h3>What to read next?</h3>}

        <div className={styles.blogs}>
          {blogs &&
            blogs.length > 0 &&
            blogs.map((b: any, i: number) => (
              <Blog key={i.toString()} blog={b} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
