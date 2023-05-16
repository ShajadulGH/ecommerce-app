import React from "react";
import styles from "./Card.module.scss";
const Card = ({ children, extraCSS }) => {
  return <div className={`${styles.card} ${extraCSS}`}>{children}</div>;
};

export default Card;
