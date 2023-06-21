import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { imageData } from "./image-data";
import styles from "./SliderTest.module.scss";
const SliderTest = () => {
  return (
    <Carousel autoPlay infiniteLoop interval={2000} showArrows>
      {imageData.map((slide, index) => {
        const { image, heading, desc } = slide;
        return (
          <div key={index}>
            <img src={image} />
            <div className={styles.content}>
              <h2>{heading}</h2>
              <p>{desc}</p>
              <hr />
              <a href="#product" className="--btn --btn-amazon">
                Shop Now
              </a>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
};

export default SliderTest;
