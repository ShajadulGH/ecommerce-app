import React from "react";
import styles from "./AddProduct.module.scss";
import Card from "../../Card/Card";
import { useState } from "react";
import { db, storage } from "../../../Firebase/config";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { toast } from "react-toastify";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../Loader/Loader";
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
    price: "",
    category: "",
    brand: "",
    desc: "",
  };
  const [product, setProduct] = useState(initialProduct);
  const [uploadProgress, setUploadProgreass] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  const handleProductDetails = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };
  const handleProductImage = (e) => {
    const file = e.target.files[0];
    const storageRef = ref(storage, `images/${Date.now()}${file.name}`);
    // Upload the file and metadata
    const uploadTask = uploadBytesResumable(storageRef, file);
    console.log(uploadTask);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgreass(progress);
      },
      (error) => {
        // Handle unsuccessful uploads
        toast.error(error.message);
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setProduct({ ...product, imageURL: downloadURL });
        });
        toast.success("Image uploaded successfully");
      }
    );
  };
  const addProduct = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // import { collection, addDoc } from "firebase/firestore";

    // Add a new document with a generated id.
    try {
      const docRef = addDoc(collection(db, "products"), {
        ...product,
        price: Number(product.price),
        createdAt: Timestamp.now().toDate(),
      });
      setIsLoading(false);
      setProduct(initialProduct);
      toast.success("Product saved successfully");
      navigate("/admin/view-products");
    } catch (error) {
      toast.error(error.message);
    }
  };
  const detectForm = (id, title1, title2) => {
    if (id === "ADD") {
      return title1;
    }
    return title2;
  };
  return (
    <>
      {isLoading && <Loader />}
      <div className={styles.product}>
        <h2>{detectForm(id, "Add Product", "Edit Product")}</h2>
        <Card extraCSS={styles.card}>
          <form onSubmit={addProduct}>
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
              {uploadProgress === 0 ? null : (
                <div className={styles.progress}>
                  <div
                    className={styles["progress-bar"]}
                    style={{ width: `${uploadProgress}%` }}
                  >
                    {uploadProgress < 100
                      ? `Uploading ${uploadProgress}%`
                      : `Uploaded ${uploadProgress}%`}
                  </div>
                </div>
              )}

              <input
                type="file"
                accept="image/*"
                placeholder="Product Image"
                name="image"
                onChange={(e) => handleProductImage(e)}
              />
              {product.imageURL === "" ? null : (
                <input disabled type="text" value={product.imageURL} />
              )}
            </Card>
            <label>Product Price:</label>
            <input
              type="number"
              placeholder="Product name"
              required
              name="price"
              value={product.price}
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
                <option key={category.id} value={category.name}>
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
