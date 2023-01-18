import React from "react";
import { Link } from "react-router-dom";
import styles from "./Auth.module.scss";
import { FaGoogle } from "react-icons/fa";
import LoginImage from "../../assets/Images/login.jpg";
const Login = () => {
  return (
    <section className={`container ${styles.auth}`}>
      <div className={styles.img}>
        <img src={LoginImage} alt="Login" width={400} />
      </div>
      <div className={styles.form}>
        <h2>Login</h2>

        <form>
          <input type="text" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="--btn --btn-amazon --btn-block">
            Login
          </button>
          <div className={styles.links}>
            <Link to="/reset">Reset Password</Link>
          </div>
          <p>-- or --</p>
        </form>
        <button className="--btn --btn-amazon --btn-block">
          <FaGoogle className={styles.google} color="#000000" /> Login With
          Google
        </button>
        <span className={styles.register}>
          <p>Don't have an account?</p>
          <Link to="/register">Register</Link>
        </span>
      </div>
    </section>
  );
};

export default Login;
