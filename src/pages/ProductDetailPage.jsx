import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailPage = () => {
    const { productId } = useParams(); // Obtenemos el ID del producto desde la URL
    const [product, setProduct] = useState(null);

    useEffect(() => {
        // Simulamos la obtención de los detalles de un producto
        const fetchProduct = () => {
            const productData = {
                1: { id: 1, name: 'Producto 1', price: '$100', description: 'Descripción del producto 1' },
                2: { id: 2, name: 'Producto 2', price: '$150', description: 'Descripción del producto 2' },
                3: { id: 3, name: 'Producto 3', price: '$200', description: 'Descripción del producto 3' },
            };
            setProduct(productData[productId]);
        };

        fetchProduct();
    }, [productId]);

    if (!product) return <p>Cargando...</p>;

    return (
        <div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
        </div>
    );
};

export default ProductDetailPage;
