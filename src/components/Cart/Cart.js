import React from 'react';

const Cart = (cart) => {
    return (
        <div>
            <h3>Cart</h3>
            <p>Total selected items : {cart.length}</p>
        </div>
    );
};

export default Cart;