import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BigBanner from './BigBanner';
import Services from './Services';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <BigBanner></BigBanner>
            <Footer></Footer>
        </div>
    );
};

export default Home;