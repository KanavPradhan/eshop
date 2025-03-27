import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute"; // Ensure the correct path

import AboutPage from './pages/AboutPage/index.jsx';
import ContactPage from './pages/ContactPage/index.jsx';
import HomePage from './pages/HomePage/index.jsx';
import LoginPage from './pages/LoginPage/index.jsx';
import ProductDetailPage from './pages/ProductDetailPage/index.jsx';
import ProductPage from './pages/ProductPage/index.jsx';
import RegisterPage from './pages/RegisterPage/index.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<ProtectedRoute Component={ProductPage} />} />
        <Route path='/products/detail/:id' element={<ProtectedRoute Component={ProductDetailPage} />} />
        <Route path='/about' element={<ProtectedRoute Component={AboutPage} />} />
        <Route path='/contact' element={<ProtectedRoute Component={ContactPage} />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
