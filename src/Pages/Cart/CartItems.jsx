import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../../firebase.init';
import ShowCartItems from './ShowCartItems';

const CartItems = () => {
    const [cartItem, setCartItem] = useState([]);
    console.log(cartItem);
    const [user] = useAuthState(auth);
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/cart/${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setCartItem(data)
                })
        }
    }, [])

    return (
        <div>
            <h1 className='my-5 text-5xl font-bold underline text-center'>My Cart Items</h1>
            <div class="mx-auto">
                {
                    cartItem.map((cart, index) => <ShowCartItems key={cart._Id} cart={cart} index={index}></ShowCartItems>)
                }
            </div>
        </div>
    );
};

export default CartItems;