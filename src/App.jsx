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

function App() {
  

  return (
    <>
      <Router>
      <Routes>
        <Route exact  path="/" element={<><Navbar/><Home/></>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
