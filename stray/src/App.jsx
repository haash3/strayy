//router goes here routing between pages should be here
//not just the homepage every page
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Navbar } from './components/Nav';

// Main-code
function App() {
  return (
    <div>
      <Router>
        {/* marquee */}
        <Navbar />
        <Routes>
            <Route path="/"/>
            <Route path="/help"/>
            <Route path="/cart"/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
