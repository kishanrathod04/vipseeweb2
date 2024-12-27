import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="m-auto max-w-6xl p-12 text-center">
            <h1 className="text-4xl font-bold text-blue-900">Our Products</h1>
            <p className="mt-4 text-lg text-gray-600">Explore our range of products below:</p>
            <div className="mt-8 flex justify-center space-x-4">
                <Link
                    to="/it-products"
                    className="bg-blue-900 text-white py-3 px-6 rounded-lg hover:bg-blue-800"
                >
                    IT Products
                </Link>
                <Link
                    to="/cyber-security-products"
                    className="bg-gray-900 text-white py-3 px-6 rounded-lg hover:bg-gray-800"
                >
                    Cyber Security Products
                </Link>
            </div>
        </div>
    );
};

export default HomePage;
