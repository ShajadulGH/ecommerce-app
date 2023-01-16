import { BrowserRouter, Routes, Route } from "react-router-dom";
// Pages
import { Home, Contact } from "./Pages/ExportPages";
// Componets
import { Header, Footer } from "./Components/ExportComponents";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
