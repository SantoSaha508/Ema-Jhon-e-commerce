import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css'

const Header = () => {
    return (
        <nav className='navStyle'>
            <img src={logo} alt="" />
            <div className='list'>
                <a href="/shop">Shop</a>
                <a href="/orders">Orders</a>
                <a href="/inventory">Invntory</a>
                <a href="/about">About</a>
            </div>
        </nav>
    );
};

export default Header;