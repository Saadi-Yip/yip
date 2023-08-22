import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./trending.module.css";
import Link from "next/link";
import useDimensions from "../../../hooks/use-dimensions";
import Img from "../../utils/image/Img";

type t_BlogBox = {
  isInView: boolean;
  blog: any;
};
const breakpoint = {
  mobile: 600,
};
const BlogBox = ({ isInView, blog }: t_BlogBox) => {
  const { width } = useDimensions();
  const [isHover, setIsHover] = useState(false);
  const calculatedWidth =
    width > 600
      ? { open: "25.625vw", close: "30vw" }
      : { open: "71.625vw", close: "71.625vw" };

  return (
    <Link href={`blog/${blog.slug}`} legacyBehavior>
      <motion.a
        style={{
          display: "flex",
          justifyContent: "flex-end",
          cursor: "pointer",
        }}
        initial={{ width: "30vw" }}
        animate={
          isInView
            ? { width: calculatedWidth.open }
            : { width: calculatedWidth.close }
        }
        transition={{
          duration: width < 600 ? 0 : 0.6,
          ease: "easeOut",
          delay: 0.1,
        }}
      >
        <motion.div
          className={styles.blog_box}
          onHoverStart={() => setIsHover(true)}
          onHoverEnd={() => setIsHover(false)}
        >
          <div className={styles.upside}>
            <h2>{blog?.title}</h2>
            <motion.div className={styles.arrows_wrapper}>
              <motion.div
                className={styles.arrows}
                animate={
                  isHover
                    ? {
                        y: "-1.7vw",
                        x: "0.4vw",
                      }
                    : { y: "0.6vw", x: "-0.1vw" }
                }
                transition={{ duration: 0.3 }}
              >
                <div className={styles.outlineArrowBox}>
                  <Img
                    src={`${process.env.NEXT_PUBLIC_IMAGES_URL}svg/arrow_topRight.svg`}
                    alt="ArrowUp"
                    sizes={{
                      default: [2, 2],
                      mobile: [0, 0],
                    }}
                  />
                </div>
                <div className={styles.darkArrowBox}>
                  <Img
                    src={`${process.env.NEXT_PUBLIC_IMAGES_URL}svg/arrow_topRight.svg`}
                    alt="ArrowUp"
                    sizes={{
                      default: [2, 2],
                      mobile: [0, 0],
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
          <div className={styles.downside}>
            <p style={{ display: width < 600 ? "block" : "none" }}>
              {blog?.excerpt}
            </p>
            <motion.p
              animate={isHover ? { y: 0 } : { y: "110%" }}
              transition={{ duration: 0.3 }}
              style={{ display: width < 600 ? "none" : "block" }}
            >
              {blog?.excerpt}
            </motion.p>
          </div>
        </motion.div>
      </motion.a>
    </Link>
  );
};

export default BlogBox;
