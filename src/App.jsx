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

function App() {
  

  return (
    <>
      <Router>
      <Routes>
        <Route exact  path="/" element={<><Navbar/><Home/><WhyBarley/><Footer/></>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
