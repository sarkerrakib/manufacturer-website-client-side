import React from 'react';
import Stats from './Stats';
const state = [
    {
        _id: 1,
        title: 'success project',
        value: '5000+',
        desc: ''

    },
    {
        _id: 2,
        title: 'Happy Clients',
        value: '1500+',
        desc: ''

    },
    {
        _id: 3,
        title: 'Supply',
        value: '70+',
        desc: 'Countries'

    },
    {
        _id: 4,
        title: 'Awards',
        value: '85',
        desc: 'International'

    },

];

const Success = () => {

    return (
        <div className='my-28 px-12'>
            <div className='text-center'>
                <h2 className=' text-4xl text-primary font-bold my-8'>CLIENTS TRUST</h2>
            </div>
            <div >
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {
                    state.map(stats =><Stats
                        key={stats._id}
                        stats={stats}
                    ></Stats> )
                }
                </div>
            </div>
        </div>
    );
};

export default Success;