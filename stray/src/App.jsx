import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './app-scrollbar.css'
import './index.css'
import { Nav } from './components/Nav';
import {Home} from './pages/Home'
import {New} from './pages/New'
import {Shop} from './pages/Shop'
import {Cart} from './pages/Cart'
import { Footer } from "./components/Footer";
import { Copyright } from "./components/Copyright";
import { AboutUs } from "./pages/AboutUs";
import { ProductPage } from "./pages/ProductPage";


// Main-code
function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/shop"element={<Shop />} />
            <Route path="/cart"element={<Cart />}/>
            <Route path="/about"element={<AboutUs />}/>
            <Route path="/shop/product/:id" element={<ProductPage />} />
        </Routes>
        <Footer />
        <Copyright />
      </Router>
    </>
  );
}

export default App;
