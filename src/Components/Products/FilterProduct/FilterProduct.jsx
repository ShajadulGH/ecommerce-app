import React from "react";
import styles from "./Filter.module.scss";
const Filter = () => {
  return (
    <div className={styles.filter}>
      <h4>Categories</h4>
      <div className={styles.category}>
        <button type="button">&#8250; All </button>
      </div>
      <h4>Brand</h4>
      <div className={styles.brand}>
        <select>
          <option value="ALL">All</option>
        </select>

        <h4>Price</h4>
        <p>1000</p>
        <div className={styles.price}>
          <input type="range" min="100" max="1000" />
        </div>
        <br />
        <button className="--btn --btn-amazon">Clear Filter</button>
      </div>
    </div>
  );
};

export default Filter;
