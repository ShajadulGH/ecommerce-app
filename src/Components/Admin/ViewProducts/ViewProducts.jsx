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
  return <div>ViewProducts</div>;
};

export default ViewProducts;
