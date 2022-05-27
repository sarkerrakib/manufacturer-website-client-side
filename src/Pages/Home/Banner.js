import React from 'react';

const Banner = () => {
  return (
    <div className="carousel w-full ">
      <div id="slide1" className="carousel-item relative w-full h-full">
        <img src="https://www.dahuasecurity.com/asset/upload/uploads/image/20220315/Banner_HDCVI-10-Year-Anniversary_1920558.png" alt='img' className="w-full" /> /
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src="https://material.dahuasecurity.com/uploads/image/20220516/WizSense2022_1920558.png" alt='img2' className="w-full" /> /
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src="https://www.dahuasecurity.com/asset/upload/uploads/image/20220411/Banner_Dahua-Entry-level-IP-Surveillance-System_1920558.png" alt='img3' className="w-full" /> /
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src="https://dahuasecurity.s3.ap-southeast-1.amazonaws.com/uploads/image/20220510/5-year-Warranty_banner1920558.png" alt='img4' className="w-full" /> /
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
      </div>
    </div>
  );
};

export default Banner;