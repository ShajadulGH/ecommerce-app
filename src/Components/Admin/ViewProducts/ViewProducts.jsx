import React, { useEffect } from "react";
import styles from "./ViewProducts.module.scss";
import Loader from "../../Loader/Loader";
import { deleteDoc, doc } from "firebase/firestore";
import { db, storage } from "../../../Firebase/config";
import { toast } from "react-toastify";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { deleteObject, ref } from "firebase/storage";
import Notiflix from "notiflix";
import { useDispatch } from "react-redux";
import { STORE_PRODUCTS } from "../../../Redux/Features/prouctsSlice";
import { Link } from "react-router-dom";
import FetchData from "../../../CustomHooks/FetchData";
const ViewProducts = () => {
  const { allProducts, isLoading } = FetchData("products");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(STORE_PRODUCTS(allProducts));
  }, [allProducts, dispatch]);

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
