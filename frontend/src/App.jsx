import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Smartphone from './pages/Smartphone'
import Iphone from './pages/Iphone'


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/smartphone" element={<Smartphone />} />

        <Route path="/smartphone/iphone" element={<Iphone />}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App