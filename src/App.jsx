import React from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { Route,Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Services from './components/Services'
import HomePage from './pages/HomePage';


const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Navbar/>
       <Routes>
           <Route path="/"  element={<HomePage/>}/>
           <Route path="/about"  element={<About/>} />
           <Route path="/projects"  element={<Projects/>}/>
           <Route path="/services"  element={<Services/>} />
           <Route path="/contact"  element={<Contact/>} />
       </Routes>
    </div>
  )
}

export default App
