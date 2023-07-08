import { Box } from "./Box";
// style
import styles from "./provider.module.css";
import { motion, useScroll } from "framer-motion";
import useDimensions from "../../../hooks/use-dimensions";
import Link from "next/link";

const pagesURL = [
  "/internet-providers-in-your-area",
  "/cable-tv-providers-in-your-area",
  "/",
  "/phone-services-providers",
];

const Providers = ({ content }: any) => {
  const { width } = useDimensions();
  const data = [
    {
      img: `${process.env.NEXT_PUBLIC_IMAGES_URL}svg/internet.svg`,
    },
    {
      img: `${process.env.NEXT_PUBLIC_IMAGES_URL}svg/Tv.svg`,
    },
    {
      img: `${process.env.NEXT_PUBLIC_IMAGES_URL}svg/cell.svg`,
    },
    {
      img: `${process.env.NEXT_PUBLIC_IMAGES_URL}svg/telephone.svg`,
    },
  ];

  return (
    <section>
      <motion.section
        style={{
          backgroundImage: ` url("${process.env.NEXT_PUBLIC_IMAGES_URL}home_section2_bg.WebP")`,
          backgroundColor: "#0d0d17",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <motion.div
          whileInView={{ y: 0 }}
          initial={{ y: 200 }}
          viewport={{ once: true }}
          transition={{
            duration: width < 600 ? 0.6 : 1,
          }}
          className={styles.compare_bg}
        >
          <div className={styles.best_text + " text-center"}>
            <h2 className="heading__primary color__fifth">
              {content.primary_heading}
            </h2>
          </div>
          <div className={styles.provider_row}>
            {/* {data.map((box, i) => {
              return (
                <Box
                  key={i.toString()}
                  img={box.img}
                  heading={content.items[i].title}
                  para={content.items[i].description}
                  url={pagesURL[i]}
                />
              );
            })} */}
            <Box
              img={`${process.env.NEXT_PUBLIC_IMAGES_URL}svg/internet.svg`}
              heading="Internet"
              para={
                <p>
                  We at Yourinternetprovider offer lightning-fast{" "}
                  internet speeds
                  of up to 400mbps with DSL, fiber-optic, or satellite.
                  Affordable rates and tailored features available.
                </p>
              }
              url="/internet-providers-in-your-area"
            />
            <Box
              img={`${process.env.NEXT_PUBLIC_IMAGES_URL}svg/Tv.svg`}
              heading="Cable"
              para={
                <p>
                  Find{" "}
                  cable plans
                  to match your preferences with Yourinternetprovider. Immerse
                  yourself in top-tier picture quality, customizable viewing
                  options, and exceptional customer service.
                </p>
              }
              url="/cable-tv-providers-in-your-area"
            />
            <Box
              img={`${process.env.NEXT_PUBLIC_IMAGES_URL}svg/cell.svg`}
              heading="Landline"
              para={
                <p>
                  With yourinternetprovider, socialize or attend bussiness
                  through our reliable and affordable landline plans from top
                  USA providers with crystal-clear sound, multiple features.
                </p>
              }
              url="/"
            />
            <Box
              img={`${process.env.NEXT_PUBLIC_IMAGES_URL}svg/telephone.svg`}
              heading="Phones"
              para={
                <p>
                  Youinternetprovider offers on-the-go affordable and flexible{" "}
                  phone plans
                  from top USA providers. Enjoy unlimited talk, text, and data
                  to stay connected.
                </p>
              }
              url="/phone-services-providers"
            />
          </div>
        </motion.div>
      </motion.section>
    </section>
  );
};
export default Providers;
