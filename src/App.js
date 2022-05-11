import './App.css';
import React from "react";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './NavBar';
import Home from './Home'; 
import About from './About';
import Gallery from './Gallery';
import Projects from './Projects';


function App() {
  return (
    
    <div className="App">
    <Router>
      
      <NavBar />
        
      <Routes>  
        <Route exact path="/" element = {<Home />}/>
        <Route path ="/about" element= {<About  />}/>
        <Route exact path="/gallery" element= {<Gallery  />}/>
        <Route path="/projects" element= {<Projects  />} />
       </Routes>          
        
    </Router>
    </div>
  );
}

export default App;
