import  { useRef } from "react";
import useDimensions from "../../../hooks/use-dimensions";
import dateConverter from "../../../utils/date-converter";
import JStoHTML from "../../utils/js-to-html/JStoHTML";

import styles from "./content.module.css";

const Detail = ({ blog }: any) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const content = blog?.content ? JSON.parse(blog?.content) : [];
  const { width } = useDimensions();

  return (
    <div className={styles.detail_side}>
      <div className={styles.detail__top_side}>
        <div className={styles.user}>
          <img
            src={
              blog?.user?.image
                ? blog.user.image
                : `${process.env.NEXT_PUBLIC_IMAGES_URL}blog_user.png`
            }
          />
          <div className={styles.text}>
            <h4>{blog?.user?.name ? blog?.user.name : "Mika MAtikainen "}</h4>
            <span>
              {dateConverter(blog?.created_at)}. {blog?.read_time} read
            </span>
          </div>
        </div>
      </div>
      {width < 600 ? (
        <h1 style={{ textAlign: "center", margin: "15px 0" }}>{blog?.title}</h1>
      ) : null}

      <div className={styles.detail__bottom_side} ref={contentRef}>
        {content.map((c: any) => (
          <JStoHTML content={c} key={c.id} />
        ))}
      </div>
    </div>
  );
};

export default Detail;
