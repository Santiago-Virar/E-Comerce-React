import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductDetailPage from "./pages/ProductDetailPage";
import Header from "./components/organisms/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:productId" element={<ProductDetailPage />} />
        <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
      </Routes>
    </Router>
  );
};

export default App;