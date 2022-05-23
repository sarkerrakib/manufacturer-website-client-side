import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BigBanner from './BigBanner';
import Services from './Services';
import Stories from './Stories';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Stories></Stories>
            <BigBanner></BigBanner>
            <Footer></Footer>
        </div>
    );
};

export default Home;