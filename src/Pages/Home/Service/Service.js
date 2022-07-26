import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, name, img, description, price } = service;
    const navigate = useNavigate();

    const handleNavigate = (id) => {
        navigate(`/checkout/${id}`);
    };

    return (
        <div className='service'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <button onClick={() => handleNavigate(id)} className='btn btn-success'>Order Now: {name}</button>
        </div>
    );
};

export default Service;