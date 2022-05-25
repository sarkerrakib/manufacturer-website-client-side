import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BigBanner from './BigBanner';
import Contact from './Contact/Contact';
import Services from './Services';
import Stories from './Stories';
import Success from './Success';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Success></Success>
            <Stories></Stories>
            <BigBanner></BigBanner>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;