import React from 'react';
import useDimensions from '../../../hooks/use-dimensions';
import YipTabs from '../../home/yip-different/YipTabs';
import Img from '../../utils/image/Img';
import BandwidthToolsText from './BandwidthToolsText';
import styles from "./description.module.css";

type tool = {
  icon :string;
  heading:string;
  text:string
}
type props = {
  mobileData :tool[]
}

const HowWorks = ({mobileData}:props) => {
  const {width} = useDimensions();
    const devices = [
        {
          heading: "Enter your Device",
          text: " Click the bandwidth calculator option under the tool menu selection. Choose the 'Add Devices' field. The cursor will become active and the list of devices will appear. Choose a device and enter the desired number of devices by typing them in. To prevent errors, double-check your entry. This option allows for the selection of several devices.",
        },
        {
          heading: "Enter Your zipcode",
          text: "The Next button will lead you to the zipcode field after you enter the number of devices on the YIP. Choose the field where your zipcode is required to be entered. Once the cursor is active, you can begin typing your zipcode. Verify the accuracy of your entry once again. Use the backspace key to fix errors if you make them. To see the option for internet speed, click the next button, if you encounter any issues while entering your zipcode, you may want to reach out to the website's customer support team for assistance.",
        },
        {
          heading: "compare the speed",
          text: "This phase displays three internet speed suggestions based on the user's chosen devices. Minimum option shows the internet speed if the usage is very basic i.e. personal use on phone or laptop (less video streaming). The second option (Average) is for customers who stream and download videos frequently. For those that require high speed internet for gaming, live streaming, etc., the third option (Maximum) is available. To get a list of the providers offering that bundle, click the 'See Provider' button.",
        },
        {
          heading: "Order",
          text: "After selecting the speed plan, “See provider” button will display a list of all the providers offering that packages. Choose the internet package that best suits your needs. Consider factors such as internet speed, data caps, contract length, and pricing. Each provider's helpline number is listed at the bottom of the section. Call the number to place a package plan order.",
        },
      ];
  return (
    <section>
      <BandwidthToolsText text="How it Works?" />
      <div className={styles.itWorks_bg}>
        <div className={styles.itWorks_row}>
          <div className={styles.itWorks_col}>
            {
              width < 600 ? 
              (<div>
                  <ul className={styles.features}>
                    {mobileData.map((f:tool, i: number) => (
                      <li key={i.toString()}>
                        <div className={styles.image}>
                          <Img
                            src={f.icon}
                            alt={f.heading}
                            sizes={{
                              default: [0,0],
                              mobile: [16,11],
                            }}
                          />
                        </div>
                        <div style={{ flexBasis: " 84%", marginLeft: "3%" }}>
                          <h3>{f.heading}</h3>
                          <p>{f.text}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
              </div>)
              :  
              <YipTabs data={devices} />
            }
          </div>
          <div className={styles.itWorks_col_img}>
            <Img 
              src={width && (width >= 600 ? "https://next.thepic.store/yourinternetprovider-bandwidth-tool.webp" : "https://next.thepic.store/mobile.webp") || ""} 
              alt="online bandwidth calculator, wireless bandwidth calculator, streaming bandwidth calculator, free bandwidth calculator, bandwidth calculator tool"
              sizes={{
                default: [47,26],
                mobile: [88.4,110],
              }}
            />
          </div>
        </div>
      </div>
     
    </section> 
  )
}

export default HowWorks
