// // import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';

// Images
import rAppImage from '../images/productimage/r-app.png';

const RAppDetails = () => {
    const rAppProduct = {
        name: 'R App',
        description: 'A revolutionary technology that enhances productivity and collaboration for businesses.',
        features: [
            'No Public IP needed',
            'No Port Forwarding',
            '100% Protection from Hackers & Ransomware',
            'High Availability with Multiple Internet Connections',
        ],
        imageUrl: rAppImage,
    };

    return (
        <>
            <div>
                <NavBar />
            </div>
            <div className="bg-gray-100 py-12">
                <div className="container mx-auto px-10">
                    <h1 className="text-3xl font-bold text-blue-900 text-center">R App</h1>
                    <div className="mt-8 grid grid-cols-1 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold text-center">{rAppProduct.name}</h2>
                            <div className="flex justify-center mt-4">
                                <img
                                    src={rAppProduct.imageUrl}
                                    alt={rAppProduct.name}
                                    className="w-auto h-[150px] object-contain rounded-lg"
                                />
                            </div>
                            <p className="mt-4 text-center">{rAppProduct.description}</p>
                            <h3 className="mt-4 font-semibold">Features:</h3>
                            <ul className="list-disc ml-8 mt-2">
                                {rAppProduct.features.map((feature, i) => (
                                    <li key={i}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default RAppDetails;
