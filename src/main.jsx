import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home';
import { Trackanalysis } from './pages/trackanalysis';
import { Rapbattle } from './pages/rapbattle';
import { About } from './pages/about';
import './main.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/trackanalysis" element={<Trackanalysis />}/>
        <Route path="/rapbattle" element={<Rapbattle />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
    </Router>
  </StrictMode>,
)