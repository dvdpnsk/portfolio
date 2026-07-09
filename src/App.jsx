import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Info from './pages/Info'
import Contact from './pages/Contact'
import ProjectDetail from './pages/ProjectDetail'
import LightRays from './components/LightRays'

function App() {
  return (
    <BrowserRouter>
      {/* Seitenweiter Lichtstrahl-Hintergrund (fix, hinter allen Seiten) */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="#93d3dd"
          raysSpeed={0.6}
          lightSpread={0.5}
          rayLength={3}
          fadeDistance={1}
          saturation={1}
          followMouse
          mouseInfluence={0.4}
          noiseAmount={0}
          distortion={0}
        />
      </div>

      <div className="relative" style={{ zIndex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
