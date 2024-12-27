// import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';

// Images
import epsonImage from '../images/productimage/epson.jpg';
import canonImage from '../images/productimage/canon.png';
import hpPrinterImage from '../images/productimage/hp.webp';

const PrinterDetails = () => {
    const printerProducts = [
        {
            name: 'Epson',
            description: 'Epson printers are known for their high-quality printing, eco-friendly features, and reliable performance.',
            features: ['EcoTank Technology', 'Wireless Printing', 'High Print Resolution', 'Low Power Consumption'],
            imageUrl: epsonImage,
        },
        {
            name: 'Canon',
            description: 'Canon printers provide advanced imaging technologies, compact designs, and versatile printing solutions.',
            features: ['All-in-One Functionality', 'Fast Print Speeds', 'Mobile App Integration', 'Durable Build Quality'],
            imageUrl: canonImage,
        },
        {
            name: 'HP',
            description: 'HP printers deliver efficient and reliable printing with innovative features for home and office use.',
            features: ['Instant Ink Support', 'Energy Efficient', 'High-Quality Photo Printing', 'Cloud Printing Support'],
            imageUrl: hpPrinterImage,
        },
    ];

    return (
        <>
            <div>
                <NavBar />
            </div>
            <div className="bg-gray-100 py-4 mt-24">
                <div className="container mx-auto px-10">
                    <h1 className="text-3xl font-bold text-blue-900 text-center">Printers</h1>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                        {printerProducts.map((product, index) => (
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

export default PrinterDetails;
