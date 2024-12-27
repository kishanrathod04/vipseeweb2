// import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';

// Images
 import rAppImage from '../images/productimage/r-app.png';
import cambiumImage from '../images/productimage/cbn.webp';
import ruijieImage from '../images/productimage/rujee.png';

const MobilityProductsDetails = () => {
    const mobilityProducts = [
        {
            name: 'R App',
            description: 'A revolutionary technology that enhances productivity and collaboration for businesses.',
            features: [
                'No Public IP needed',
                'No Port Forwarding',
                '100% Protection from Hackers & Ransomware',
                'High Availability with Multiple Internet Connections',
            ],
            imageUrl: rAppImage,
        },
        {
            name: 'Cambium Networks',
            description: 'Cambium Networks provides scalable and secure Wi-Fi and broadband solutions for business and enterprise needs.',
            features: [
                'High-Performance Wireless',
                'Cloud-Managed Wi-Fi',
                'Flexible Deployment Options',
                'Exceptional Scalability',
            ],
            imageUrl: cambiumImage,
        },
        {
            name: 'Ruijie Networks Co',
            description: 'Ruijie Networks Co offers innovative networking solutions for enhanced connectivity and productivity.',
            features: [
                'Enterprise-grade Networking',
                'Seamless Wi-Fi Roaming',
                'Centralized Management',
                'Cost-effective Solutions',
            ],
            imageUrl: ruijieImage,
        },
    ];

    return (
        <>
            <div>
                <NavBar />
            </div>
            <div className="bg-gray-100 py-12">
                <div className="container mx-auto px-10">
                    <h1 className="text-3xl font-bold text-blue-900 text-center">Mobility Solutions</h1>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {mobilityProducts.map((product, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                                <h2 className="text-2xl font-semibold text-center">{product.name}</h2>
                                <div className="flex justify-center mt-4">
                                    <img
                                        src={product.imageUrl}
                                        alt={product.name}
                                        className="w-auto h-[150px] object-contain rounded-lg"
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

export default MobilityProductsDetails;
