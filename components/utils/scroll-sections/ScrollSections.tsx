import React, { useEffect, useRef, useState } from "react";
import useScroll from "../../../hooks/use-scroll";
import { motion } from "framer-motion";

const ScrollSections = (props: any) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const { scroll, setScroll } = useScroll();
  const [scrollTo, setScrollTo] = useState(0);
  const [sectionsHeight, setSectionsHeight] = useState<number[]>([]);
  const [currentSection, setCurrentSection] = useState<number>(0);

  useEffect(() => {
    setSectionsHeight(
      props.children.map((ch: any) => {
        return parseInt(getComputedStyle(ch.ref.current).height);
      })
    );
    const totalHeight =
      sectionsHeight.length > 0
        ? sectionsHeight.reduce((a: number, b: number) => {
            return a + b;
          })
        : null;
    const wrapper = wrapperRef.current;
    if (wrapper) {
      wrapper.style.height = totalHeight + "px";
    }
  }, []);
  useEffect(() => {
    if (scroll == "down") {
      if (currentSection < sectionsHeight.length - 1) {
        let y = scrollTo - sectionsHeight[currentSection];
        setScrollTo(y);
        setCurrentSection((prev: number) => {
          return prev < sectionsHeight.length - 1 ? prev + 1 : prev;
        });
      }
    } else if (scroll == "up") {
      if (currentSection > 0) {
        let currentSect = currentSection - 1;
        let y = scrollTo + sectionsHeight[currentSect];
        setScrollTo(y);
        setCurrentSection(currentSect);
      }
    }
  }, [scroll]);

  return (
    <motion.div
      ref={wrapperRef}
      animate={{
        y: scrollTo,
      }}
      onAnimationStart={() => {
        setScroll("stop");
      }}
      onAnimationComplete={() => {
        setScroll("stop");
      }}
      transition={{
        duration: 0.04 * sectionsHeight[currentSection],
        type: "spring",
        stiffness: 20,
      }}
    >
      {props.children}
    </motion.div>
  );
};

export default ScrollSections;
