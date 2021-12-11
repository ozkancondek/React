import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { Welcome } from "./pages/Welcome";
import { Products } from "./pages/Products";
import { ProductDetail } from "./pages/ProductDetail";
import { MainHeader } from "./components/MainHeader";

function App() {
  return (
    <div className="App">
      <h1>Lesson: React Router </h1>
      <MainHeader />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/" />} /> {/*  home page */}
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/products" element={<Products />} />
          <Route path="productDetail" element={<ProductDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
