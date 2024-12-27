// import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';

// Images
import sonicwallImage from '../images/productimage/sonicwall.jpg';
import sophosImage from '../images/productimage/SophosXGFirewall.webp';
import ciscoImage from '../images/productimage/cisco.png';
// import netgearImage from '../images/productimage/netgear.jpg';
// import tplinkImage from '../images/productimage/tplink.jpg';

const FirewallDetails = () => {
    const firewallProducts = [
        {
            name: 'SonicWall',
            description: 'SonicWall is a global leader in network security, providing advanced threat protection and firewall solutions.',
            features: ['Real-time deep packet inspection', 'Advanced malware detection', 'Secure SD-WAN', 'Cloud-based security'],
            imageUrl: sonicwallImage,
        },
        {
            name: 'Sophos XG Firewall',
            description: 'Sophos XG Firewall delivers intelligent and responsive threat protection for businesses.',
            features: ['Network visibility', 'Advanced VPN options', 'SSL VPN support', 'Web filtering'],
            imageUrl: sophosImage,
        },
        {
            name: 'Cisco Firewall',
            description: 'Cisco offers enterprise-grade firewall solutions to secure networks and prevent cyber threats.',
            features: ['Integrated threat intelligence', 'Advanced malware protection', 'Zero-trust security', 'Secure remote access'],
            imageUrl: ciscoImage,
        },
        {
            name: 'Netgear Firewall',
            description: 'Netgear provides reliable and robust firewall solutions for small to medium-sized businesses.',
            features: ['Advanced network monitoring', 'Secure VPN connections', 'Web filtering', 'Multi-gig support'],
            //imageUrl: netgearImage,
        },
        {
            name: 'TP-Link Firewall',
            description: 'TP-Link delivers affordable and efficient firewall solutions for homes and small businesses.',
            features: ['Dual-band connectivity', 'Parental controls', 'Integrated malware protection', 'Cloud management'],
           // imageUrl: tplinkImage,
        },
    ];

    return (
        <>
            <div>
                <NavBar />
            </div>
            <div className="bg-gray-100 py-12">
                <div className="container mx-auto px-10">
                    <h1 className="text-3xl font-bold text-blue-900 text-center">Firewall Solutions</h1>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {firewallProducts.map((product, index) => (
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

export default FirewallDetails;