import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/frontend/Home';
import About from './components/frontend/About';
import Services from './components/frontend/Services';
import './assets/css/style.scss'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
          <Routes>
             <Route path='/' element={<Home/>}/>
             <Route path='/about' element={<About/>}/>
             <Route path='/services' element={<Services/>}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
