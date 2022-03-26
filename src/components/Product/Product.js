import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'

const Product = (props) => {
    const {product, handleAddToCart} = props
    const {name,image,price,shipping} = product;
    return (
        <div className='product'>
            <img src={image} alt="" />
            <h3>{name}</h3>
            <p>Price : {price}$</p>
            <p><small>Shipping : {shipping}$</small></p>
            <div>
                <button onClick={() => handleAddToCart(product)} className='button-container'>
                    <p>Add to Cart</p>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>
            </div>
        </div>
        
    );
};

export default Product;