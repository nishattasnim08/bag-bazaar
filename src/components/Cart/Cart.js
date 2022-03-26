import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart, clearCart } = props;

    const randomButton = () => {
        if (cart.length > 1) {
            const random = Math.floor(Math.random() * cart.length);
            alert(cart[random].name + " is selected for you!");
        }
        else {
            alert("You should select at least 2 items!");
        }
    }
    return (
        <div className='cart'>
            <div>
                <h3>Cart</h3>
                <p>Total Selected Items : {cart.length}</p>
                {
                    cart.map(product => <ProductShow
                        key={product.id}
                        name={product.name}>
                    </ProductShow>)
                }
            </div>
            <div className='cart-button'>
                <button onClick={randomButton}>
                    <p>Random Choice</p>
                </button>
                <button onClick={clearCart}>
                    <p>Reset All</p>
                </button>
            </div>
        </div>
    );

};


const ProductShow = ({ name }) => {
    return (
        <p>Name: {name}</p>
    )
}

export default Cart;