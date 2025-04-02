import React, { useState, useEffect } from 'react';
import ProductCard from '../components/molecules/ProductCard';

const HomePage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Simulamos una API para obtener los productos
        setProducts([
            { id: 1, name: 'Producto 1', price: '$100', image: 'product1.jpg' },
            { id: 2, name: 'Producto 2', price: '$150', image: 'product2.jpg' },
            { id: 3, name: 'Producto 3', price: '$200', image: 'product3.jpg' },
        ]);
    }, []);

    return (
        <div>
            <h2>Catálogo de Productos</h2>
            <div className="product-list">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default HomePage;
