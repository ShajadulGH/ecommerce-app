import React, { useEffect, useState } from "react";
import { imageData } from "./image-data";
import styles from "./slider.module.scss";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  let slideInterval;
  useEffect(() => {
    setCurrentSlide(0);
  }, []);
  useEffect(() => {
    const auto = () => {
      slideInterval = setInterval(nextSlide, 5000);
    };
    auto();
    return () => clearInterval(slideInterval);
  }, [slideInterval, currentSlide]);
  const slideLength = imageData.length;
  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };

  return (
    <div className={styles.slider}>
      <BsChevronLeft
        className={`${styles.arrow} ${styles.prev}`}
        onClick={prevSlide}
      />
      <BsChevronRight
        className={`${styles.arrow} ${styles.next}`}
        onClick={nextSlide}
      />

      {imageData.map((slide, index) => {
        const { image, heading, desc } = slide;
        return (
          <div
            key={index}
            className={
              index === currentSlide
                ? `${styles.slide} ${styles.current}`
                : styles.slide
            }
          >
            {index === currentSlide && (
              <>
                <img src={image} alt="slide" />
                <div className={styles.content}>
                  <h2>{heading}</h2>
                  <p>{desc}</p>
                  <hr />
                  <a href="#product" className="--btn --btn-primary">
                    Shop Now
                  </a>
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
