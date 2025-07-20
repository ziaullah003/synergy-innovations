import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/synergyinnovations/Header';
import Home from './Components/synergyinnovations/Home';
import About from './Components/synergyinnovations/About';
import Contact from './Components/synergyinnovations/Contact';
import Footer from './Components/synergyinnovations/Footer'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element= {<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App
