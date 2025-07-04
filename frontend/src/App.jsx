import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/frontend/Home';
import About from './components/frontend/About';
import Services from './components/frontend/Services';
import './assets/css/style.scss'
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Projects from './components/frontend/Projects';
import Blogs from './components/frontend/Blogs';
import Contact from './components/frontend/Contact';
import FrequentAsk from './components/frontend/FrequentAsk';





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <BrowserRouter>
          <Header/>
          <Routes>
             <Route path='/' element={<Home/>}/>
             <Route path='/about' element={<About/>}/>
             <Route path='/services' element={<Services/>}/>            
             <Route path='/projects' element={<Projects/>}/>
             <Route path='/blogs' element={<Blogs/>}/>
             <Route path='/FAQs' element={<FrequentAsk/>}/>
             <Route path='/contact' element={<Contact/>}/>
          </Routes> 
          <Footer/>
      </BrowserRouter>
     
    </>
  )
}

export default App
