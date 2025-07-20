import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/synergyinnovations/Home';
import AboutUsRoute from './Components/synergyinnovations/Routes/AboutUsRoute';
import ContactUsRoute from './Components/synergyinnovations/Routes/ContactUsRoute';
import HomeSS from './Components/synergysolutions/HomeSS';


function App() {
  return (
    <Router>
        
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="synergy-innovations/about" element={<AboutUsRoute  />} />
        <Route path="synergy-innovations/contact" element={<ContactUsRoute />} />
        <Route path="synergy-solutions" element={<HomeSS />} />
      </Routes>
    </Router>
  );
}

export default App
