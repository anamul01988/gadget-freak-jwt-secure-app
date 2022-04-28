import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';

const OrderList = () => {
    const [user, loading, error] = useAuthState(auth);
    const [orderList, setOrderList] = useState([]);
    useEffect(()=>{
       const url = `http://localhost:5000/orderList`;
       fetch(url,{
           headers: {
            "authorization": `${user.email} ${localStorage.getItem("accessToken")}`,

           },
       })
       .then(res => res.json())
       .then(data =>{
        // console.log(data)
        setOrderList(data)
       })
    },[user.email])
    return (
        <div className='container'>
            <h2>OrderList</h2>
            <ol>
                {
                    orderList.map(order => <li>{order.name}</li>)
                }
            </ol>
        </div>
    );
};

export default OrderList;