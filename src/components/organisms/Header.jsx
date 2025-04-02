import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>Mi Tienda</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/category/electronics">Electronics</Link>
                <Link to="/category/clothing">Clothing</Link>
            </nav>
        </header>
    );
};

export default Header;
