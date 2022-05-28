import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

const MyOrders = () => {
    const [orders, setOrders] = useState([])
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:5000/order/${user?.email}`, {
            method: 'GET',
            headers:{
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                console.log('res', res);
                if(res.status === 401 || res.status === 403){
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                    navigate('/');
                }
                return res.json()
            })
            .then(data => {
                
                setOrders(data)
            });
    }, []);
    if (loading) {
        return <Loading></Loading>
    }
console.log(orders);
    return (
        <div>
            <h2 className='mb-5 text-center'>My Orders all together</h2>
            {/* {
                orders.map(order=><h1)
            } */}
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Order id</th>
                            <th>Product Name</th>
                            <th>Email</th>
                            <th>Treatment</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((a, index) => <tr key={a._id}>
                                <th>{index + 1}</th>
                                <td>{a?._id}</td>
                                <td>{a?.name}</td>
                                <td>{a?.email}</td>
                                
                                
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
         
        </div>
    );
};

export default MyOrders;