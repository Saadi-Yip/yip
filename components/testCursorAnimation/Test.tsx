import React from "react";
import CursorAnimation from "../utils/bg-cursor-animation/CursorAnimation";

const Test = () => {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems:"center",
        position: "relative",
        height:"100vh"
      }}
    >
      <CursorAnimation />
      <h1>Helping you to find quality internet providers</h1>
    </section>
  );
};

export default Test;
