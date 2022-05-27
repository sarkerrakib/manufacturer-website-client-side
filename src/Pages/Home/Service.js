import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({service}) => {
    const {_id, name, img, description, price, order} = service;
    const navigate = useNavigate();

    const navigateToServiceDetail = id =>{
        navigate(`/services/${id}`);
    }
    

    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl px-5">
            <figure className="px-8 pt-5">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <p>Min-Order: {order}</p>
                <p>Unit-Price: {price}</p>
                <div className="card-actions">
                    <button onClick={() => navigateToServiceDetail(_id)} className="btn btn-primary text-white">Buy Now </button>
                </div>
            </div>
        </div>
    );
};

export default Service;