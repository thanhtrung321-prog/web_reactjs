import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Introduce = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return <div data-aos="fade-in"></div>;
};

export default Introduce;
