import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const Details = () => {
    const [details, setDetails] = useState([])
    const [user, loading, error] = useAuthState(auth);
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        fetch(`http://localhost:5000/store/${id}`)
            .then(res => res.json())
            .then(data => setDetails(data));
    }, []);
    console.log(details);

    const orderHandle = () => {
        const name = details?.name
        const orderId = details?._id
        const quntity = details?.order
        const email= user?.email
        const updataitem = {

            name:name ,
            orderId:orderId,
            quntity:quntity,
            email:email
        }

        const url = `http://localhost:5000/store`
        fetch(url, {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json',

            },
            body: JSON.stringify(updataitem)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }


    return (
        <div className='mx-auto flex justify-center items-center'>
            <div >
                <h2 className='text-center text-5xl'>Purchase Page</h2>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={details?.img} alt="tools" className="rounded-xl w-50" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2>{details?.name}</h2>
                        <p>Price: ${details?.price}</p>
                        <p>Min-Order: {details?.order}</p>
                        <p>{details?.description}</p>

                        <p></p>
                        <div className="card-actions">
                            <button className='btn logButton' onClick={orderHandle}>Order</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Details;