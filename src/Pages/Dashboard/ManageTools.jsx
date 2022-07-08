import axios from "axios";
import React from "react";
import { useQuery } from 'react-query';

import Loading from "../Misc/Loading";
import ShowManageTools from "./ShowManageTools";

const ManageTools = () => {
    const fetchData = () => {
        return axios.get('http://localhost:5000/tools')
    }
    const { data, refetch, isLoading } = useQuery('tools', fetchData);
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1>Manage Tools</h1>

            <div>
                <div class="overflow-x-auto">
                    <table class="table w-full">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Tool Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.data.map((datas, index) => <ShowManageTools key={datas._id} refetch={refetch} datas={datas} index={index} ></ShowManageTools>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageTools;