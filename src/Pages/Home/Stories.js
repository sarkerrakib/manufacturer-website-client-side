import React from 'react';
import Review from './Review';

const Stories = () => {
    const reviews = [
        {
            _id:1,
            title:'success project on building of samsung',
            details:'The Divan Hotel is a famous five-star hotel located in Erbil, Iraq. It keeps attracting tourists from all over the world with its innovative style, state-of-the-art luxury and high-standard services. To ensure a secure trip for customers, the hotel found the urgent need to upgrade its security system which had been out of date. Dahua Technology, as a world-leading video-centric smart IoT solution and service provider, helped the hotel improve its security system and customer experience.',

        },
        {
            _id:2,
            title:'success project on building of samsung',
            details:'The Divan Hotel is a famous five-star hotel located in Erbil, Iraq. It keeps attracting tourists from all over the world with its innovative style, state-of-the-art luxury and high-standard services. To ensure a secure trip for customers, the hotel found the urgent need to upgrade its security system which had been out of date. Dahua Technology, as a world-leading video-centric smart IoT solution and service provider, helped the hotel improve its security system and customer experience.',

        },
        {
            _id:3,
            title:'success project on building of samsung',
            details:'The Divan Hotel is a famous five-star hotel located in Erbil, Iraq. It keeps attracting tourists from all over the world with its innovative style, state-of-the-art luxury and high-standard services. To ensure a secure trip for customers, the hotel found the urgent need to upgrade its security system which had been out of date. Dahua Technology, as a world-leading video-centric smart IoT solution and service provider, helped the hotel improve its security system and customer experience.',
            
        }
    ];


    return (
        <section className='my-28 px-12'>
            <div className='text-center'>
                <h2 className=' text-4xl text-primary font-bold'>Success Stories</h2>
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