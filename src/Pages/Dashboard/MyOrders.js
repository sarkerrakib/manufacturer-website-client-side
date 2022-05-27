import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [orders, setOrders] = useState([])
    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
        fetch(`http://localhost:5000/order/${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);
    if (loading) {
        return <Loading></Loading>
    }
console.log(orders);
    return (
        <div>
            <h2>My Orders all together</h2>
            {/* {
                orders.map(order=><h1)
            } */}
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((a, index) => <tr key={a._id}>
                                <th>{index + 1}</th>
                                <td>{a?.name}</td>
                                <td>{a?.orderId}</td>
                                <td>{a?.email}</td>
                                <td>{a?._id}</td>
                                
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
         
        </div>
    );
};

export default MyOrders;