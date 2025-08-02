import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/synergyinnovations/Home';
import AboutUsRoute from './Components/synergyinnovations/Routes/AboutUsRoute';
import ContactUsRoute from './Components/synergyinnovations/Routes/ContactUsRoute';
import HomeSS from './Components/synergysolutions/HomeSS';
import ServicesRoutes from './Components/synergysolutions/Routes/ServicesRoutes';
import Projects from './Components/synergysolutions/Routes/ProjectsRoute';
import TeamRoute from './Components/synergysolutions/Routes/TeamRoute';
import ContactRoute from './Components/synergysolutions/Routes/ContactRoute';
import AboutRoute from './Components/synergysolutions/Routes/AboutRoute';
import HomeSC from './Components/synergyclub/HomeSC';

function App() {
  return (
    <Router>
        
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="synergy-innovations/about" element={<AboutUsRoute  />} />
        <Route path="synergy-innovations/contact" element={<ContactUsRoute />} />
        <Route path="/synergy-solutions" element={<HomeSS />} />
        <Route path="/synergy-solutions/services" element={<ServicesRoutes />} />
        <Route path="/synergy-solutions/projects" element={<Projects />} />
        <Route path="/synergy-solutions/team" element={<TeamRoute />} />
        <Route path="/synergy-solutions/contact" element={<ContactRoute />} />
        <Route path="/synergy-solutions/about" element={<AboutRoute />} />
        <Route path="/synergy-club" element={<HomeSC />} />
        
      </Routes>
    </Router>
  );
}

export default App
