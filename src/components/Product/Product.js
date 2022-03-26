import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name,image,price,shipping} = props.product;
    return (
        <div className='product'>
            <img src={image} alt="" />
            <h3>{name}</h3>
            <p>Price : {price} $</p>
            <p><small>Shipping : {shipping} $</small></p>
            <div className='button-container'>
                <button>
                    <p>Add to Cart</p>
                </button>
            </div>
        </div>
        
    );
};

export default Product;