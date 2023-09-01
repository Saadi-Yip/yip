import { motion } from "framer-motion";
import styles from "./banner.module.css";
import CursorAnimation from "../../utils/bg-cursor-animation/CursorAnimation";
import Image from 'next/image';  // Import Image from Next.js

const Banner = ({ content }: any) => {
  const scrollToProviders = () => {
    const element = document.getElementById("down");
    if (element) {
      window.scrollTo(0, element.offsetTop + 50);
    }
  };

  return (
    <section className={styles.banner_sec}>
      <CursorAnimation />
      <Image
        src={`${process.env.NEXT_PUBLIC_IMAGES_URL}_main.png`}
        layout="none"  // Choose layout option based on your use case
        width={1}
        height={1}
        alt="yourinternetprovider, Your internet provider"
      />
      <div className={styles.banner_textCol}>
        <div className={styles.banner_heading + " text-center"}>
          <h1 className="heading__main">{content.primary_heading}</h1>
          <p className="para__primary">{content.text}</p>
          <button onClick={scrollToProviders} className="para__primary">
            {content.secondary_heading}
          </button>
          <motion.div
            className={styles.downArrow}
            animate={{ y: 20 }}
            transition={{
              ease: "linear",
              repeat: Infinity,
              duration: 1,
              repeatType: "reverse",
            }}
          >
            <button onClick={scrollToProviders}>
              <Image
                src={`${process.env.NEXT_PUBLIC_IMAGES_URL}downArrow2.WebP`}
                alt="Internet service provider"
                width={0}
                height={0}
              />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
