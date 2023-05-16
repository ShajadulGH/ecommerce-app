import React from "react";
import styles from "./AddProduct.module.scss";
import Card from "../../Card/Card";
import { useState } from "react";
const AddProduct = () => {
  const categories = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Electronics" },
    { id: 3, name: "Fashion" },
    { id: 4, name: "Phone" },
  ];
  const initialProduct = {
    name: "",
    imageURL: "",
    price: 0,
    category: "",
    brand: "",
    desc: "",
  };
  const [product, setProducts] = useState(initialProduct);
  const handleProductDetails = () => {};
  const handleProductImage = () => {};
  return (
    <>
      <div className={styles.product}>
        <h2>Add Product</h2>
        <Card extraCSS={styles.card}>
          <form>
            <label>Product name:</label>
            <input
              type="text"
              placeholder="Product name"
              required
              name="name"
              value={product.name}
              onChange={(e) => handleProductDetails(e)}
            />
            <label>Product Image:</label>
            <Card extraCSS={styles.group}>
              <div className={styles.progress}>
                <div
                  className={styles["progress-bar"]}
                  style={{ width: "50%" }}
                >
                  Uploading 50%
                </div>
              </div>
              <input
                type="file"
                accept="image/*"
                placeholder="Product Image"
                name="image"
                onChange={(e) => handleProductImage(e)}
              />
            </Card>
            <label>Product Price:</label>
            <input
              type="text"
              placeholder="Product name"
              required
              name="name"
              value={product.name}
              onChange={(e) => handleProductDetails(e)}
            />
            <label>Product Price:</label>
            <input
              type="text"
              placeholder="Product name"
              required
              name="name"
              value={product.name}
              onChange={(e) => handleProductDetails(e)}
            />
            <label>Product Category:</label>
            <select
              required
              name="category"
              value={product.category}
              onChange={(e) => handleProductDetails(e)}
            >
              <option value="" disabled>
                -- Choose Product Category --
              </option>
              {categories.map((category) => (
                <option key={category.id} value={category.name} disabled>
                  {category.name}
                </option>
              ))}
            </select>
            <label>Product Company/Brand:</label>
            <input
              type="text"
              placeholder="Product brand"
              required
              name="brand"
              value={product.brand}
              onChange={(e) => handleProductDetails(e)}
            />
            <label>Product Description:</label>
            <textarea
              name="desc"
              required
              value={product.desc}
              onChange={(e) => handleProductDetails(e)}
              cols="30"
              rows="10"
            ></textarea>
            <button className="--btn --btn-primary">Save Product</button>
          </form>
        </Card>
      </div>
    </>
  );
};

export default AddProduct;
