import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    for(const product of cart){
        total = total + product.price;
    }

    const shipping = total > 0 ? 15 : 0;
    const tax = (total+shipping) * .10;
    const grandTotal = total + tax;
    return (
        <div className='cartContainer'>
            <h1>Order Quantity</h1>
            <h5>Item Ordered :{props.cart.length} </h5>
            <p>Total Product Price : {total.toFixed(2)}</p>
            <p>Shipping : {shipping}</p>
            <p>Tax : {tax.toFixed(2)}</p>
            <p>Grand Total: {grandTotal.toFixed(2)}</p>
            
        </div>
    );
};

export default Cart;