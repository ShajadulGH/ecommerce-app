import { BrowserRouter, Routes, Route } from "react-router-dom";
// Pages
import { Home, Contact } from "./Pages/ExportPages";
import { Login, Register, Reset } from "./Pages/ExportPages";
// Componets
import { Header, Footer } from "./Components/ExportComponents";
function App() {
  return (
    <>
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
