import LatestBlogBox from "./LatestBlogBox";
import styles from "./latestBlogs.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import React from "react";
import CursorAnimation from "../../utils/bg-cursor-animation/CursorAnimation"; 
const LatestBlogs = ({ blogs  }: any) => { 
  console.log(blogs?.blogs?.length-5);
  return (
    <section className={styles.latest_blog__sec}>
      <CursorAnimation />
      <div className={styles.latestblog_text}>
        <h2 className="heading__primary color__dark">
          Read the Latest from Our Blogs
        </h2>
      </div>

      <div className={styles.latest_blog_row}>
        
          {blogs.blogs &&
            blogs.blogs?.slice(-5)?.map((blog: any) => {
              return (
               
                  <LatestBlogBox
                    key={blog._id}
                    date={blog.created_at}
                    title={blog.title}
                    description={blog.excerpt}
                    slug={blog.slug}
                    
                  />
                 
              );
            })}
        
      </div>
    </section>
  );
};

export default LatestBlogs;
