import React from 'react';
import { Link } from 'react-router-dom';

const ShowHistory = ({ data, index }) => {
    const { _id, toolName, price } = data;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{toolName}</td>

            <td>
                {(data.price && !data.paid) &&  <p className=' text-accent mx-2'>Unpaid</p>}
                {(data.price && data.paid) && <span className='text-orange-500 text-xl capitalize mx-2'>paied</span>}
                </td>
        </tr>
    );
};

export default ShowHistory;