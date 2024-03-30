//router goes here routing between pages should be here
//not just the homepage every page
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Nav } from './components/Nav';
import { MarqueeFeature } from './components/MarqueeFeature';

// Main-code
function App() {
  return (
    <>
      <Router>
        <MarqueeFeature />
        <Nav />
        <Routes>
            <Route path="/"/>
            <Route path="/men"/>
            <Route path="/women"/>
            <Route path="/new-arrivals"/>
            <Route path="/help"/>
            <Route path="/cart"/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
