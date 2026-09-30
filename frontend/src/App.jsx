import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Smartphone from './pages/Smartphone'
import Iphone from './pages/Iphone'
import Admin from './pages/Admin'
import Laptop from './pages/Laptop'


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/smartphone" element={<Smartphone />} />
        
        <Route path='/laptop' element={<Laptop/>} />

        <Route path="/smartphone/iphone" element={<Iphone />}/>

        <Route path="/admin" element={<Admin />} />
        

      </Routes>
    </BrowserRouter>
  )
}

export default App