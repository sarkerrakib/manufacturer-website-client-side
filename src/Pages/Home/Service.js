import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({service}) => {
    const {_id, name, img, description, price, order} = service;
    const navigate = useNavigate();

    const navigateToServiceDetail = id =>{
        navigate(`/service/${id}`);
    }
    

    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl px-5">
            <figure class="px-8 pt-5">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p>{description}</p>
                <p>Min-Order: {order}</p>
                <p>Unit-Price: {price}</p>
                <div class="card-actions">
                    <button onClick={() => navigateToServiceDetail(_id)} class="btn btn-primary text-white"><a href="http://localhost:3000/purchase">Buy Now</a> </button>
                </div>
            </div>
        </div>
    );
};

export default Service;