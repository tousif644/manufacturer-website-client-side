import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Misc/Loading';
import ShowAllUsers from './ShowAllUsers';

const AllUsers = () => {
    const getUsers = () => {
        return axios.get("http://localhost:5000/users", {
            method: "GET",
            headers: {
                authorization: `Token ${localStorage.getItem('accessToken')}`
            }
        })
            .catch(function (error) {
                if (error.response.status === 403 || error.response.status === 401) {
                    console.log(error.response.status);
                    navigate("/home");
                    signOut(auth);
                    localStorage.removeItem("accessToken")
                }
            })
    }

    const { isLoading, data, refetch } = useQuery('data-heros', getUsers);
    if (isLoading) {
        <Loading></Loading>
    }
    return (
        <div>
            <h1>Total users : {data?.data.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.data.map((d, index) => <ShowAllUsers key={d._id} index={index} refetch={refetch} data={d}></ShowAllUsers>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;