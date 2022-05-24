import React from 'react';
import Stats from './Stats';
const state = [
    {
        _id: 1,
        title: 'success project ',
        value: '500',
        desc: '30% more than'

    },
    {
        _id: 2,
        title: 'success project ',
        value: '500',
        desc: '30% more than'

    },
    {
        _id: 3,
        title: 'success project ',
        value: '500',
        desc: '30% more than'

    },
    {
        _id: 4,
        title: 'success project ',
        value: '500',
        desc: '30% more than'

    },

];

const Success = () => {

    return (
        <div className='my-28 px-12'>
            <div className='text-center'>
                <h2 className=' text-4xl text-primary font-bold'>CLIENTS TRUST</h2>
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