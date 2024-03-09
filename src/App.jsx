import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { Toaster } from "react-hot-toast";
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import WhyBarley from './Components/WhyBarley/WhyBarley';
import Footer from './Components/Footer/Footer';
import Contact from './Components/ContactUs/Contact';
import About from './Components/About/About';
import Quality from './Components/Quality/Quality';
import Products from './Components/Products/Products';
import Reviews from './Components/Reviews/Reviews';

function App() {
  

  return (
    <div className="outerbox">
      <Router>
      <Routes>
        <Route exact  path="/" element={<><Navbar/><Home/><WhyBarley/><Reviews/><Footer/></>} />
        <Route exact  path="/contact" element={<><Navbar/><Contact/><Footer/></>} />
        <Route exact  path="/about" element={<><Navbar/><About/><Reviews/><Footer/></>} />
        <Route exact  path="/quality" element={<><Navbar/><Quality/><Footer/></>} />
        <Route exact  path="/products" element={<><Navbar/><Products/><Footer/></>} />
      </Routes>
    </Router>
    </div>
  )
}

export default App
