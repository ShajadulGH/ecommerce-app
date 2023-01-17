import React from "react";
import styles from "./Footer.module.scss";
const date = new Date();
const currentYear = date.getFullYear();
const Footer = () => {
  return (
    <div className={styles.footer}>&copy; {currentYear} All Right Reserved</div>
  );
};
export default Footer;
