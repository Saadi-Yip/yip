import LatestBlogBox from "./LatestBlogBox";
import styles from "./latestBlogs.module.css"; 
import React from "react";  
const LatestBlogs = ({ blogs, slider }: any) => { 

  return (
    <section className={styles.latest_blog__sec}>
      <div className={styles.latestblog_text}>
        <h2 className="heading__primary color__dark">
          Read the Latest from Our Blogs
        </h2>
      </div>

      <div className={styles.latest_blog_row}>
        {blogs.blogs &&
          blogs.blogs?.map((blog: any) => {
            return (
              <LatestBlogBox
                key={blog._id}
                date={blog.created_at}
                title={blog.title}
                description={blog.excerpt}
                slug={blog.slug}
                slider={slider}
              />
            );
          })}
      </div>
    </section>
  );
};

export default LatestBlogs;
