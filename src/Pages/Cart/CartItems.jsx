import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../../firebase.init';
import ShowCartItems from './ShowCartItems';

const CartItems = () => {
    const [cartItem, setCartItem] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/cart/${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setCartItem(data)
                })
        }
    }, [cartItem])
    return (
        <div>
            <h1 className='text-end text-xl mx-4'>Your Ordered Item : {cartItem.length}</h1>
            <div>
                {
                    cartItem.length === 0 && <h1 className='text-xs badge rounded p-3'>Your Cart is empty order some</h1>
                }
            </div>
            <div class="mx-auto">
                <div class="overflow-x-auto">
                    <table class="table w-full">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cartItem.map((cart, index) => <ShowCartItems key={cart._id} cart={cart} index={index}></ShowCartItems>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CartItems;