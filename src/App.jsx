import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { useEffect, useMemo, useState } from "react";

import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import WhyBarley from './Components/WhyBarley/WhyBarley';
import Footer from './Components/Footer/Footer';
import Contact from './Components/ContactUs/Contact';
import About from './Components/About/About';
import Quality from './Components/Quality/Quality';
import Products from './Components/Products/Products';
import Reviews from './Components/Reviews/Reviews';
import Faq from './Components/Faq/Faq';
import Temp from './Temp';
import Choices from './Components/Choices/Choices';
import Health from './Components/Health/Health';
import Recipes from './Components/Recipes/Recipes';

function App() {
  

  return (
    <div className="outerbox">
      <Router>
      <Routes>
        <Route exact  path="/" element={<><Navbar/><Temp /><Products /> <Choices /> <Health /> <Recipes /><Faq /><Reviews/><Footer/></>} />
        <Route exact  path="/contact" element={<><Navbar/><Contact/><Footer/></>} />
        <Route exact  path="/about" element={<><Navbar/><About/><Reviews/><Footer/></>} />
        <Route exact  path="/quality" element={<><Navbar/><Quality/><Recipes/><Footer/></>} />
        <Route exact  path="/products" element={<><Navbar/><Products/><Choices /><Footer/></>} />
      </Routes>
    </Router>
    </div>
  )
}

export default App
