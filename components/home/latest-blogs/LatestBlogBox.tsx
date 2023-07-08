import { motion } from "framer-motion";
import styles from "./latestBlogs.module.css";
import Link from "next/link";
import { useState } from "react";
import useDimensions from "../../../hooks/use-dimensions";
import dateConverter from "../../../utils/date-converter";

const TITLE_LIMIT = 35;
const DESCRIPTION_LIMIT = 150;

function blogVariants(screen: number) {
  return {
    default: {
      width: screen < 600 ? "76vw" : "15.5vw",
    },
    move: {
      width: screen < 600 ? "76vw" : "22vw",
    },
  };
}

function titleVarients(screen: number) {
  return {
    default: {
      opacity: 1,
      height: screen < 600 ? "unset" : "auto",
    },
    move: {
      opacity: 0,
    },
  };
}

const cloneVarients = {
  default: {
    opacity: 0,
  },
  move: {
    opacity: 1,
  },
};

function paraVarients(screen: number) {
  return {
    default: {
      opacity: 1,
      width: screen < 600 ? "219px" : "13vw",
    },
    move: {
      opacity: 0,
      transition: {
        delay: 0.1,
      },
    },
  };
}

const paraCloneVarients = {
  default: {
    opacity: 0,
    y: "10%",
  },
  move: {
    opacity: 1,
    y: "0",
  },
};

type props = {
  date: Date;
  title: string;
  description: string;
  slug: string;
  color?: boolean;
};

const LatestBlogBox = ({ date, title, description, slug, color }: props) => {
  const { width } = useDimensions();
  const [isHover, setIsHover] = useState(false);
  const blogTile =
    title.length > TITLE_LIMIT
      ? `${title.slice(0, TITLE_LIMIT)}...`
      : `${title}.......`;
  const blogDesc =
    description.length > DESCRIPTION_LIMIT
      ? `${description.slice(0, DESCRIPTION_LIMIT)}...`
      : description;
  return (
    <>
      <motion.div
        className={`${styles.latest_blog_col} ${color ? "latest" : ""}`}
        onHoverStart={() => width > 600 && setIsHover(true)}
        onHoverEnd={() => width > 600 && setIsHover(false)}
        variants={blogVariants(width)}
        initial={"default"}
        animate={isHover ? "move" : "default"}
        transition={{
          duration: 0.1,
        }}
      >
        <span>{dateConverter(date)}</span>

        <motion.h6
          initial={"default"}
          variants={titleVarients(width)}
          animate={isHover ? "move" : "default"}
          transition={{
            duration: 0.3,
          }}
        >
          {blogTile}
        </motion.h6>

        <motion.h6
          initial={"default"}
          variants={cloneVarients}
          animate={isHover ? "move" : "default"}
          transition={{
            duration: 0.3,
          }}
        >
          {blogTile}
        </motion.h6>

        <div style={{ position: "relative" }}>
          <motion.p
            initial={"default"}
            variants={paraVarients(width)}
            animate={isHover ? "move" : "default"}
            transition={{
              duration: 0.4,
            }}
          >
            {blogDesc}
          </motion.p>

          <motion.p
            initial={"default"}
            variants={paraCloneVarients}
            animate={isHover ? "move" : "default"}
            transition={{
              duration: 0.4,
            }}
            style={{ position: "absolute", width: "15vw",top:0 }}
          >
            {blogDesc}
          </motion.p>
        </div>

        <Link href={`blog/${slug}`} legacyBehavior>
          <a>Learn more</a>
        </Link>
      </motion.div>
    </>
  );
};

export default LatestBlogBox;
