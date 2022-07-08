import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Misc/Loading';
import ShowHistory from './ShowHistory';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../../firebase.init';

const PaymentHistory = () => {
    const [user] = useAuthState(auth)
    const fetchData = () => {
        return axios.get(`https://equipo-fullstack-app.herokuapp.com/cart/${user.email}`, {
            method: "GET",
            headers: {
                'authorization': `Token ${localStorage.getItem('accessToken')}`
            }
        }).catch(function (error) {
            if (error.response.status === 403 || error.response.status === 401) {
                console.log(error.response.status);
                navigate("/home");
                signOut(auth);
                localStorage.removeItem("accessToken")
            }
        })
    }

    const { isLoading, data, refetch } = useQuery('super-heroes', fetchData)

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1>Showing Payment History</h1>
            {/* */}

            <div class="overflow-x-auto">
                <table class="table w-full table-compact">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Tool Name</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.data.map((datas, index) => <ShowHistory index={index} key={datas._id} refetch={refetch} data={datas}></ShowHistory>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;