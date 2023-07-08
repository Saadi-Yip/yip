import React, { useEffect, useState } from "react";

const useCoordinates = () => {
  const [coordinates, setCoordinates] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    function getCoordinates(e: any) {
      if(e.clientX && e.pageY)
      setCoordinates({
        x: e.clientX,
        y: e.pageY,
      });
    };
    window.addEventListener("mousemove", getCoordinates);

    return () => window.removeEventListener("mousemove", getCoordinates);
  });

  return coordinates;
};

export default useCoordinates;
