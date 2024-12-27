// import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';

const MobilityProducts = () => {
    const products = [
        {
            name: 'Mobility Products',
            description: 'Explore advanced mobility solutions to empower your business and improve connectivity.',
            link: '/mobility-products-details', // Link to detailed mobility products page
        },
        {
            name: 'R-App',
            description: 'Discover R-App for enhanced mobility management and seamless app integration.',
            link: '/r-app-details', // Link to R-App details page
        },
        
    ];

    return (
        <>
      <div>
        <NavBar />
      </div>
      <div className="bg-gray-100 py-4 mt-32"> {/* Increased margin-top */}
    <div className="container mx-auto px-10">
        <h1 className="text-3xl font-bold text-blue-900 text-center">Mobility Products</h1>
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
            <Footer />
        </>
    );
};

export default MobilityProducts;
