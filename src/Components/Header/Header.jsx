import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../Firebase/config";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { isUserActive, removeActiveUser } from "../../Redux/Features/authSlice";
import { OnLoggedIn, OnLoggedOut } from "../ShowHideLinks/ShowHideLinks";
const logo = (
  <div className={styles.logo}>
    <Link to="/">
      <h2>
        <span>Shop</span>.in
      </h2>
    </Link>
  </div>
);
const cart = (
  <span className={styles.cart}>
    <Link to="/cart">
      Cart
      <AiOutlineShoppingCart size={20} />
      <p>0</p>
    </Link>
  </span>
);
const activeLink = ({ isActive }) => (isActive ? `${styles.active}` : "");

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [displayUser, setDisplayUser] = useState();
  const dispatch = useDispatch();
  // const [toggleMenu, setToggleMenu] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const hideMenu = () => {
    setShowMenu(false);
  };
  const logoutHandler = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        toast.success("Succesfully Loged Out");
        navigate("/login");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        //User is sugned in
        console.log(user);
        if (!user.displayName) {
          const tempUser = user.email.substring(0, user.email.indexOf("@"));
          const uName = tempUser.charAt(0).toUpperCase() + tempUser.slice(1);
          setDisplayUser(uName);
        } else {
          setDisplayUser(user.displayName);
        }
        dispatch(
          isUserActive({
            email: user.email,
            userName: user.displayName,
            userID: user.uid,
          })
        );
      } else {
        // User is signed out
        dispatch(removeActiveUser());
        setDisplayUser("");
      }
    });
  }, []);
  return (
    <header className={styles.fixed}>
      <div className={styles.header}>
        {logo}
        <nav
          className={
            showMenu ? `${styles["show-nav"]}` : `${styles["hide-nav"]}`
          }
        >
          <div
            className={
              showMenu
                ? `${styles["nav-wrapper"]} ${styles["show-nav-wrapper"]}`
                : `${styles["nav-wrapper"]}`
            }
            onClick={hideMenu}
          ></div>
          <ul onClick={hideMenu}>
            <li className={styles["logo-mobile"]}>{logo}</li>
            <li>
              <NavLink to="/" className={activeLink}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={activeLink}>
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className={styles["header-right"]} onClick={hideMenu}>
            <span className={styles.links}>
              <OnLoggedIn>
                <a href="#home" style={{ color: "#ff9900" }}>
                  {/* <FaUserCircle size={16} /> */}
                  Hi, {displayUser}
                </a>
              </OnLoggedIn>
              <OnLoggedOut>
                <NavLink to="/login" className={activeLink}>
                  Login
                </NavLink>
              </OnLoggedOut>
              <OnLoggedOut>
                <NavLink to="/register" className={activeLink}>
                  Register
                </NavLink>
              </OnLoggedOut>
              <OnLoggedIn>
                <NavLink to="/my-orders" className={activeLink}>
                  My Orders
                </NavLink>
              </OnLoggedIn>
              <OnLoggedIn>
                <NavLink to="/login" onClick={logoutHandler}>
                  Log Out
                </NavLink>
              </OnLoggedIn>
            </span>
            {cart}
          </div>
        </nav>
        <div className={styles["menu-icon"]}>
          <HiOutlineMenuAlt3 size={28} onClick={toggleMenu} />
        </div>
      </div>
    </header>
  );
};
export default Header;
