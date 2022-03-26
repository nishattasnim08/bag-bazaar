import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;

    let total = 0;
    let shipping = 0;

    for (const product of cart) {
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    return (
        <div className='cart'>
            <h3>Cart</h3>
            <p>Total Selected Items : {cart.length}</p>
            <p>Total Price : {total} $</p>
            <p>Total Shipping : {shipping}</p>
            <p>Tax : </p>
            <h3> Grand Total : </h3>
        </div>
    );
};

export default Cart;