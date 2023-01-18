import React from "react";
import { Link } from "react-router-dom";
import styles from "./Auth.module.scss";
import LoginImage from "../../assets/Images/reset.jpg";
const Reset = () => {
  return (
    <section className={`container ${styles.auth}`}>
      <div className={styles.form}>
        <h2>Reset Password</h2>
        <form>
          <input type="text" placeholder="Email" required />

          <button type="submit" className="--btn --btn-danger --btn-block">
            Reset Password
          </button>
          <span className={styles.links}>
            <p>
              <Link to="/login">Login</Link>
            </p>
            <p>
              <Link to="/register">Register</Link>
            </p>
          </span>
        </form>
      </div>
      <div className={styles.img}>
        <img src={LoginImage} alt="Login" width={400} />
      </div>
    </section>
  );
};

export default Reset;
