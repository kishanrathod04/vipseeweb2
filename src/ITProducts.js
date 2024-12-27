import React from 'react';
import { Link } from 'react-router-dom';

const ITProducts = () => {
    const products = [
        {
            name: 'Laptop Computers',
            description: 'High-performance laptops for all your business and personal needs.',
            link: '/laptops', // Link to the Laptops page
        },
       
        
    ];

    return (
        <div className="bg-gray-100 py-12">
            <div className="container mx-auto px-10">
                <h1 className="text-3xl font-bold text-blue-900 text-center">IT Products</h1>
                <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5 mt-8">
                    {products.map((product, index) => (
                        <Link
                            key={index}
                            to={product.link}
                            className="bg-white p-6 rounded-lg shadow-lg text-gray-700 hover:bg-gray-500 hover:text-white"
                        >
                            <h2 className="text-2xl font-semibold">{product.name}</h2>
                            <p>{product.description}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ITProducts;
