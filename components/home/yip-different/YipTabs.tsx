import React, { useState } from "react";
import YipTabBox from "./YipTabBox";

type Props = {
  data: { text: any; heading: string }[];
};

const YipTabs = ({data}:Props) => {
  const [activeTab, setActiveTab] = useState<boolean | number>(false);

  
  return (
    <div>
      {data.map((t, i) => (
        <YipTabBox
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

export default YipTabs;
