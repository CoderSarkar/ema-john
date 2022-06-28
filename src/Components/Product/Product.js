import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    
    const {name,img, price, stock, seller} = props.product;
    const cartItem = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='info'>
                <h4 className='product-name'>{name}</h4>
                <h4>Price : ${price}</h4>
                <p><small>by : {seller}</small></p>
                <p><small>Only {stock} in stock order soon</small></p>
                <button onClick={() => props.handleAddToCart(props.product)}
                  className='btn'>{cartItem} 
                  add to cart</button>
            </div>
            
            
        </div>
    );
};

export default Product;