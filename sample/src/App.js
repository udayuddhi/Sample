import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
// import "./Nav.css"


function App() {
  return (
    <div >
      <BrowserRouter>
         < Navbar />
         <Routes>
          <Route exact path="/" element={<Home />} />        
          <Route exact path="/ContactUs" element={<ContactUs />} />
          <Route exact path="/About" element={<About/>} />
         </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
