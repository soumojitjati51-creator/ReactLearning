import React from 'react'
import Navbar from '../components/Navbar'
import Home from '../pages/Home'
import About from "../pages/About";
import Contact from "../pages/Contact"
import Product from "../pages/Product"
import Footer from '../components/Footer'
import { Route,Routes } from "react-router-dom";
import NotFound from '../pages/NotFound';
import Women from '../pages/Women';
import Men from '../pages/Men'
import Kids from '../pages/Kids';
import Courses from '../pages/Courses';
import CourseDetails from '../pages/CourseDetails';
import Nav2 from '../components/Nav2';

const App = () => {
  return (
    <div className='min-h-screen bg-black text-white'>
      <Navbar/>
        <Nav2/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Courses' element={<Courses/>}/>
          <Route path='/Courses/:id' element={<CourseDetails/>}/>
          <Route path='/Product' element={<Product/>}>
            <Route path='Women' element={<Women/>}/>
            <Route path='Men' element={<Men/>}/>
            <Route path='Kids' element={<Kids/>}/>
          </Route>

          <Route path='*' element={<NotFound/>}/>
          {/* //for 404 */}
        </Routes>
      <Footer/>
    </div>
  )
}

export default App