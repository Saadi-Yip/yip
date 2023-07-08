import React from 'react'
import CoxBundls from './OptimumBundls'
import style from "./OptimumBundls.module.css";

function OptimumBox() {
  const data=[
    {

    }
  ]
  return (
    <div className={style.Cox_child}>
    <CoxBundls
     text="Optimum internet 300"
     price="$40 " 
     month="/mo"
     everybody="Download speeds up to 300 Mbps"
     list="Whole Home smart Wi-Fi"
     list1="No Data Caps"
     list2="No Annual Contracts"
     p="For 12 months. Plus taxes, fees and other charges. Includes Auto Pay and Paperless Billing"
     btn="(855) 927-4803"
    />
  <CoxBundls
     text="Optimum Double Play"
     price="$115 " 
     month="/mo"
     everybody="Internet 300 & Core TV with 220+ channels"
     list="4k Ultra HD content"
     list1="Voice-Activated Remote provided"
     list2="Whole Home Wi-Fi"
     p="For 12 months. Plus taxes, fees and other charges. Includes Auto Pay and Paperless Billing"
     btn="(855) 927-4803"
    />
  <CoxBundls
     text="Optimum Triple Play"
     price="$130 " 
     month="/mo"
     everybody="Internet 300, Phone & Core TV with 220+ channels"
     list="Whole Home Wi-Fi"
     list1="4K Ultra HD content"
     list2="Unlimited nationwide calling"
     p="For 12 months. Plus taxes, fees and other charges. Includes Auto Pay and Paperless Billing"
     btn="(855) 927-4803"
    />
  </div>
  )
}

export default OptimumBox