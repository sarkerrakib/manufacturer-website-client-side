import React from 'react';

const Banner = () => {
  return (
    <div className="carousel w-full ">
      <div id="slide1" className="carousel-item relative w-full h-full">
        <img src="https://dahuasecurity.s3.ap-southeast-1.amazonaws.com/uploads/image/20220510/5-year-Warranty_banner1920558.png" alt='img' className="w-full" /> /
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src="https://api.lorem.space/image/car?w=800&h=200&hash=500B67FB" alt='img2' className="w-full" /> /
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src="https://api.lorem.space/image/car?w=800&h=200&hash=A89D0DE6" alt='img3' className="w-full" /> /
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src="https://api.lorem.space/image/car?w=800&h=200&hash=225E6693" alt='img4' className="w-full" /> /
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
      </div>
    </div>
  );
};

export default Banner;