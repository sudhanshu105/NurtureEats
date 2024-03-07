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

function App() {
  

  return (
    <>
      <Router>
      <Routes>
        <Route exact  path="/" element={<><Navbar/><Home/><WhyBarley/><Footer/></>} />
        <Route exact  path="/contact" element={<><Navbar/><Contact/><Footer/></>} />
        <Route exact  path="/about" element={<><Navbar/><About/><Footer/></>} />
        <Route exact  path="/quality" element={<><Navbar/><Quality/><Footer/></>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
