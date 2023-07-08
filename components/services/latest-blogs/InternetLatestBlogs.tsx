import LatestBlogBox from '../../home/latest-blogs/LatestBlogBox';
import styles from './latest-blog.module.css';


const InternetLatestBlogs = ({blogs}:any) => {
  return (
    <div className={styles.latest_blog}>
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
