import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './app-scrollbar.css'
import { Nav } from './components/Nav';
import { MarqueeFeature } from './components/MarqueeFeature';
import {Home} from './pages/home/Home'
import {New} from './pages/new/New'
import {Shop} from './pages/shop/Shop'
import {Cart} from './pages/cart/Cart'
import {Help} from './pages/help/Help'


// Main-code
function App() {
  return (
    <>
      <Router>
        <MarqueeFeature />
        <Nav />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/shop"element={<Shop />} />
            <Route path="/new"element={<New />}/>
            <Route path="/help"element={<Help />}/>
            <Route path="/cart"element={<Cart />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
