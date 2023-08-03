import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../../Firebase/config";
import { Link, useParams } from "react-router-dom";
import styles from "./ProductDetails.module.scss";
import {
  ADD_TO_CART,
  CALCULATE_TOTAL_QUANTITY,
  DECREASE_CART,
} from "../../../Redux/Features/cartslice";
import { useDispatch } from "react-redux";
const ProductDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  console.log(id);
  useEffect(() => {
    getProduct();
  }, []);
  const getProduct = async () => {
    setIsLoading(true);
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);
    console.log(docSnap.data());
    setProduct({ ...docSnap.data() });
    setIsLoading(false);
  };
  console.log(product);
  const addToCart = (product) => {
    dispatch(ADD_TO_CART(product));
    dispatch(CALCULATE_TOTAL_QUANTITY());
  };
  const increaseProduct = (product) => {
    dispatch(ADD_TO_CART(product));
    dispatch(CALCULATE_TOTAL_QUANTITY());
  };
  const decreaseProduct = (product) => {
    dispatch(DECREASE_CART(product));
    dispatch(CALCULATE_TOTAL_QUANTITY());
  };
  return (
    <section>
      <div className={`container ${styles.product}`}>
        <h2>Product Details</h2>
        <div>
          <Link to="/#products">&larr; Back To Products</Link>
        </div>

        <div className={styles.details}>
          <div className={styles.img}>
            <img src={product?.imageURL} alt={product?.name} />
          </div>
          <div className={styles.content}>
            <h3>{product?.name}</h3>
            <p className={styles.price}>{`$${product?.price}`}</p>
            <p>{product?.desc}</p>
            <p>
              <b>SKU</b> {product?.id}
            </p>
            <p>
              <b>Brand</b> {product?.brand}
            </p>

            <div className={styles.count}>
              <button
                className="--btn"
                onClick={() => decreaseProduct(product)}
              >
                -
              </button>
              <p>
                <b>1</b>
              </p>
              <button
                className="--btn"
                onClick={() => increaseProduct(product)}
              >
                +
              </button>
            </div>
            <button
              className="--btn --btn-amazon"
              onClick={() => addToCart(product)}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
