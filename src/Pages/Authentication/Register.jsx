import React from "react";
import { Link } from "react-router-dom";
import styles from "./Auth.module.scss";
import LoginImage from "../../assets/Images/register.jpg";
const Register = () => {
  return (
    <section className={`container ${styles.auth}`}>
      <div className={styles.form}>
        <h2>Register</h2>
        <form>
          <input type="text" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />
          <button type="submit" className="--btn --btn-amazon --btn-block">
            Register
          </button>
        </form>
        <span className={styles.register}>
          <p>Already have an account?</p>
          <Link to="/login">Login</Link>
        </span>
      </div>
      <div className={styles.img}>
        <img src={LoginImage} alt="Login" width={400} />
      </div>
    </section>
  );
};

export default Register;
