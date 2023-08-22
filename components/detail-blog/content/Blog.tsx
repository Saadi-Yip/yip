import Link from "next/link";
import styles from "./content.module.css";

const Blog = ({ blog }: any) => {
  return (
    <Link href={`/blog/${blog.slug}`} legacyBehavior>
      <a className={styles.blog}>
        <div className={styles.image}>
          <img
            src={
              blog.image
                ? blog.image
                : `${process.env.NEXT_PUBLIC_IMAGES_URL}blog_detail_img2.png`
            }
            alt="Internet service provider"
          />
         
        
        </div>
        <h2>{blog?.title}</h2>
      </a>
    </Link>
  );
};

export default Blog;
