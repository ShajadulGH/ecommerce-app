import { BrowserRouter, Routes, Route } from "react-router-dom";
// Pages
import { Home, Contact } from "./Pages/ExportPages";
import { Login, Register, Reset } from "./Pages/ExportPages";
// Componets
import { Header, Footer } from "./Components/ExportComponents";
// Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
