import React from 'react';
import da1 from '../../images/da1.png';
import da2 from '../../images/da2.png';
import da3 from '../../images/da3.png';
import da4 from '../../images/da4.png';
import da5 from '../../images/da5.png';
import da6 from '../../images/da6.png';
import Service from './Service';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'da camera 1',
            description: '8MP Smart Dual Illumination Active Deterrence Vari-focal Bullet WizSense Network Camera. Outputs max. 8 MP (3840 × 2160)@25/30 fps. H.265 codec, high compression rate, ultra-low bit rate.Built-in warm light and IR LED; the max. IR illumination distance is 50 m and warm light distance is 40 m.',
            img: da1,
            order: '100',
            price: '120'

        },
        {
            _id: 2,
            name: 'da camera 1',
            description: '8MP Smart Dual Illumination Active Deterrence Vari-focal Bullet WizSense Network Camera. Outputs max. 8 MP (3840 × 2160)@25/30 fps. H.265 codec, high compression rate, ultra-low bit rate.Built-in warm light and IR LED; the max. IR illumination distance is 50 m and warm light distance is 40 m.',
            img: da2,
            order: '100',
            price: '120'

        },
        {
            _id: 3,
            name: 'da camera 1',
            description: '8MP Smart Dual Illumination Active Deterrence Vari-focal Bullet WizSense Network Camera. Outputs max. 8 MP (3840 × 2160)@25/30 fps. H.265 codec, high compression rate, ultra-low bit rate.Built-in warm light and IR LED; the max. IR illumination distance is 50 m and warm light distance is 40 m.',
            img: da3,
            order: '100',
            price: '120'

        },
        {
            _id: 4,
            name: 'da camera 1',
            description: '8MP Smart Dual Illumination Active Deterrence Vari-focal Bullet WizSense Network Camera. Outputs max. 8 MP (3840 × 2160)@25/30 fps. H.265 codec, high compression rate, ultra-low bit rate.Built-in warm light and IR LED; the max. IR illumination distance is 50 m and warm light distance is 40 m.',
            img: da4,
            order: '100',
            price: '120'

        },
        {
            _id: 5,
            name: 'da camera 1',
            description: '8MP Smart Dual Illumination Active Deterrence Vari-focal Bullet WizSense Network Camera. Outputs max. 8 MP (3840 × 2160)@25/30 fps. H.265 codec, high compression rate, ultra-low bit rate.Built-in warm light and IR LED; the max. IR illumination distance is 50 m and warm light distance is 40 m.',
            img: da5,
            order: '100',
            price: '120'

        },
        {
            _id: 6,
            name: 'da camera 1',
            description: '8MP Smart Dual Illumination Active Deterrence Vari-focal Bullet WizSense Network Camera. Outputs max. 8 MP (3840 × 2160)@25/30 fps. H.265 codec, high compression rate, ultra-low bit rate.Built-in warm light and IR LED; the max. IR illumination distance is 50 m and warm light distance is 40 m.',
            img: da6,
            order: '100',
            price: '120'

        },
    ];

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