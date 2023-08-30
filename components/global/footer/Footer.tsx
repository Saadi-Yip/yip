import styles from "./footer.module.css";
import Link from "next/link";
import Linkanimate from "./Linkanimate";
import ScrollUpBtn from "../../utils/scroll-up/ScrollUpBtn";
import { useRouter } from "next/router";
import Img from "../../utils/image/Img";
import FooterContact from "./FooterContact";


export const Footer = () => {

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
    "/california",
    "/state/[name]"
  ];
  const path = router.pathname;
  const bgColor = {background: path == "/blog/[slug]" ? "#fff" : "#cdcecf"};
  const isAllow = allowRoutes.includes(path) || path === "/" ? true : false;
  if (isAllow)
    return (
      <footer className={styles.footer_bg} style={ bgColor }>
        <ScrollUpBtn />
        <div className={styles.footer_row}>
          <div className={`${styles.footer_col} ${styles.footer_linkrow}`}>
            <div className={styles.footer_link}>
              <h4>All Providers</h4>
              <div className={styles.footer_linkInner}>
                <Linkanimate url="/spectrum" text="Spectrum" />
                <Linkanimate url="/xfinity" text="Xfinity" />
                <Linkanimate url="/" text="Cox" />
                <Linkanimate url="/att" text="AT&T" />
                <Linkanimate url="/" text="Century Link" />
                <Linkanimate url="/" text="Windstream" />
                <Linkanimate url="/" text="Mediacom" />
              </div>
            </div>
            <div className={styles.footer_link}>
              <h4>Pages</h4>
              <div className={styles.footer_linkInner}>
                <Linkanimate url="/" text="Home" />
                <Linkanimate url="/blog" text="Blog" />
                <Linkanimate url="/privacy-policy" text="Privacy Policy" />
              </div>
            </div>
          </div>
          <div className={styles.footer_col}>
            <div className={styles.footer_linkAddress}>
              <h4>Address</h4>
              <div className={styles.footerSocialinner}>
                <Link href="tel:+18558627178" legacyBehavior>
                  <a>
                    <Img 
                      src={`${process.env.NEXT_PUBLIC_IMAGES_URL}svg/call.svg`} 
                      alt="call" 
                      sizes={{
                        default: [2,1.042],
                        mobile: [5.042,5.042],
                      }} 
                    />
                    <p id = "footer-call-to-action">(855) 862-7178</p>
                  </a>
                </Link>
                <Link href="mailto:sales@leilanitech.com" legacyBehavior>
                  <a>
                    <Img 
                      src={`${process.env.NEXT_PUBLIC_IMAGES_URL}svg/message.svg`} 
                      alt="email" 
                      sizes={{
                        default: [2,1.042],
                        mobile: [5.042,5.042],
                      }} 
                    />
                    <p>sales@leilanitech.com</p>
                  </a>
                </Link>
                <a
                  href="http://maps.google.com/?q=740 W Little York Rd Suite B, Houston, TX 77091"
                  target="_"
                >
                  <Img
                   src={`${process.env.NEXT_PUBLIC_IMAGES_URL}svg/location.svg`}
                   alt="location" 
                   sizes={{
                    default: [2,1.042],
                    mobile: [5.042,5.042],
                    }} 
                  />
                  <p>
                    ​740 W Little York Rd Suite B,
                    <br /> Houston, TX 77091, USA
                  </p>
                </a>
                <div className={styles.footer__textarea}>
                  <FooterContact />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.disclaimer}>
            <p>Disclaimer: <span>YourInternetProvider</span> uses trademarks solely for the purpose of describing products and services offered by their respective owners, who retain full ownership of the trademarks.</p>
          </div>
        <div className={styles.footer_services} style={ bgColor }>
          <div className={styles.footer_serviceCol}>
            <p>Leilani inc, all rights reserved</p>
          </div>
          <div className={styles.footer_serviceCol}>
            <div className={styles.footerCol_inner}>
              <Link href="/privacy-policy" legacyBehavior>
                <a>Privacy Policy</a>
              </Link>
            </div>
          </div>
          <div className={styles.footer_serviceCol}>
            <Link href="https://www.facebook.com/yourinternetproviderusa"  legacyBehavior>
              <a target="_blank">
                <div className={styles.footer_icon}>
                <Img
                  src={`${process.env.NEXT_PUBLIC_IMAGES_URL}svg/facebook.svg`} 
                  alt="right arrow" 
                  sizes={{
                    default: [2,1.042],
                    mobile: [5.042,5.042],
                  }} 
                />
                </div>
              </a>
            </Link>
            <Link href="https://www.instagram.com/your.internetprovider/" legacyBehavior>
              <a target="_blank">
                <div className={styles.footer_icon}>
                  <Img 
                    src="/social/insta.png"
                    alt="right arrow" 
                    sizes={{
                      default: [1.1,1.042],
                      mobile: [5.042,5.042],
                    }}
                  />
                </div>
              </a>
            </Link>
            <Link href="https://www.linkedin.com/company/yourinternetprovider" legacyBehavior>
              <a target="_blank">
                <div className={styles.footer_icon}>
                  <Img
                    src="/social/linkedin.png" 
                    alt="right arrow" 
                    sizes={{
                      default: [1.2,1.042],
                      mobile: [5.042,5.042],
                    }}
                  />
                </div>
              </a>
            </Link>
          </div>
        </div>
      </footer>
    );
  return <></>;
};
