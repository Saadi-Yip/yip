import styles from "./all-blogs.module.css";
import React, { useState } from "react";
import useDimensions from "../../../hooks/use-dimensions";
import Blog from "./Blog";
import Pagination from "../pagination/Pagination";
import Img from "../../utils/image/Img";
import useBlogCategory from "../../../hooks/use-fetch-blog-categories";
const AllBlogs = ({data}:any) => {
  const {width} = useDimensions();
  const [isHover, setIsHover] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchVal, setSearchVal] = useState("");
  const productPerPage = 6;
  const { message, blogs,total, categories, loading } = useBlogCategory(
    currentPage,
    productPerPage,
    searchQuery,
    category
  );

  const totalPages = Math.ceil(total / productPerPage);
  
  // handlers
  const handleSearchInputOnChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchVal(e.target.value);
    
  };
  const handleClickOnSearchBtn = () => {
    setSearchQuery(searchVal);
    setCurrentPage(1);
  };


  return (
    <section className={styles.all_blogs} style={{ position: "relative" }}>
      <div className={styles.wrapper}>
        <div className={styles.latestblog_text}>
          <h2 className="heading__primary color__dark">
            Read the Latest from Our Blogs
          </h2>
        </div>

        <div className={styles.blogs}>
          {blogs &&
            blogs?.map((b: any) => {
              return (
                <Blog
                  key={b._id}
                  id={b._id}
                  heading={b.title}
                  createdAt={b.created_at}
                  category={b.category}
                  readTime={b.read_time}
                  image={b.image}
                  excerpt={b.excerpt}
                  slug={b.slug}
                />
              );
            })}
        </div>
        {loading && (
        <div
          style={{
            marginTop: "4vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="loader"
        >
          <Img
            src={`${process.env.NEXT_PUBLIC_IMAGES_URL}svg/loader.svg`}
            alt="loader"
            sizes={{
              default: [16.5, 6],
              mobile: [19.4, 16],
            }}
          />
        </div> )}
        <Pagination totalPages={totalPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
      </div>
    </section>
  );
};

export default AllBlogs;
