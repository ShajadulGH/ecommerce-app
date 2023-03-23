import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Auth.module.scss";
import LoginImage from "../../assets/Images/reset2.jpg";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../Firebase/config";
import { toast } from "react-toastify";
import Loader from "../../Components/Loader/Loader";
const Reset = () => {
  const [email, setEmail] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const resetPassword = (e) => {
    e.preventDefault();
    setIsLoading(true);
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        toast.success("Check your email for password reset link");
        setIsLoading(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage);
        setIsLoading(false);
      });
  };
  return (
    <>
      {isLoading && <Loader />}
      <section className={`container ${styles.auth}`}>
        <div className={styles.form}>
          <h2>Reset Password</h2>
          <form onSubmit={resetPassword}>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Email"
              required
            />

            <button type="submit" className="--btn --btn-amazon --btn-block">
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
    </>
  );
};

export default Reset;
