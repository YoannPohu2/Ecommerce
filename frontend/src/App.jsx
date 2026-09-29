import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Smartphone from './pages/Smartphone'

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/smartphone" element={<Smartphone />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App