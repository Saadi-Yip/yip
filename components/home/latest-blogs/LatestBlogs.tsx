import LatestBlogBox from "./LatestBlogBox";
import styles from "./latestBlogs.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import React from "react";
import CursorAnimation from "../../utils/bg-cursor-animation/CursorAnimation";
import useDimensions from "../../../hooks/use-dimensions";
import { Autoplay, Pagination } from "swiper";
const LatestBlogs = ({ blogs, slider }: any) => {
  const { width } = useDimensions();
  console.log(blogs);
  return (
    <section className={styles.latest_blog__sec}>
      <CursorAnimation />
      <div className={styles.latestblog_text}>
        <h2 className="heading__primary color__dark">
          Read the Latest from Our Blogs
        </h2>
      </div>

      <div className={styles.latest_blog_row } style = {{display: 'none'}}>
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView= 'auto'
          spaceBetween={0}
          loop={true}
          className="trending_blogs_slider"
        >
          {blogs.blogs &&
            blogs.blogs?.map((blog: any) => {
              return (
                <SwiperSlide
                  key={blog._id}
                  className={`${slider ? styles.latest_blog_col : ""}`}
                >
                  <LatestBlogBox 
                    key={blog._id}
                    date={blog.created_at}
                    title={blog.title}
                    description={blog.excerpt}
                    slug={blog.slug}
                    slider={slider}
                  />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </section>
  );
};

export default LatestBlogs;
