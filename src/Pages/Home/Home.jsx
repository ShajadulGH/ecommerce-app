import React from "react";
import styles from "./Home.module.scss";
import Products from "../../Components/Products/Products";
import Slider from "../../Components/Slider/Slider";
import { useEffect } from "react";
import SliderTest from "../../Components/Slider/SliderTest";
const Home = () => {
  const url = window.location.href;
  const scrollToProducts = () => {
    if (url.includes("#products")) {
      window.scrollTo({
        top: 750,
        behavior: "smooth",
      });
    }
  };
  useEffect(() => {
    setTimeout(() => {
      scrollToProducts();
    }, 100);
  }, []);
  return (
    <div>
      <SliderTest />
      {/* <Slider /> */}
      <Products />
    </div>
  );
};

export default Home;
