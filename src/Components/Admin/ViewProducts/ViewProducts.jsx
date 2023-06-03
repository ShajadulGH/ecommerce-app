import React, { useEffect, useState } from "react";
import styles from "./ViewProducts.module.scss";
import Loader from "../../Loader/Loader";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db, storage } from "../../../Firebase/config";
import { toast } from "react-toastify";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { deleteObject, ref } from "firebase/storage";
import Notiflix from "notiflix";
import { useDispatch } from "react-redux";
import { GET_PRODUCTS } from "../../../Redux/Features/prouctsSlice";
import { Link } from "react-router-dom";
const ViewProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = () => {
    setIsLoading(true);

    try {
      const productsRef = collection(db, "products");
      const q = query(productsRef, orderBy("createdAt", "desc"));

      onSnapshot(q, (snapshot) => {
        const products = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setAllProducts(products);
        dispatch(
          GET_PRODUCTS({
            products,
          })
        );
      });
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message);
    }
  };
  // Delete Product
  const deleteProduct = async (id, imageURL) => {
    try {
      await deleteDoc(doc(db, "products", id));
      const imageRef = ref(storage, imageURL);
      await deleteObject(imageRef);
      toast.success("Succesfully deleted product!");
    } catch (error) {
      toast.error(error.message);
    }
  };
  const confirmDelete = (id, imageURL) => {
    Notiflix.Confirm.show(
      "Delete Product",
      "Do you want to delete?",
      "Delete",
      "Cancel",
      function okCb() {
        deleteProduct(id, imageURL);
      },
      function cancelCb() {
        console.log("Canceled!");
      },
      {
        width: "320px",
        borderRadius: "8px",
        titleColor: "black",
        okButtonBackground: "red",
      }
    );
  };
  return (
    <>
      {isLoading && <Loader />}
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
                      <Link to={`/admin/add-product/${id}`}>
                        <FaEdit size={20} color="green" />
                        &nbsp;
                      </Link>
                      <FaTrashAlt
                        size={18}
                        color="red"
                        onClick={() => confirmDelete(id, imageURL)}
                      />
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
