import React from "react";
import { useSelector } from "react-redux";
import { selectEmail } from "../../Redux/Features/authSlice";
const AdminOnlyRoute = ({ children }) => {
  const userEmail = useSelector(selectEmail);
  if (userEmail == "skbkar98@gmail.com") {
    return children;
  } else {
    return null;
  }
};
export default AdminOnlyRoute;
