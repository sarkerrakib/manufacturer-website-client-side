import React from 'react';

const Service = ({service}) => {
    

    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl px-5">
            <figure class="px-8 pt-5">
                <img src={service.img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{service.name}</h2>
                <p>{service.description}</p>
                <p>Min-Order: {service.order}</p>
                <p>Unit-Price: {service.price}</p>
                <div class="card-actions">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Service;