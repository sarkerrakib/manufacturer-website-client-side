import React from 'react';

const Review = ({review}) => {
    return (
        <div className=" card lg:max-w-lg bg-base-100 shadow-xl image-full text-center">
            <figure><img src="https://www.dahuasecurity.com/asset/upload/uploads/soft/20220428/success1.png" alt="camera" /></figure>
            <div className="card-body">
                <h2 className="text-xl text-white font-bold my-2">{review.title}</h2>
                <p className='text-white'>{review.details}</p>
                
            </div>
        </div>
    );
};

export default Review;