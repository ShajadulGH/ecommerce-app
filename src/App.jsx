import { BrowserRouter, Routes, Route } from "react-router-dom";
// Pages
import {
  Login,
  Register,
  Reset,
  Admin,
  Home,
  Contact,
} from "./Pages/ExportPages";
// Componets
import { Header, Footer, ProductDetails } from "./Components/ExportComponents";
// Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminOnlyRoute from "./Components/AdminOnlyRoute/AdminOnlyRoute";
function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<Reset />} />
          <Route
            path="/admin/*"
            element={
              <AdminOnlyRoute>
                <Admin />
              </AdminOnlyRoute>
            }
          ></Route>
          <Route path="/product-details/:id" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
