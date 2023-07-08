import React, { useEffect, useState } from "react";

const useScroll = () => {
  const [scroll, setScroll] = useState<"stop" | "up" | "down">("stop");
  useEffect(() => {
    function getScroll(e: any) {
      if (e.deltaY > 0) {
        setScroll("down");
      } else if (e.deltaY < 0) {
        setScroll("up");
      }
    }
    window.addEventListener("wheel", getScroll);

    return () => {
      window.removeEventListener("wheel", getScroll)
    };
  }, []);
  return { scroll, setScroll };
};

export default useScroll;
