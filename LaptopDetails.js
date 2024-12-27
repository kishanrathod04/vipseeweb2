// import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';

// Images
import hpImage from '../images/productimage/hp.png';
import dellImage from '../images/productimage/Dell_Logo.png.png';
import lenovoImage from '../images/productimage/lenovo.jpg';
import asusImage from '../images/productimage/asus.png';

const LaptopDetails = () => {
    const laptopProducts = [
        {
            name: 'HP',
            description: 'HP laptops offer reliable performance, sleek designs, and powerful features for personal and professional use.',
            features: ['Intel i5/i7 Processors', 'Long Battery Life', 'Durable Build', 'High-Resolution Displays'],
            imageUrl: hpImage,
        },
        {
            name: 'DELL',
            description: 'Dell laptops provide cutting-edge technology, ergonomic designs, and outstanding performance for all workloads.',
            features: ['Premium Build Quality', 'Advanced Cooling System', 'Wide Display Options', 'Customizable Configurations'],
            imageUrl: dellImage,
        },
        {
            name: 'LENOVO',
            description: 'Lenovo laptops are known for their robust build quality, innovative features, and user-friendly designs.',
            features: ['Innovative TrackPoint', 'Flexible Yoga Series', 'Long-lasting Battery', 'Secure Boot Options'],
            imageUrl: lenovoImage,
        },
        {
            name: 'ASUS',
            description: 'ASUS laptops deliver high-end gaming and productivity solutions with sleek aesthetics and powerful hardware.',
            features: ['Gaming and Creator Options', 'High Refresh Rate Displays', 'Fast SSDs', 'Dedicated GPU Models'],
            imageUrl: asusImage,
        },
    ];

    return (
        <>
            <div>
                <NavBar />
            </div>
            <div className="bg-gray-100 py-12">
                <div className="container mx-auto px-10">
                    <h1 className="text-3xl font-bold text-blue-900 text-center">Laptop Computers</h1>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                        {laptopProducts.map((product, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                                <h2 className="text-2xl font-semibold text-center">{product.name}</h2>
                                <div className="flex justify-center mt-4">
                                    <img
                                        src={product.imageUrl}
                                        alt={product.name}
                                        className="w-auto h-[150px] object-cover rounded-lg"
                                    />
                                </div>
                                <p className="mt-4 text-center">{product.description}</p>
                                <h3 className="mt-4 font-semibold">Features:</h3>
                                <ul className="list-disc ml-8 mt-2">
                                    {product.features.map((feature, i) => (
                                        <li key={i}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default LaptopDetails;
