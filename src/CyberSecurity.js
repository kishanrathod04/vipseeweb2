// import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';

const CybersecurityProducts = () => {
    const products = [
        {
            name: 'Firewall Solutions',
            description: 'Advanced protection to safeguard your network from cyber threats.',
            link: '/firewall-details', // Link to detailed page
        },
        {
            name: 'Antivirus Software',
            description: 'Comprehensive protection against malware, ransomware, and other threats.',
            link: '/antivirus-details',
        },
        {
            name: 'Network Security',
            description: 'Secure your network with advanced tools to prevent unauthorized access.',
            link: '/network-security-details', // Add link to network security details page
        },
    ];

    return (
        <>
            <NavBar />
            <div className="bg-gray-100 py-12">
                <div className="container mx-auto px-10">
                    <h1 className="text-3xl font-bold text-blue-900 text-center">Cybersecurity Products</h1>
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

export default CybersecurityProducts;
