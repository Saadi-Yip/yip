import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";

//controllers
import getServices from "../../controllers/getServices";
//hooks
import useFetchDevices from "../../hooks/use-fetch-devices";
import useDimensions from "../../hooks/use-dimensions";
// components
import { SlideOne, SlideThree, SlideTwo } from "./Slides";
import BackButton from "./BackButton";
import NextButton from "./NextButton";
import Pagination from "./Pagination";
import Providers from "./Providers";

import styles from "./service-card.module.css";

const NOT_FOUND_ERROR = "zipcode not found. Enter your correct zipcode!!!";

export type t_calculatedSuggestion = [
  average: number,
  basic: number,
  pro: number
];
export type t_suggestion = {
  type: "Basic" | "Average" | "Pro";
  points: string[];
};
export type t_paginationTitle = "Devices" | "Zip code" | "Result";
export type t_device = {
  speed: {
    average: string;
    basic: string;
    pro: string;
  };
  name: number;
  _id: string;
  quantity?: number;
};
export type t_provider = {
  _id: string;
  name: string;
  service: string;
  image: string;
  image_id: string;
  speed: number;
  phone: string;
  offer: string;
  description: string;
};
export type t_handleClickOnDevice = (device: t_device) => void;
export type t_handleClickOnDelete = (id: string) => void;
export type t_handleOnDeviceQuantityChange = (
  quantity: string,
  deviceId: string
) => void;
export type t_handleZipcodeOnChange = (
  e: React.ChangeEvent<HTMLInputElement>
) => void;
export type t_handleClickOnSuggestion = (speed: number) => void;
export type t_handleClickOnSlidesHandler = ()=>void;
export type t_claculateTotalSpeed = () => t_calculatedSuggestion;
export type t_handleClickOnResetSuggestions = ()=>void;
export type t_handleClickOnBackButton = ()=>void;
export type t_fetchProviders = (choosedSpeed:number)=>void;

const cardVariant = {
  show: {
    y: 0,
    opacity: 1,
    position: "static",
  },
  hide: {
    y: "100%",
    opacity: 0,
    position: "absolute",
    left: 0,
  },
};

const ServiceProvider = () => {
  const { width } = useDimensions();
  const [selectedDevices, setSelectedDevices] = useState<t_device[]>([]);
  const [totalDevices, setTotalDevices] = useState<number>(0);
  const [zipcode, setZipcode] = useState<string>("");
  const [currentSlide, setCurrentSlide] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [providers, setProviders] = useState<t_provider[]>([]);
  const [isAllowToGo, setIsAllowToGo] = useState<boolean>(false);
  const [calculateSuggestion, setCalculateSuggestion] = useState<
    [] | t_calculatedSuggestion
  >([]);
  const { devices }: { devices: t_device[] } = useFetchDevices();

  const paginateTitle: t_paginationTitle =
    currentSlide === 1 ? "Devices" : currentSlide === 2 ? "Zip code" : "Result";

  const suggestions: t_suggestion[] = [
    {
      type: "Basic",
      points: [
        `To support over ${totalDevices} devices silmultaneously`,
        "Email",
        "Regular website browsing",
        "Music streaming",
        "SD video streaming",
      ],
    },
    {
      type: "Average",
      points: [
        `To support over ${totalDevices} devices silmultaneously`,
        "Working from home using light apps",
        "Streaming music",
        "Online gaming",
        "HD video streaming",
      ],
    },
    {
      type: "Pro",
      points: [
        `To support over ${totalDevices} devices silmultaneously`,
        "Multigaming",
        "4k videos streaming",
        "Using home security",
        "Using smart appliances",
        "Downloading large files",
      ],
    },
  ];

  // validate slides to move

  useEffect(() => {
    if (currentSlide === 1) {
      selectedDevices.length > 0 ? setIsAllowToGo(true) : setIsAllowToGo(false);
    } 
    else if (currentSlide === 2) {
      zipcode ? setIsAllowToGo(true) : setIsAllowToGo(false);
    }
  }, [selectedDevices, zipcode, currentSlide]);

  // Handlers

  // Add a new device

  const handleClickOnDevice: t_handleClickOnDevice = (device) => {
    const isAlreadyExist = selectedDevices.find(
      (d: t_device) => d._id === device._id
    );

    // add device if not added

    if (!isAlreadyExist) {
      const updatedDevices = [...selectedDevices, { ...device, quantity: 1 }];
      setSelectedDevices(updatedDevices);

      // Update devcies counting

      setTotalDevices(
        updatedDevices
          .map((d: t_device) => (d.quantity ? d.quantity : 1))
          .reduce((a: number, b: number) => a + b)
      );
    }
  };

  // Remove device

  const handleClickOnDelete: t_handleClickOnDelete = (id) => {
    const updatedDevices = selectedDevices.filter(
      (d: t_device) => d._id !== id
    );
    setSelectedDevices(updatedDevices);

    // Update devcies counting

    let totalDevicesCount = 0;
    if (updatedDevices.length > 0) {
      totalDevicesCount = updatedDevices
        .map((d: t_device) => (d.quantity ? d.quantity : 1))
        .reduce((a: number, b: number) => a + b);
    }

    setTotalDevices(totalDevicesCount);
  };

  // Change quantity of device

  const handleOnDeviceQuantityChange: t_handleOnDeviceQuantityChange = (
    quantity,
    deviceId
  ) => {
    const deviceIndex = selectedDevices.findIndex(
      (d: t_device) => d._id === deviceId
    );

    // change the quantity of device if device exist

    if (deviceIndex >= 0) {
      const device = selectedDevices[deviceIndex];
      device.quantity = quantity ? parseInt(quantity) : undefined;

      // update device

      selectedDevices[deviceIndex] = device;
      setSelectedDevices(selectedDevices);

      // update total devices counting

      setTotalDevices(
        selectedDevices
          .map((d: t_device) => (d.quantity ? d.quantity : 0))
          .reduce((a: number, b: number) => a + b)
      );
    }
  };

  // Update zipcode

  const handleZipcodeOnChange: t_handleZipcodeOnChange = (e) => {
    const value = e.target.value;

    if (value.length < 6) {
      setZipcode(value);
    }
  };

  // Fetch providers on the behalf of specific speed

  const handleClickOnSuggestion:t_handleClickOnSuggestion = (speed) => {
    fetchProviders(speed);
  };

  // Handle Slides Moves

  const handleClickOnSlidesHandler:t_handleClickOnSlidesHandler = () => {
    // if active slide is one then calculate suggested speed of internet

    if (currentSlide === 1) {
      setCalculateSuggestion(calculateTotalSpeed());
    }

    // Go to next slide if active slide isn't our last slide

    if (currentSlide !== 3) {
      setCurrentSlide((prev) => prev + 1);
    }
  };
  const calculateTotalSpeed: t_claculateTotalSpeed = () => {
    const basicSpeed: number = selectedDevices
      .map((d: t_device) =>
        d.quantity ? parseInt(d.speed.basic) * d.quantity : 1
      )
      .reduce((a: number, b: number) => a + b);

    const averageSpeed: number = selectedDevices
      .map((d: t_device) =>
        d.quantity ? parseInt(d.speed.average) * d.quantity : 1
      )
      .reduce((a: number, b: number) => a + b);

    const proSpeed: number = selectedDevices
      .map((d: t_device) =>
        d.quantity ? parseInt(d.speed.pro) * d.quantity : 1
      )
      .reduce((a: number, b: number) => a + b);

    return [basicSpeed, averageSpeed, proSpeed];
  };

  // Reset suggestions

  const handleClickOnResetSuggestions:t_handleClickOnResetSuggestions = () => {
    setProviders([]);
  };

  // Move slides to backward

  const handleClickOnBackButton:t_handleClickOnBackButton = () => {
    if (currentSlide !== 1) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  const fetchProviders:t_fetchProviders = async (choosedSpeed: number) => {
    setLoading(true);
    setIsAllowToGo(false);
    try {
      const response = await getServices(zipcode, choosedSpeed);
      setProviders(response.providers);

      if (!response.providers || response.providers.length === 0) {
        alert(NOT_FOUND_ERROR);

        // Redirect on zipcode slide
        return setCurrentSlide(2);
      }

      // scroll to top

      const element = document.getElementById("down");
      if (element) {
        window.scrollTo(0, element.offsetTop);
      }
    } catch {
      alert(NOT_FOUND_ERROR);

      // Redirect on zipcode slide
      setCurrentSlide(2);
    } finally {
      setLoading(false);
      setIsAllowToGo(true);
    }
  };

  return (
    <section className={styles.providers_section} id="down">
      <div className={styles.seriveFilter_inner + " text-center container"}>
        <h1 className="heading__main" >
        Calculate Your Bandwidth According To Your Usage 
        </h1>
       
      </div>
      <div style={{ position: "relative" }}>
        <motion.div
          className={styles.main_text}
          animate={
            !loading && providers && providers.length > 0 ? "hide" : "show"
          }
          // @ts-ignore
          variants={cardVariant}
          initial={{ y: 100 }}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 50,
            damping: 15,
          }}
        >
          <div className={styles.instructions}>
            <h2>Bandwidth Calculator</h2>
            <h4>How Does it work?</h4>
            <p>
              Pro Tip: Don’t forget to consider lesser used devices like
              security systems, smart appliances, mesh networks, etc., in your
              household— every connection counts.
            </p>
            <h4>Why is it important?</h4>
            <p>
              Pro Tip: Don’t forget to consider lesser used devices like
              security
            </p>
          </div>
          <div className={styles.slides_wrapper}>
            <BackButton
              currentSlide={currentSlide}
              handleClickOnBackButton={handleClickOnBackButton}
            />
            <div className={styles.slides}>
              <SlideOne
                handleClickOnDelete={handleClickOnDelete}
                handleClickOnDevice={handleClickOnDevice}
                handleOnDeviceQuantityChange={handleOnDeviceQuantityChange}
                devices={devices}
                selectedDevices={selectedDevices}
                currentSlide={currentSlide}
              />
              <SlideTwo
                handleZipcodeOnChange={handleZipcodeOnChange}
                currentSlide={currentSlide}
                zipcode={zipcode}
              />
              <SlideThree
                calculateSuggestion={calculateSuggestion}
                suggestions={suggestions}
                handleClickOnSuggestion={handleClickOnSuggestion}
                loading={loading}
                currentSlide={currentSlide}
              />
            </div>
            <div className={styles.next_btn}>
              <NextButton
                currentSlide={currentSlide}
                isAllowToGo={isAllowToGo}
                loading={loading}
                handleClickOnSlidesHandler={handleClickOnSlidesHandler}
                width={width}
              />
              <Pagination
                currentSlide={currentSlide}
                paginateTitle={paginateTitle}
              />
            </div>
          </div>
        </motion.div>
        <Providers
          loading={loading}
          providers={providers}
          handleClickOnResetSuggestions={handleClickOnResetSuggestions}
        />
      </div>
    </section>
  );
};

export default ServiceProvider;
