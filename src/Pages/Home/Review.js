import React from 'react';

const Review = ({review}) => {
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl image-full">
            <figure><img src="https://www.dahuasecurity.com/asset/upload/uploads/soft/20220428/success1.png" alt="camera" /></figure>
            <div class="card-body">
                <h2 class="text-xl">{review.title}</h2>
                <p>{review.details}</p>
                
            </div>
        </div>
    );
};

export default Review;