import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Smartphone from './pages/Smartphone'
import Iphone from './pages/Iphone'
import Admin from './pages/Admin'
import Laptop from './pages/Laptop'
import Tablet from './pages/Tablet'
import Console from './pages/Console'
import Watch from './pages/Watch'
import SamsungGalaxy from './pages/SamsungGalaxy'


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/smartphone" element={<Smartphone />} />

        <Route path='/laptop' element={<Laptop/>} />

        <Route path='/tablet' element={<Tablet/>} />

         <Route path='/console' element={<Console/>} />

          <Route path='/watch' element={<Watch/>} />

        <Route path="/smartphone/iphone" element={<Iphone />}/>

        <Route path="/smartphone/samsung" element={<SamsungGalaxy />}/>

        <Route path="/admin" element={<Admin />} />
        

      </Routes>
    </BrowserRouter>
  )
}

export default App