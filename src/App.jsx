

import RootLayout from './shared/components/layouts/RootLayout'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import { Routes, Route } from 'react-router-dom'
import './App.css'

import Homepage from './pages/Home'
import Aboutpage from './pages/About'
import Carspage from './pages/Cars'
import Carpage from './pages/Car'
import AddCarpage from './pages/AddCar'
import NotFoundpage from './pages/NotFound'

const App = () => {

  return (
    <Routes>
      <Route element={<RootLayout/>}>
        <Route path="/" element={<Homepage/>} />
        <Route path="/about" element={<Aboutpage/>} />
        <Route path="/cars/:id" element={<Carpage/>} />
        <Route path="/cars/add" element={<AddCarpage/>} />
        <Route path="/cars" element={<Carspage/>} />
      </Route>
        <Route path="*" element={<NotFoundpage/>} />
    </Routes>
  )
}

export default App
