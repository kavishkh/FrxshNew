import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Catalog from './pages/Catalog';
import NewCollection from './pages/NewCollection';
import ProductDetail from './pages/ProductDetail';
import FutureCollection from './pages/FutureCollection';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/new-collection" element={<NewCollection />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/future-collection" element={<FutureCollection />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App