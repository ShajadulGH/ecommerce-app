import React from "react";
import styles from "./Navbar.module.scss";
import { FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { selectUserName } from "../../../Redux/Features/authSlice";
import { NavLink } from "react-router-dom";

const activeLink = ({ isActive }) => (isActive ? `${styles.active}` : "");
const Navbar = () => {
  const userName = useSelector(selectUserName);
  return (
    <div className={styles.navbar}>
      <div className={styles.user}>
        <FaUserCircle size="40" color="#ffff" />
        <h4>{userName}</h4>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/admin/home" className={activeLink}>
              Home{" "}
            </NavLink>
          </li>

          <li>
            {" "}
            <NavLink to="/admin/add-product" className={activeLink}>
              Add Product{" "}
            </NavLink>
          </li>

          <li>
            {" "}
            <NavLink to="/admin/view-products" className={activeLink}>
              All Products{" "}
            </NavLink>
          </li>

          <li>
            {" "}
            <NavLink to="/admin/orders" className={activeLink}>
              Orders
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
