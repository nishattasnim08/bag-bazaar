import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name,image,price,shipping} = props.product;
    return (
        <div className='product'>
            <img src={image} alt="" />
            <h3>{name}</h3>
        </div>
    );
};

export default Product;