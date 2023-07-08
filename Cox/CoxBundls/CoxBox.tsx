import React from 'react'
import CoxBundls from './CoxBundls'
import style from "./CoxBundls.module.css";

function CoxBox() {
  const data=[
    {

    }
  ]
  return (
    <div className={style.Cox_child}>
    <CoxBundls
     text="Cox Internet Essential"
     price="$55.00 " 
     month="/mo"
     everybody="Everbody Low Price.No Term Contract"
     list="Download speeds up to 100 Mbps"
     list1="Includes FREE Cox Security Suite"
     list2="24/7 Technical Support"
     list3="FREE Cloud Drive"
     list4="Panoramic Wifi for zero dead spots"
     btn="(855) 862-7178"
    />
  <CoxBundls
     text="Cox Internet Essential"
     price="$55.00 " 
     month="/mo"
     everybody="Everbody Low Price.No Term Contract"
     list="Download speeds up to 100 Mbps"
     list1="Includes FREE Cox Security Suite"
     list2="24/7 Technical Support"
     list3="FREE Cloud Drive"
     list4="Panoramic Wifi for zero dead spots"
     btn="1-844-572-2228"
    />
  <CoxBundls
     text="Cox Internet Essential"
     price="$55.00 " 
     month="/mo"
     everybody="Everbody Low Price.No Term Contract"
     list="Download speeds up to 100 Mbps"
     list1="Includes FREE Cox Security Suite"
     list2="24/7 Technical Support"
     list3="FREE Cloud Drive"
     list4="Panoramic Wifi for zero dead spots"
     btn="1-844-572-2228"
    />
  </div>
  )
}

export default CoxBox