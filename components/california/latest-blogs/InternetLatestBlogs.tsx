import styles from "../../phone-service/latest-blogs/phoneLatestBlogs.module.css";
import LatestBlogBox from "../../home/latest-blogs/LatestBlogBox";

const InternetLatestBlogs = ({blogs}:any) => {
  return (
    <div className={styles.latest_blog} style={{marginTop:"3vw"}}>
    <h2 className="heading__primary color__secondary">Read the Latest from our Blogs</h2>  
    <div className={styles.internet_latest_row}>
        {blogs?.map((blog:any) => {
            return (
                <LatestBlogBox
                    key={blog._id}
                    date={blog.created_at}
                    title={blog.title}
                    description={blog.excerpt}
                    slug ={blog.slug}
                    color={true}
                />
            );
        })}
    </div>
</div>
  )
}

export default InternetLatestBlogs
