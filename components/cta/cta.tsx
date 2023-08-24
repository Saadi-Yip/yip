import React, { useState } from "react";
import style from "./cta.module.css";

const CTA = ({ show, setShow }: any) => {
  const [formData, setFormData] = useState({ number: "", email: "" });
  const [error, setError] = useState('');
  const changeHandler = (event: any) => {
    setError('');
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const submitHandler = async (event: any) => {
    setError('')
    event.preventDefault();
    const apiUrl = "https://backend-yip.cyclic.app/cta";
    const requestBody = JSON.stringify(formData);
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: requestBody,
    };
    const data:any = await fetch(apiUrl, requestOptions);
    const response = await data.json();
    if(data.status === 200) {
      console.log(response);
      setShow(!show);
    } else {
      console.log(response);
      setError(response.message)
    }
      
  };
  return (
    <>
      <div className={style.main}>
        <div className={style.container}>
          <div className={style.container_close} onClick={()=>setShow(!show)}>&times;</div>
         
          <form className={style.form}>
            <h1>SAVE 30%</h1>
            <p>
              Introducing Our Limited-Time Offer: Get 30% OFF on All Internet
              Packages for 3 Months!
            </p>
            <input type="text" onChange={changeHandler} value = {formData.number} name = "number" placeholder="Phone" />
            <input type="email" onChange={changeHandler} value = {formData.email} name = "email" placeholder="Email" />
            <button className={style.btn1} onClick={submitHandler}>UNLOCK YOUR DISCOUNT</button>
            <br></br>
            {error && <em className={style.error}>{error}</em>}
            <button className={style.btn2} onClick={()=>setShow(!show)}>No Thanks</button>
          </form>
          <img
            src="/popup.png"
            alt="image"
          /> 
        </div>
      </div>
    </>
  );
};

export default CTA;
