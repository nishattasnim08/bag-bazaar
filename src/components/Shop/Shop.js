import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleAddToCart = (product) => {
        if (cart.indexOf(product) < 0) {
            if (cart.length < 4) {
                const newCart = [...cart, product];
                setCart(newCart);
            }
            else {
                alert("You've already selected 4 items!")
            }
        }
        else {
            alert("This Product is already selected!")
        }

    }

    const clearCart = () => setCart([]);
    return (
        <div className='container'>
            <div className="header-container">
                <h2>Bag Bazar</h2>
            </div>
            <div className="shop-container">
                <div className="product-container">
                    {
                        products.map(product => <Product
                            key={product.id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        ></Product>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart} clearCart={clearCart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;