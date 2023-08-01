import React from "react";
import styles from "./ProductItem.module.scss";
import Card from "../../Card/Card";
import { Link } from "react-router-dom";
import {
  ADD_TO_CART,
  // CALCULATE_TOTAL_QUANTITY,
} from "../../../Redux/Features/cartslice";
import { useDispatch } from "react-redux";
const ProductItem = ({ product, grid, id, name, price, desc, imageURL }) => {
  console.log(product);
  const dispatch = useDispatch();
  const shortenText = (text, n) => {
    if (text.length > n) {
      const shortenedText = text.substring(0, n).concat("...");
      return shortenedText;
    }
    return text;
  };
  const addToCart = (product) => {
    dispatch(ADD_TO_CART(product));
    // dispatch(CALCULATE_TOTAL_QUANTITY());
  };
  return (
    <Card extraCSS={grid ? `${styles.grid}` : `${styles.list}`}>
      <Link to={`/product-details/${id}`}>
        <div className={styles.img}>
          <img src={imageURL} alt={name} />
        </div>
      </Link>
      <div className={styles.content}>
        <div className={styles.details}>
          <p>{`$${price}`}</p>
          <h4>{shortenText(name, 18)}</h4>
        </div>
        {!grid && <p className={styles.desc}>{shortenText(desc, 200)}</p>}

        <button
          className="--btn --btn-amazon"
          onClick={() => addToCart(product)}
        >
          Add To Cart
        </button>
      </div>
    </Card>
  );
};

export default ProductItem;
