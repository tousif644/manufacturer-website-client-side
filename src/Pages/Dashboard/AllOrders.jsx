import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Misc/Loading';
import ShowAllOrders from './ShowAllOrders';

const AllOrders = () => {
    const fetchOrders = () => {
        return axios.get('http://localhost:5000/cart', {
            method: "GET",
            headers: {
                authorization: `Token ${localStorage.getItem('accessToken')}`
            }
        })
    }

    const { isLoading, data ,refetch} = useQuery('orders', fetchOrders);

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Ordered By</th>
                            <th>Email</th>
                            <th>ToolName</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.data.map((datas, index) => <ShowAllOrders key={datas._id} index={index} datas={datas} refetch={refetch}></ShowAllOrders>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllOrders;