import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    const handleCartBtn = (product) =>{
        console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product key={product.id}
                    product={product}
                    handleCartBtn={handleCartBtn}
                    ></Product> )
                }
            </div>

            <div className='cart-container'>
                <h4>Order Summary</h4>
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: </p>
                <p>Total Sipping Charge: $</p>
                <p>Tax: $ </p>
                <h4>Grand Total: $ </h4>
            </div>
        </div>
    );
};

export default Shop;