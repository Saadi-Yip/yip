import Link from "next/link";
import dateConverter from "../../../utils/date-converter";
import styles from "./all-blogs.module.css";
import Img from "../../utils/image/Img";

type Props = {
  heading: string;
  createdAt: Date;
  category: { _id: string; name: string };
  readTime: string;
  image: string;
  id: string;
  excerpt?: string;
  slug?: string;
};

const Blog = ({
  heading,
  createdAt,
  category,
  readTime,
  image,
  id,
  excerpt,
  slug,
}: Props) => {
  const updatedHeading =
    heading.length > 45 ? heading.slice(0, 45) + "..." : heading;
  const updatedExcerpt =
    excerpt && excerpt.length > 145 ? excerpt?.slice(0, 145) + "..." : excerpt;
  return (
     
        <div className={styles.blog}>
          <div className={styles.image}>
            <Img
              src={image}
              alt="Internet service provider"
              sizes={{
                default: [14, 13],
                mobile: [27, 33],
              }}
            />
          </div>
          <div className={styles.content}>
            <h3>{updatedHeading}</h3>
            <p>{updatedExcerpt}</p>
            <div className={styles.bottom}>
              <span className={styles.date_time}>
                {dateConverter(createdAt)}· {readTime}
              </span>
              <div className={styles.blog_categories}>
                <span>{category?.name}</span>
              </div>
            </div>
          </div>
        </div>
       
   
  );
};

export default Blog;
