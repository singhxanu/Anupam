import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Bank1 = () => {
  const [select, setSelect] = useState('');
  const [income, setIncome] = useState('');
  const [creditscore , setCreditScore] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    if ( parseInt(income) > 30000 && creditscore >= 750) {
      navigate('/card-details');
    } else {
      alert('You do not qualify for this card');
    }
  };

  return (
    <>
      <div className="page-2" style={{marginTop:"50px"}}>
        <div className="input-group mb-3">
          <label className="input-group-text" htmlFor="inputGroupSelect01">Occupation</label>
          <select value={select} onChange={(e) => setSelect(e.target.value)} className="form-select" id="inputGroupSelect01">
            <option value="1">Salaried</option>
            <option value="2">Self Employed</option>
          </select>
        </div>
        <div className="input-group mb-3">
          <label className="input-group-text" htmlFor="inputGroupSelect01">Products</label>
          <select value={select} onChange={(e) => setSelect(e.target.value)} className="form-select" id="inputGroupSelect01">
            <option value="1">Credit Cards</option>
            <option value="2">Loans</option>
          </select>
        </div>
        <div className="row g-3">
          <div className="col">
            <input type="number" value={income} onChange={(e) => setIncome(e.target.value)} className="form-control" placeholder="Enter your Income" aria-label="Income"/>
          </div>
        </div>
        <div  className="row mb-3">
        <div className="col">
          <input type="number" value={creditscore} onChange={(e)=> setCreditScore(e.target.value)} className="form-control" placeholder="Enter your credit score" aria-label="Income"/>
        </div>
        </div>
        <div>
          <button className="btn btn-primary" onClick={handleSubmit}>Check eligiblity</button>
        </div>
      </div>
    </>
  );
};

export default Bank1;
