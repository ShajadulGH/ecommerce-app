import React from "react";
import { Link } from "react-router-dom";
import styles from "./Auth.module.scss";
import LoginImage from "../../assets/Images/register.jpg";
import { useState } from "react";
const Register = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email, password, confirmPassword);
  };
  return (
    <section className={`container ${styles.auth}`}>
      <div className={styles.form}>
        <h2>Register</h2>
        <form onSubmit={submitHandler}>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
            required
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            required
          />
          <input
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            placeholder="Confirm Password"
            required
          />
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
