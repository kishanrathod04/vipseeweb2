import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';

const CameraProducts = () => {
    const products = [
        {
            name: 'UNV PTZ Camera',
            description: 'High-quality pan-tilt-zoom cameras for advanced surveillance and monitoring.',
            imageUrl: '/images/unv-ptz.jpg', // Replace with the actual image URL
        },
        {
            name: 'UNV Bullet Camera',
            description: 'Durable and weatherproof cameras ideal for outdoor security applications.',
            imageUrl: '/images/unv-bullet.jpg', // Replace with the actual image URL
        },
        {
            name: 'UNV Dome Camera',
            description: 'Compact and discreet dome cameras for versatile indoor and outdoor use.',
            imageUrl: '/images/unv-dome.jpg', // Replace with the actual image URL
        },
        {
            name: 'UNV Thermal Camera',
            description: 'Thermal imaging cameras for enhanced night vision and temperature detection.',
            imageUrl: '/images/unv-thermal.jpg', // Replace with the actual image URL
        },
    ];

    return (
        <>
      <div>
        <NavBar />
      </div>
            <div className="bg-gray-100 py-4 mt-24">
                <div className="container mx-auto px-10">
                    <h1 className="text-3xl font-bold text-blue-900 text-center">UNV Camera Products</h1>
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
            <Footer />
        </>
    );
};

export default CameraProducts;
