import './App.css';
import KlarnaMPUI from './projects/klarna-mp-ui'
import Seb from './projects/seb'
import Home from './Home'
import Work from './Work'
import Header from './shell/Header'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <div id="landing-page">
        <Header />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/klarna-mp-ui" element={<KlarnaMPUI />} />
            <Route path="/seb" element={<Seb />} />
            <Route path="/work" element={<Work />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
