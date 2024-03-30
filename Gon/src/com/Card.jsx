import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = (props) => {
    const navigate = useNavigate();

    const goToHDFC = () => {
        navigate('/user-details');
    }

    return (
        <div className="card">
            <img src={props.imgsrc} className="card-img-top c-img" alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{props.bName}</h5>
                <p className="card-text">{props.disc}</p>
                <button className="btn btn-primary" onClick={goToHDFC}>Click to Apply</button>
            </div>
        </div>
    );
}

export default Card;
