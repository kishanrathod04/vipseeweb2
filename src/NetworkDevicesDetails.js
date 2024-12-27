// NetworkDevicesDetails.js
import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';

// Images (Adjust paths as necessary)
import ciscoImage from '../images/productimage/cisco.png';
//import tplinkImage from '../images/productimage/tplink.jpg';
import netgearImage from '../images/productimage/netgear.png';
import ruijieImage from '../images/productimage/rujee.png';
import cambiumImage from '../images/productimage/cbn.webp';

const NetworkDevicesDetails = () => {
    const networkDevices = [
        {
            name: 'Cisco',
            description: 'Enterprise-grade networking solutions for secure and scalable connectivity.',
            features: ['Advanced Routing', 'Integrated Security', 'High Performance', 'Cloud Management'],
            imageUrl: ciscoImage,
        },
        {
            name: 'TP-Link',
            description: 'Affordable and reliable networking devices for home and small businesses.',
            features: ['Easy Setup', 'Dual-Band Wi-Fi', 'Parental Controls', 'Robust Performance'],
            //imageUrl: tplinkImage,
        },
        {
            name: 'Netgear',
            description: 'Innovative networking solutions for businesses and home users.',
            features: ['Wi-Fi 6 Support', 'Advanced Security', 'Mesh Networking', 'User-Friendly Interface'],
            imageUrl: netgearImage,
        },
        {
            name: 'Ruijie',
            description: 'Efficient networking solutions with seamless connectivity for enterprises.',
            features: ['Seamless Wi-Fi Roaming', 'Cost-effective Solutions', 'Centralized Management', 'High Durability'],
            imageUrl: ruijieImage,
        },
        {
            name: 'Cambium',
            description: 'Reliable Wi-Fi and broadband solutions for businesses.',
            features: ['Cloud-Managed Networks', 'Exceptional Scalability', 'Advanced Features', 'High-Speed Connectivity'],
            imageUrl: cambiumImage,
        },
    ];

    return (
        <>
      <div>
        <NavBar />
      </div>
            <div className="bg-gray-100 py-4 mt-24">
                <div className="container mx-auto px-10">
                    <h1 className="text-3xl font-bold text-blue-900 text-center">Network Devices</h1>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {networkDevices.map((device, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                                <h2 className="text-2xl font-semibold text-center">{device.name}</h2>
                                <div className="flex justify-center mt-4">
                                    <img
                                        src={device.imageUrl}
                                        alt={device.name}
                                        className="w-auto h-[150px] object-contain rounded-lg"
                                    />
                                </div>
                                <p className="mt-4 text-center">{device.description}</p>
                                <h3 className="mt-4 font-semibold">Features:</h3>
                                <ul className="list-disc ml-8 mt-2">
                                    {device.features.map((feature, i) => (
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

export default NetworkDevicesDetails;
