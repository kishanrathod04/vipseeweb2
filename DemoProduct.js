import React from 'react';

const ITProducts = () => {
    const products = [
        {
            name: 'High-Performance Laptops',
            description: 'Laptops optimized for demanding tasks.',
            imageUrl: '/images/laptop.jpg',
        },
        {
            name: 'Enterprise Servers',
            description: 'Reliable servers for your business needs.',
            imageUrl: '/images/server.jpg',
        },
    ];

    return (
        <div className="bg-gray-100 py-12">
            <div className="container mx-auto px-10">
                <h1 className="text-3xl font-bold text-blue-900 text-center">IT Products</h1>
                <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5 mt-8">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group"
                        >
                            <img
                                alt="product img"
                                className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                                src={product.imageUrl}
                            />
                            <h2 className="font-semibold my-4 text-2xl text-center">{product.name}</h2>
                            <p className="text-md font-medium">{product.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ITProducts;