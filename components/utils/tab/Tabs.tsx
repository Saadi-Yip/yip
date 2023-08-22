import React, { useState } from "react";

import styles from "./tab.module.css";
import TabBox from "./TabBox";

type Props = {
  data: { text: string; heading: string }[];
};

const Tab = ({data}:Props) => {
  const [activeTab, setActiveTab] = useState<boolean | number>(false);

  
  return (
    <div>
      {data.map((t, i) => (
        <TabBox
          key={i.toString()}
          text={t.text}
          heading={t.heading}
          active={activeTab === i ? true : false}
          handleOnClick={() => {
            if(activeTab !== i){
              return setActiveTab(i);
            }
            setActiveTab(false);
          }}
        />
      ))}
    </div>
  );
};

export default Tab;
