import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Smartphone from './pages/Smartphone'
import Iphone from './pages/Iphone'
import SamsungGalaxy from './pages/SamsungGalaxy'
import GooglePixel from './pages/GooglePixel'
import SmartphoneAndroid from './pages/SmartphoneAndroid'
import SmartphoneAccessories from './pages/SmartphoneAccessories'

import Laptop from './pages/Laptop'
import Tablet from './pages/Tablet'
import Console from './pages/Console'
import Watch from './pages/Watch'

import Admin from './pages/Admin'
import Product from './pages/Product'

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Accueil */}
        <Route path="/" element={<Home />} />

        {/* Smartphones */}
        <Route path="/smartphone" element={<Smartphone />} />
        <Route path="/smartphone/iphone" element={<Iphone />} />
        <Route path="/smartphone/samsung" element={<SamsungGalaxy />} />
        <Route path="/smartphone/google-pixel" element={<GooglePixel />} />
        <Route path="/smartphone/android" element={<SmartphoneAndroid />}/>
        <Route path="/smartphone/accessoires" element={<SmartphoneAccessories />}/>

        {/* Ordinateurs portables */}
        <Route path="/laptop" element={<Laptop />} />

        {/* Tablettes */}
        <Route path="/tablet" element={<Tablet />} />

        {/* Consoles */}
        <Route path="/console" element={<Console />} />

        {/* Montres connectées */}
        <Route path="/watch" element={<Watch />} />

        {/* Administration */}
        <Route path="/admin" element={<Admin />} />
        <Route path="/product/:id" element={<Product />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App