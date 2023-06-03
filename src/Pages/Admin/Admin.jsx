import React from "react";
import styles from "./Admin.module.scss";
import Navbar from "../../Components/Admin/Navbar/Navbar";
import Home from "../../Components/Admin/Home/Home";
import AddProduct from "../../Components/Admin/AddProduct/AddProduct";
import ViewProducts from "../../Components/Admin/ViewProducts/ViewProducts";
import ViewOrders from "../../Components/Admin/ViewOrders/ViewOrders";
import { Route, Routes } from "react-router-dom";

const Admin = () => {
  return (
    <div className={styles.admin}>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <div className={styles.content}>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="add-product/:id" element={<AddProduct />} />
          <Route path="view-products" element={<ViewProducts />} />
          <Route path="orders" element={<ViewOrders />} />
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
