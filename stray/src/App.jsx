import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './app-scrollbar.css'
import { Nav } from './components/Nav';
import { MarqueeFeature } from './components/MarqueeFeature';
import {Home} from './pages/Home'
import {New} from './pages/New'
import {Shop} from './pages/Shop'
import {Cart} from './pages/Cart'
import { Footer } from "./components/Footer";
import { Copyright } from "./components/Copyright";


// Main-code
function App() {
  return (
    <>
      <Router>
        {/* <MarqueeFeature /> */}
        <Nav />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/shop"element={<Shop />} />
            <Route path="/new"element={<New />}/>
            <Route path="/cart"element={<Cart />}/>
        </Routes>
        <Footer />
        <Copyright />
      </Router>
    </>
  );
}

export default App;
