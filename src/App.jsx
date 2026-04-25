import { Routes, Route } from 'react-router-dom';
import './App.css';
import { StoreProvider } from './context/StoreContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import CommunityPage from './pages/CommunityPage';
import CartPage from './pages/CartPage';
import NotFound from './pages/NotFound';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <StoreProvider>
      <div className="app">
        <Navbar />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/comunidad" element={<CommunityPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </StoreProvider>
  );
}

export default App;
