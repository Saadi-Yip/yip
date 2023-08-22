import Tabs from "../../utils/tab/Tabs";
import { motion } from "framer-motion";
import styles from "./qna.module.css";
import useDimensions from "../../../hooks/use-dimensions";
import Subscribe from "./Subscribe";
import Link from "next/link";

const QnA = ({ data, description, aboutHeading,faqsDescirpion }: any) => {
  const { width } = useDimensions();

  return (
    <section className={styles.QnA}>
      <div className={styles.container}>
        <div className={styles.main_text}>
          <div className={styles.left}>
            <h2 className="">FAQs</h2>
            {faqsDescirpion && <p className={styles.description}>{faqsDescirpion}</p>}
            <Tabs data={data} />
          </div>
          <motion.div
            className={styles.right}
            initial={{ x: "-60%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: width < 600 ? 80 : 50,
              damping: 15,
            }}
          >
            {aboutHeading ? (
              aboutHeading
            ) : (
              <h2 className="heading__secondary">About Us</h2>
            )}

            {description ? (
              description
            ) : (
              <p className="para__secondary">
                We are an authorized retailer of the top brands in the telecom
                industry, offering our customers the best selection of{" "}
                <Link
                  href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}internet-providers-in-your-area`}
                >
                  internet
                </Link>
                ,
                <Link
                  href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}cable-tv-providers-in-your-area`}
                >
                  TV
                </Link>
                , and{" "}
                <Link
                  href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}phone-services-providers`}
                >
                  phone services in your area
                </Link>
                . Our smart tool allows you to easily determine which services
                and providers are available in your area by simply entering
                number of device you use and zip code. With data from thousands
                of service providers we bring you the best available options
                that suit your needs. We are all about providing a seamless and
                hassle-free experience.
              </p>
            )}
            <div className={styles.subscribe}>
              <span className="heading__secondary">Subscribe</span>
              <Subscribe />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QnA;
