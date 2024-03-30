import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import Bank1 from './com/Bank1.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './com/Footer.jsx';
import HdfcCard from './com/HdfcCard.jsx';
import Nav from './com/Nav.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/user-details" element={<Bank1 />} />
        <Route path ="/card-details" element={<HdfcCard/>}/>
      </Routes>
      <Nav/>
      <Footer/>
    </Router>
  </React.StrictMode>
);
