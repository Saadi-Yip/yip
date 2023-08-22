import { SwiperSlide, Swiper } from "swiper/react";
import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import styles from "./service-card.module.css";

//types
import { t_handleClickOnResetSuggestions, t_provider } from ".";

type Props = {
  providers: t_provider[];
  handleClickOnResetSuggestions: t_handleClickOnResetSuggestions;
  loading: boolean;
};

const Providers = ({
  providers,
  handleClickOnResetSuggestions,
  loading,
}: Props) => {
  if (!loading && providers && providers.length > 0) {
    return (
      <motion.div
        className={styles.suggestion__col}
        initial={{
          x: "100%",
          top: "0px",
          width: "100%",
        }}
        animate={{ x: 0 }}
        transition={{
          duration: 0.8,
          type: "spring",
          stiffness: 50,
          damping: 15,
        }}
      >
        <div
          className={styles.drag_arrow__wrapper}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <button
            onClick={handleClickOnResetSuggestions}
            className={styles.reset_suggestions_btn}
          >
            <img src={`${process.env.NEXT_PUBLIC_IMAGES_URL}svg/reset.svg`} />
            <span>Reset Suggestions</span>
          </button>
          <div className={styles.drag_arrow}>
            <img
              src={`${process.env.NEXT_PUBLIC_IMAGES_URL}svg/leftarrow.svg`}
              alt="left arrow"
            />

            <p>DRAG</p>
            <img
              src={`${process.env.NEXT_PUBLIC_IMAGES_URL}svg/rightLong.svg`}
              alt="right arrow"
            />
          </div>
        </div>
        <div className="slider_inner">
          <Swiper
            slidesPerView="auto"
            spaceBetween={30}
            className="services_slider"
          >
            {providers.map((provider: t_provider) => (
              <SwiperSlide
                key={provider._id}
                className="service_provider_slider"
              >
                <ServiceCard
                  service={provider.service}
                  image={provider.image}
                  // packages={provider.packages}
                  speed={{
                    unit: provider.speed,
                    type: "mbps",
                  }}
                  offer={provider.offer}
                  description={provider.description}
                  phone={provider.phone}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.div>
    );
  }
  return <></>;
};

export default Providers;
