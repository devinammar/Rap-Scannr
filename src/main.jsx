import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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