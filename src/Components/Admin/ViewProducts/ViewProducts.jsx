import React, { useEffect, useState } from "react";
import styles from "./ViewProducts.module.scss";
import {
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../../../Firebase/config";
import { toast } from "react-toastify";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
const ViewProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = () => {
    try {
      const productsRef = collection(db, "products");
      const q = query(productsRef, orderBy("createdAt", "desc"));

      onSnapshot(q, (snapshot) => {
        const products = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setAllProducts(products);
      });
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <>
      <div className={styles.table}>
        <h2>All Products</h2>
        {allProducts.length === 0 ? (
          <p>Product list is empty!</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>s/n</th>
                <th>Image</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {allProducts.map((product, index) => {
                const { id, name, price, imageURL, category } = product;
                return (
                  <tr key={id}>
                    <td>{index + 1}</td>
                    <td>
                      <img
                        src={imageURL}
                        alt={name}
                        style={{ width: "100px" }}
                      />
                    </td>
                    <td>{name}</td>
                    <td>{category}</td>
                    <td>{`৳${price}`}</td>
                    <td className={styles.icons}>
                      <FaEdit size={20} color="green" />
                      &nbsp;
                      <FaTrashAlt size={18} color="red" />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};
export default ViewProducts;
