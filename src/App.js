import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';

import Home from './Pages/Home';
import Error from './Pages/Error';
import Login from './Pages/Login';
import Cart from './Pages/Cart';
import Ourproduct from './Pages/Ourproduct';
import Account from './Pages/Acount';
import Checkout from './Pages/Checkout';
import Contact from './Pages/Contact';
import Wishlist from './Pages/Wishlist';
import ProductDetailsPage from './Pages/ProductDetailsPage';


function App() {
  return (  
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/error" element={<Error />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/Cart" element={<Cart />} /> 
          <Route path="/Ourproduct" element={<Ourproduct />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Acount" element={<Account />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/Wishlist" element={<Wishlist />} />
          <Route path="/ProductDetailsPage" element={<ProductDetailsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
