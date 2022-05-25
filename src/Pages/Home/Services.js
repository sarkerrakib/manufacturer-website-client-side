import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/store')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div className='my-28 px-12'>
            <div className='text-center'>
                <h3 className='text-primary text-xl font-bold uppercase'>Products</h3>
                <h2 className='text-3xl'>Innovative Technology | Reliable Quality </h2>
            </div>
            <div className='my-12 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;