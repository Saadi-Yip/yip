import BlogBox from "./BlogBox";
import { motion, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./trending.module.css";
import "swiper/css";
import React, { useRef } from "react";
import CursorAnimation from "../../utils/bg-cursor-animation/CursorAnimation";
import useDimensions from "../../../hooks/use-dimensions";
import Img from "../../utils/image/Img";

const Trending = ({ blogs }: any) => {
  const scrollRef = useRef<null | HTMLDivElement>(null);
  const blogsRef = useRef<null | HTMLDivElement>(null);
  const isInView = useInView(scrollRef, { once: true });
  const isBlogsInView = useInView(blogsRef, { once: true });
  const {width} = useDimensions();

  console.log("blogs.....",blogs)
  return (
    <section className={styles.wrapper}>
      <CursorAnimation />
      <motion.div
        className={styles.trending}
        style={{
          background: `url(${process.env.NEXT_PUBLIC_IMAGES_URL}technology-particle-dots-5g-digital-corporate-background.WebP)`,
        }}
        animate={{ top: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container">
          <div className={styles.section_title}>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "110%" }}
                animate={isInView ? { y: 0 } : { y: "110%" }}
                viewport={{ root: scrollRef }}
                transition={{ duration: width < 600 ? 0.1 : 0.4 }}
                className="heading__primary"
              >
                Trending
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.p
                initial={{ y: "110%" }}
                animate={
                  isInView
                    ? { y: 0, transition: { delay: 0.3 } }
                    : { y: "110%" }
                }
                transition={{ duration: 0.4 }}
                className="para__primary"
              >
                Discovering the best of the web, one post at a time
              </motion.p>
            </div>
          </div>
        </div>
        {blogs && blogs && blogs.length > 0 && (
          <div className={styles.blogs_container} ref={scrollRef}>
            <div className={styles.drag_arrow}>
              <Img
                src={`${process.env.NEXT_PUBLIC_IMAGES_URL}svg/leftarrow.svg`}
                alt="left arrow"
                sizes={{
                  default: [1.5,1],
                  mobile: [0,0],
                }}
              />
              <p>DRAG</p>
              <Img
                src={`${process.env.NEXT_PUBLIC_IMAGES_URL}svg/rightLong.svg`}
                alt="left arrow"
                sizes={{
                  default: [11,1],
                  mobile: [0,0],
                }}
              />
            </div>
            <div className={styles.blogs} ref={blogsRef}>
              <Swiper
                slidesPerView="auto"
                spaceBetween={30}
                className="trending_blogs_slider"
              >
                {blogs?.map((b: any, i: number) => {
                  return (
                    <SwiperSlide key={b._id}>
                      <BlogBox isInView={isBlogsInView} blog={b} />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default Trending;
