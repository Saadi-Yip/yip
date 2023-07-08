import useDimensions from "../../hooks/use-dimensions";
import Device from "./Device";
import styles from "./service-card.module.css";
import ServiceFilter from "./ServiceFilter";
import { SwiperSlide, Swiper } from "swiper/react";
import { motion } from "framer-motion";
// types
import {
  t_device,
  t_suggestion,
  t_calculatedSuggestion,
  t_handleClickOnDevice,
  t_handleClickOnDelete,
  t_handleOnDeviceQuantityChange,
  t_handleZipcodeOnChange,
  t_handleClickOnSuggestion,
} from ".";

const BREAKPOINT = {
  mobile: 600,
};

// Types

type t_SlideOne = {
  currentSlide: number;
  devices: t_device[];
  selectedDevices: t_device[];
  handleClickOnDevice: t_handleClickOnDevice;
  handleClickOnDelete: t_handleClickOnDelete;
  handleOnDeviceQuantityChange: t_handleOnDeviceQuantityChange;
};
type t_SlideTwo = {
  currentSlide: number;
  zipcode: string;
  handleZipcodeOnChange: t_handleZipcodeOnChange;
};
type t_SlideThree = {
  currentSlide: number;
  suggestions: t_suggestion[];
  calculateSuggestion: t_calculatedSuggestion | [];
  loading: boolean;
  handleClickOnSuggestion: t_handleClickOnSuggestion;
};

// Components

const SlideOne = ({
  currentSlide,
  devices,
  selectedDevices,
  handleClickOnDevice,
  handleClickOnDelete,
  handleOnDeviceQuantityChange,
}: t_SlideOne) => {
  const { width } = useDimensions();
  return (
    <motion.div
      animate={
        currentSlide === 1
          ? { opacity: 1, zIndex: 1 }
          : { opacity: 0, zIndex: -1 }
      }
      style={{
        position: "absolute",
        height: "100%",
        width: "100%",
      }}
      transition={{ duration: 0.8 }}
    >
      <div className={styles.slide_one}>
        <div className={styles.slide_one__left}>
          {/* <h3
            className="heading__primary"
            style={{ display: width && width < 600 ? "block" : "none" }}
          >
            Estimate your business internet usage - Bandwidth calculator tool
          </h3>
          <p style={{ display: width && width < 600 ? "block" : "none" }}>
            Pro Tip: Enter how many devices are using the Internet?
          </p> */}

          <h3
            className="heading__primary"
            
          >
            How many devices are using the Internet?
          </h3>
          <p >
            Pro Tip: Don’t forget to consider lesser used devices like security
          </p>
        </div>
        <div className={styles.slide_one__right}>
          <div className={styles.slides_box}>
            <ServiceFilter
              placeholder="Add Devices"
              items={devices}
              handleClickOnProvider={handleClickOnDevice}
              disabled={devices.length > 0 ? false : true}
            />
            <div className={styles.devices}>
              {selectedDevices.map((d: t_device, i: number) => (
                <Device
                  key={i.toString()}
                  name={d.name}
                  handleClickOnDelete={() => handleClickOnDelete(d._id)}
                  handleOnDeviceQuantityChange={handleOnDeviceQuantityChange}
                  deviceId={d._id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
const SlideTwo = ({
  currentSlide,
  zipcode,
  handleZipcodeOnChange,
}: t_SlideTwo) => {
  return (
    <motion.div
      animate={
        currentSlide === 2
          ? { opacity: 1, zIndex: 1 }
          : { opacity: 0, zIndex: -1 }
      }
      initial={{ opacity: 0, zIndex: -1 }}
      style={{
        position: "absolute",
        height: "100%",
        width: "100%",
      }}
      transition={{ duration: 0.8 }}
    >
      <div className={styles.slide_two}>
        <div className={styles.slide_two__left}>
          <h3> Enter your Zip Code</h3>
          <p>
            We need a zipcode because the speed you need can be influenced by
          </p>
        </div>
        <div className={styles.slide_two__right}>
          <input
            type="number"
            placeholder="Zipcode"
            onChange={(e) => handleZipcodeOnChange(e)}
            value={zipcode}
          />
        </div>
      </div>
    </motion.div>
  );
};
const SlideThree = ({
  currentSlide,
  suggestions,
  calculateSuggestion,
  loading,
  handleClickOnSuggestion,
}: t_SlideThree) => {
  const { width } = useDimensions();
  return (
    <motion.div
      animate={
        currentSlide === 3
          ? { opacity: 1, zIndex: 1 }
          : { opacity: 0, zIndex: -1 }
      }
      initial={{ opacity: 0, zIndex: -1 }}
      style={{
        position: "absolute",
        height: "100%",
        width: "100%",
      }}
      transition={{ duration: 0.8 }}
    >
      <div className={styles.slide_three}>
        <div className={styles.slide_three__left}>
          <h3>Results</h3>
          <p>
            We recommend you three options to choose your Internet speed from
          </p>
        </div>
        <div className={styles.slider_main__wrapper}>
          {width < BREAKPOINT.mobile ? (
            <Swiper
              slidesPerView={3.3}
              spaceBetween={50}
              loop={false}
              centeredSlides={true}
              className="services_slider"
            >
              {suggestions.map((s: t_suggestion, i: number) => (
                <SwiperSlide key={i.toString()}>
                  <div className={styles.suggestion_card} key={i.toString()}>
                    <span>{s.type}</span>
                    <h2>{calculateSuggestion[i]}</h2>
                    <h4>mbps</h4>
                    <div>
                      <h5>Why we recommend this:</h5>
                      <ul>
                        {s.points.map((p: string, j: number) => (
                          <li key={j.toString()}>{p}</li>
                        ))}
                      </ul>
                    </div>
                    {!loading ? (
                      <button
                        onClick={() => {
                          handleClickOnSuggestion(calculateSuggestion[i]);
                        }}
                      >
                        See Provider
                      </button>
                    ) : (
                      <div style={{ margin: "auto", marginBottom: "unset" }}>
                        <img
                          src={`${process.env.NEXT_PUBLIC_IMAGES_URL}svg/loader.svg`}
                          className="loader"
                          style={{ width: "16.688vw", height: "16.06vw" }}
                          alt="Loading..."
                        />
                      </div>
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className={styles.slide_three__right}>
              {suggestions.map((s: t_suggestion, i: number) => (
                <div className={styles.suggestion_card} key={i.toString()}>
                  <span>{s.type}</span>
                  <h2>{calculateSuggestion[i]}</h2>
                  <h4>mbps</h4>
                  <div>
                    <h5>Why we recommend this:</h5>
                    <ul>
                      {s.points.map((p: string, j: number) => (
                        <li key={j.toString()}>{p}</li>
                      ))}
                    </ul>
                  </div>
                  {!loading ? (
                    <button
                      onClick={() => {
                        handleClickOnSuggestion(calculateSuggestion[i]);
                      }}
                    >
                      See Provider
                    </button>
                  ) : (
                    <div style={{ margin: "auto", marginBottom: "unset" }}>
                      <img
                        src={`${process.env.NEXT_PUBLIC_IMAGES_URL}svg/loader.svg`}
                        className="loader"
                        style={{ width: "5.688vw", height: "5.06vw" }}
                        alt="Loading..."
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};
export { SlideOne, SlideTwo, SlideThree };
