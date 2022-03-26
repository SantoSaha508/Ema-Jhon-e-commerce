import React from 'react';

const Cart = (props) => {
    return (
        <div>
            <h4>Order Summary</h4>
                <p>Selected Items: {props.cart.length}</p>
                <p>Total Price: </p>
                <p>Total Sipping Charge: $</p>
                <p>Tax: $ </p>
                <h4>Grand Total: $ </h4>
        </div>
    );
};

export default Cart;