import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect( () => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='container'>
            <div className="header-container">
                <h2>Bag Bazar</h2>
            </div>
            <div className="shop-container">
                <div className="product-container">
                    {
                        products.map(product=><Product 
                            key={product.id}
                            product={product}
                            ></Product>)
                    }
                </div>
                <div className="cart-container">
                    <h4>Cart</h4>
                </div>
            </div>
        </div>
    );
};

export default Shop;