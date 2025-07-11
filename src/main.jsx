import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//import {  BrowserRouter as Route, Router, Routes } from 'react-router-dom'
//import Home from './Home.jsx'
//import About from './About.jsx'
//import Contact from './Contact.jsx'
//import Error from './Error.jsx'
//import { All, Men, Products, Women } from './Products.jsx'
//import Navbar from './Navbar.jsx'
import Students from './Students.jsx'
import Stud_Details from './Stud_Details.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App /> 
    
    <Navbar/>
      <Routes>

       {/* <Route path='/' element={ <Home/> }></Route>
        <Route path='/about' element={ <About/> }></Route>
        <Route path='/contact' element={ <Contact/> }></Route>
        <Route path='*' element={ <Error/> }></Route>
        <Route path='/products' element={ <Products/> }></Route>
        <Route index element={ <All/> }></Route>
        <Route path='/products/men' element={ <Men/> }></Route>
        <Route path='/products/women' element={ <Women/> }></Route>*/}
        
        <Route path='/students' element={<Students/>}></Route>
        <Route path='/Stud_Details/:id' element={ <Stud_Details/> }></Route>


      </Routes>
   </BrowserRouter>
  </StrictMode>
)
