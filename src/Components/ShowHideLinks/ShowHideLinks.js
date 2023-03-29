import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../Redux/Features/authSlice";
export const OnLoggedIn = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  console.log(isLoggedIn);
  if (isLoggedIn) {
    return children;
  }
  return null;
};
export const OnLoggedOut = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  if (!isLoggedIn) {
    return children;
  }
  return null;
};
