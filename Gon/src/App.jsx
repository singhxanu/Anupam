
import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from './com/Nav.jsx';
import Header from './com/Header.jsx';
import './Index.css'
import Card from './com/Card.jsx';

import { BrowserRouter as Router ,Routes , Route } from 'react-router-dom';

const App=()=> {





  return (
    <>
   
  
     <Header/>
     <div className="card-cont">
  <Card 
  imgsrc="./Image/ic1.png"
  bName ="HDFC Bank"
  disc ="HDFC is in 1st position for issuing credit card in INDIA" 
  Gocard1
  />
  <Card  imgsrc="./Image/sbi.jpg"
  bName ="SBI Bank"
  disc ="SBI is in 2nd position for issuing credit card in INDIA" />
  <Card  imgsrc="./Image/axis.jpg"
  bName ="Axis Bank"
  disc ="Axis is in 3rd position for issuing credit card in INDIA" />
  <Card  imgsrc="./Image/icici.jpeg"
  bName ="ICICI Bank"
  disc ="ICICI is in 4th position for issuing credit card in INDIA" />
  
  </div>
    
    </>
  )
}

export default App;
