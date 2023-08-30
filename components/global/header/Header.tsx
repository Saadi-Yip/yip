import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

//data
import states from "../../../data/state.json";

import useDimensions from "../../../hooks/use-dimensions";
import NavLinkDropdown from "./NavLinkDropdown";
import Img from "../../utils/image/Img";
// style
import styles from "./header.module.css";
import OfferBanner from "../../offer-banner/OfferBanner";

const wrapperVariants = {
  default: {
    opacity: 0,
    height: 0,
    transition: {
      delay: 0.3,
      ease: "easeInOut",
    },
  },
  move: {
    opacity: 1,
    height: "50.625vh",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};
const mobileVariants = {
  default: {
    height: 0,
    opacity: 0,
    zIndex: "-999",
    transition: {
      delay: 0.2,
      ease: "easeInOut",
    },
  },
  move: {
    opacity: 1,
    zIndex: "1",
    height: "auto",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};
const listVarient = {
  default: {
    width: "22px",
    transition: {
      delay: 0.2,
      ease: "easeInOut",
    },
  },
  move: {
    width: 0,
    transition: {
      delay: 0.2,
      ease: "easeInOut",
    },
  },
};
const breakpoint = {
  mobile: 600,
};
const Header = () => {
  const [isHover, setIsHover] = useState(false);
  const [isWrapperOpen, setIsWrapperOpen] = useState(false);
  const router = useRouter();
  const allowRoutes = [
    "/blog",
    "/blog/[slug]",
    "/bandwidth-calculator-tool",
    "/speed-testing-tool",
    "/privacy-policy",
    "/internet-providers-in-your-area",
    "/cable-tv-providers-in-your-area",
    "/phone-services-providers",
    "/state/[name]",
  ];
  const path = router.pathname;
  const isAllow = allowRoutes.includes(path) || path === "/" ? true : false;
  const bgColor = { background: path == "/blog/[slug]" ? "#fff" : "#cdcecf" };
  const dropdownColor = { background: path == "/blog/[slug]" ? "#fff" : "#d9d9d9" };
  // mobile menu
  const { width } = useDimensions();
  const [isHide, setIsHide] = useState(false);

  const navLinks = [
    {
      text: "Spectrum",
      url: "/spectrum",
    },
    {
      text: "Xfinity",
      url: "/xfinity",
    },
    {
      text: "Cox",
      url: "/cox",
    },
    {
      text: "AT&T",
      url: "/att",
    },
    {
      text: "Century Link",
      url: "/",
    },
    {
      text: "Optimum",
      url: "/optimum",
    },

    {
      text: "Windstream",
      url: "/",
    },
    {
      text: "Mediacom",
      url: "/",
    },
  ];
  const tools = [
    { text: "Bandwidth Calculator", url: "/bandwidth-calculator-tool" },
    { text: "Speed Testing", url: "/speed-testing-tool" },
  ];

  const services = [
    { text: "Internet", url: "/internet-providers-in-your-area" },
    { text: "Cable", url: "/cable-tv-providers-in-your-area" },
    { text: "Phone", url: "/phone-services-providers" },
  ];

  const state = [
    { text: "California", url: "california" },
    { text: "", url: "" },
  ];

  // Handlers
  const navToggle = () => {
    setIsHide(!isHide);
  };
  if (isAllow) {
    return (
      <> 

        <header className={styles.main_header} style={bgColor}>
          {/* top bar */}
          <div className={styles.top_bar}>
            <p>CALL FROM 9:00 AM TO 8:00 PM (ETD) </p>
            <Link href="tel:855-862-7178" legacyBehavior id="head-mobile-call-to-action">
              <a>(855) 862-7178</a>
            </Link>
          </div>
          {/* menu bar */}
          <div className={styles.nav_container}>
            <div className={styles.mainConatiner + " container "}>
              <nav className="flex justify-content-between">
                <div className={styles.left_side}>
                  <div className={styles.logo_col}>
                    <Link href="/" legacyBehavior>
                      <a className={styles.link + " " + styles.rgiht_side}>
                        <Img
                          src={`${process.env.NEXT_PUBLIC_IMAGES_URL}logo.svg`}
                          alt="internet service providers, internet service providers in my area, cable service providers, wireless internet service providers, business internet service providers"
                          sizes={{
                            default: [7.5, 6],
                            mobile: [19.4, 16],
                          }}
                        />
                      </a>
                    </Link>
                  </div>
                  <div className={styles.nav_col}>
                    {/* mobile menu icon */}
                    <div className={styles.nav_btns} onClick={navToggle}>
                      <motion.span
                        variants={listVarient}
                        animate={isHide ? "move" : "default"}
                      ></motion.span>
                      <span></span>
                      <motion.span
                        variants={listVarient}
                        animate={isHide ? "move" : "default"}
                      ></motion.span>
                    </div>
                    <div>
                      {width < breakpoint.mobile ? (
                        // mobile menu
                        <motion.div
                          className={styles.mobile_list}
                          variants={mobileVariants}
                          style={dropdownColor}
                          initial={"default"}
                          animate={isHide ? "move" : "default"}
                        >
                          <Link href="/" legacyBehavior>
                            <a
                              className={styles.link + " decoration-none"}
                              onClick={() => {
                                setIsHide(false);
                              }}
                            >
                              Coverage Maps
                            </a>
                          </Link>

                          <Link href="/blog" legacyBehavior>
                            <a
                              className={styles.link + " decoration-none"}
                              onClick={() => setIsHide(false)}
                            >
                              Blogs
                            </a>
                          </Link>
                          <NavLinkDropdown
                            label="Provider"
                            links={navLinks}
                            onAnimationStart={() => {
                              setIsWrapperOpen(true);
                              setIsHide(true);
                            }}
                            onAnimationEnd={() => {
                              setIsWrapperOpen(false);
                              setIsHide(false);
                            }}
                          />
                          <NavLinkDropdown
                            label="Tools"
                            links={tools}
                            onAnimationStart={() => {
                              setIsWrapperOpen(true);
                              setIsHide(true);
                            }}
                            onAnimationEnd={() => {
                              setIsWrapperOpen(false);
                              setIsHide(false);
                            }}
                          />
                          <NavLinkDropdown
                            label="Services"
                            links={services}
                            onAnimationStart={() => {
                              setIsWrapperOpen(true);
                              setIsHide(true);
                            }}
                            onAnimationEnd={() => {
                              setIsWrapperOpen(false);
                              setIsHide(false);
                            }}
                          />
                          <NavLinkDropdown
                            label="Find in Your State "
                            links={states}
                            onAnimationStart={() => {
                              setIsWrapperOpen(true);
                              setIsHide(true);
                            }}
                            onAnimationEnd={() => {
                              setIsWrapperOpen(false);
                              setIsHide(false);
                            }}
                          />
                        </motion.div>
                      ) : (
                        // desktop menu
                        <div className={styles.nav__inner}>
                          <NavLinkDropdown
                            label="Services"
                            links={services}
                            onAnimationStart={() => setIsWrapperOpen(true)}
                            onAnimationEnd={() => setIsWrapperOpen(false)}
                          />

                          <NavLinkDropdown
                            label="Provider"
                            links={navLinks}
                            onAnimationStart={() => setIsWrapperOpen(true)}
                            onAnimationEnd={() => setIsWrapperOpen(false)}
                          />
                          <NavLinkDropdown
                            label="Find in Your State "
                            links={states}
                            onAnimationStart={() => setIsWrapperOpen(true)}
                            onAnimationEnd={() => setIsWrapperOpen(false)}
                          />
                          <NavLinkDropdown
                            label="Tools"
                            links={tools}
                            onAnimationStart={() => setIsWrapperOpen(true)}
                            onAnimationEnd={() => setIsWrapperOpen(false)}
                          />
                          <Link href="/blog" legacyBehavior>
                            <a className={styles.link + " decoration-none"}>
                              Blog
                            </a>
                          </Link>
                          <Link href="tel:+18558627178" legacyBehavior>
                            <a>
                              <button className={styles.plan_item}>
                                <div className={styles.dialer}>
                                  <span>
                                    <p>CALL FROM 9:00 AM TO 8:00 PM (ETD) </p>
                                    <h6 id = "head-call-to-action">(855) 862-7178</h6>
                                  </span>
                                </div>
                              </button>
                            </a>
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </nav>
              <motion.div
                onHoverStart={() => setIsWrapperOpen(false)}
                onHoverEnd={() => setIsWrapperOpen(false)}
                className={styles.menu_wrapper}
                style={dropdownColor}
                variants={wrapperVariants}
                animate={isWrapperOpen ? "move" : "default"}
              ></motion.div>
            </div>
          </div>
        </header>
      </>
    );
  }
  return <></>;
};

export default Header;
