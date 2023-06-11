import React from "react";
import styles from "./Home.module.scss";
import Products from "../../Components/Products/Products";
import Slider from "../../Components/Slider/Slider";
const Home = () => {
  return (
    <div>
      <Slider />
      <Products />
    </div>
  );
};

export default Home;
