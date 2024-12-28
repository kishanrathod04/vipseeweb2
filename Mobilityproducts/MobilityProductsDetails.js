// // import React from 'react';
// import NavBar from '../components/Navbar/NavBar';
// import Footer from '../components/Footer';

// // Images

// import cambiumImage from '../images/productimage/cbn.webp';
// import ruijieImage from '../images/productimage/rujee.png';

// const MobilityProductsDetails = () => {
//     const mobilityProducts = [
        
    
//         {
//             name: 'Cambium Networks',
//             description: 'Cambium Networks provides scalable and secure Wi-Fi and broadband solutions for business and enterprise needs.',
//             features: [
//                 'High-Performance Wireless',
//                 'Cloud-Managed Wi-Fi',
//                 'Flexible Deployment Options',
//                 'Exceptional Scalability',
//             ],
//             imageUrl: cambiumImage,
//         },
//         {
//             name: 'Ruijie Networks Co',
//             description: 'Ruijie Networks Co offers innovative networking solutions for enhanced connectivity and productivity.',
//             features: [
//                 'Enterprise-grade Networking',
//                 'Seamless Wi-Fi Roaming',
//                 'Centralized Management',
//                 'Cost-effective Solutions',
//             ],
//             imageUrl: ruijieImage,
//         },
//     ];

//     return (
//         <>
//             <div>
//                 <NavBar />
//             </div>
//             <div className="bg-gray-100 py-4 mt-24">
//                 <div className="container mx-auto px-10">
//                     <h1 className="text-3xl font-bold text-blue-900 text-center">Mobility Solutions</h1>
//                     <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                         {mobilityProducts.map((product, index) => (
//                             <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
//                                 <h2 className="text-2xl font-semibold text-center">{product.name}</h2>
//                                 <div className="flex justify-center mt-4">
//                                     <img
//                                         src={product.imageUrl}
//                                         alt={product.name}
//                                         className="w-auto h-[150px] object-contain rounded-lg"
//                                     />
//                                 </div>
//                                 <p className="mt-4 text-center">{product.description}</p>
//                                 <h3 className="mt-4 font-semibold">Features:</h3>
//                                 <ul className="list-disc ml-8 mt-2">
//                                     {product.features.map((feature, i) => (
//                                         <li key={i}>{feature}</li>
//                                     ))}
//                                 </ul>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//             <Footer />
//         </>
//     );
// };

// export default MobilityProductsDetails;
// import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';

// Images

import qsanImage from '../images/clients/QsanLogo.png';
import asustorImage from '../images/clients/asustorlogo.png';

const MobilityProductsDetails = () => {
    const mobilityProducts = [
        {
            name: 'QSAN Technology',
            description: 'QSAN Technology delivers high-performance, reliable, and scalable storage solutions for enterprises.',
            features: [
                'Enterprise-grade Storage',
                'High Availability Architecture',
                'Comprehensive Data Protection',
                'Easy Scalability',
            ],
            imageUrl: qsanImage,
        },
        {
            name: 'Asustor Inc.',
            description: 'Asustor Inc. specializes in innovative NAS solutions for personal and business data storage needs.',
            features: [
                'User-friendly Interface',
                'Advanced Data Backup Solutions',
                'Extensive App Ecosystem',
                'Energy-efficient Design',
            ],
            imageUrl: asustorImage,
        },
    ];

    return (
        <>
            <div>
                <NavBar />
            </div>
            <div className="bg-gray-100 py-4 mt-24">
                <div className="container mx-auto px-10">
                    <h1 className="text-3xl font-bold text-blue-900 text-center">Data Storage Products</h1>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {mobilityProducts.map((product, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                                <h2 className="text-2xl font-semibold text-center">{product.name}</h2>
                                <div className="flex justify-center mt-4">
                                    <img
                                        src={product.imageUrl}
                                        alt={product.name}
                                        className="w-[250px] h-[150px] object-contain rounded-lg"
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
