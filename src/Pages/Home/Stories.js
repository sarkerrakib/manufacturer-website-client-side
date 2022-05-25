import React from 'react';
import Review from './Review';

const Stories = () => {
    const reviews = [
        {
            _id:1,
            title:'Smart Technologies to Reinforce Safety',
            details:'NetSource Technology is a world-leading video-centric smart IoT solution and service provider. Based on technological innovations, Dahua Technology offers end-to-end security solutions, systems, and services to create value for city operations, corporate management, and consumers. In NetSource solution, perimeter protection and access control are both realized. “We have had Dahua equipment for 7 years, it is a brand that has been of great help to our safety. It has contributed to continuous and steady operations throughout the pandemic',

        },
        {
            _id:2,
            title:'Hyundai Somerset West Branch Store',
            details:'Criminal offences such as vandalism and theft are common threats faced by retail businesses of all sizes. For stores selling luxury and high-end commodities, owners often need to invest additional manpower and resources to protect their properties. Despite their efforts, preventing crimes and incidents from happening using traditional security measures has proven to be increasingly difficult, especially at night and during non-business hours.This was the same problem faced by Hyundai 4S store in Somerset West, Cape Town, South Africa. ',

        },
        {
            _id:3,
            title:'Improves Aerocharters Logistics System',
            details:'Aerocharter is a provider of technical, operational, and commercial services to support aviation. Its main activities are cargo services including handling, storage and supervision of cargo in parking apron and warehouse. In addition to ramp operations with loading and unloading options, it also provides services in aircraft movement, cargo insurance, and security, line maintenance, among others.To strengthen its world-class services, Aerocharter required a video security system with high reliability and advanced technology, which would allow it to monitor all its .',
            
        }
    ];


    return (
        <section className='my-28 px-12'>
            <div className='text-center'>
                <h2 className=' text-4xl text-primary font-bold my-8'>Success Stories</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review =><Review
                        key={review._id}
                        review={review}
                    ></Review> )
                }
            </div>
        </section>
    );
};

export default Stories;