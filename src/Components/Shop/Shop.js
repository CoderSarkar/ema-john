import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( () => {
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, [])

    useEffect( () => {
        const savedCart = getStoredCart()
        console.log(savedCart)
    }, [])

    const handleAddToCart = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
        // save to local storage
        addToDb(product.id)
    }
    return (
        <div className='shop-container'>
            <div className='product-container'>              
                {
                    products.map(product => <Product 
                        key = {product.key}
                        product={product} 
                        handleAddToCart = {handleAddToCart}                      
                        >
                        </Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>             
            </div>
        </div>
    );
};

export default Shop;