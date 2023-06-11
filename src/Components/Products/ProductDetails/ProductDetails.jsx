import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../../Firebase/config";
import { Link, useParams } from "react-router-dom";
import styles from "./ProductDetails.module.scss";
const ProductDetails = () => {
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
              <button className="--btn">-</button>
              <p>
                <b>1</b>
              </p>
              <button className="--btn">+</button>
            </div>
            <button className="--btn --btn-amazon">ADD TO CART</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
