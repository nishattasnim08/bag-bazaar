import React from 'react';
import './Product.css'

const Product = (props) => {
    const {product, handleAddToCart} = props
    const {name,image,price,shipping} = product;
    return (
        <div className='product'>
            <img src={image} alt="" />
            <h3>{name}</h3>
            <p>Price : {price} $</p>
            <p><small>Shipping : {shipping} $</small></p>
            <div>
                <button onClick={() => handleAddToCart(product)} className='button-container'>
                    <p>Add to Cart</p>
                </button>
            </div>
        </div>
        
    );
};

export default Product;