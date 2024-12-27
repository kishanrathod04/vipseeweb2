import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';

// Images
import sophosImage from '../images/productimage/SophosXGFirewall.webp';
import sonicwallImage from '../images/productimage/sonicwall.jpg';
import ciscoImage from '../images/productimage/cisco.png';
import ruijieImage from '../images/productimage/rujee.png';

const NetworkSecurityDetails = () => {
    const networkSecurityProducts = [
        {
            name: 'SonicWall',
            description: 'SonicWall offers real-time deep packet inspection and advanced malware protection for your network.',
            features: ['Advanced threat protection', 'Secure SD-WAN', 'Deep packet inspection', 'Cloud-based security'],
            imageUrl: sonicwallImage,
        },
        {
            name: 'Sophos XG Firewall',
            description: 'Sophos XG Firewall offers intelligent protection and management for businesses to prevent cyber threats.',
            features: ['SSL VPN support', 'Advanced network visibility', 'Integrated email protection', 'Web filtering'],
            imageUrl: sophosImage,
        },
        {
            name: 'Cisco Network Security',
            description: 'Cisco provides enterprise-grade security to protect networks with integrated threat intelligence and secure access.',
            features: ['Zero-trust security', 'Advanced malware protection', 'Secure remote access', 'Integrated threat intelligence'],
            imageUrl: ciscoImage,
        },
        {
            name: 'Ruijie Network Security',
            description: 'Ruijie offers reliable and cost-effective network security solutions for business and enterprise environments.',
            features: ['Advanced intrusion prevention', 'Network monitoring', 'Web filtering', 'Multi-layer security'],
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
                    <h1 className="text-3xl font-bold text-blue-900 text-center">Network Security Solutions</h1>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {networkSecurityProducts.map((product, index) => (
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

export default NetworkSecurityDetails;
