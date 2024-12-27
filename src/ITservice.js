import React from "react";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer";
import serviceImg from "../images/website images/laptops ai.png";

const ITMaintainanceService = () => {
  const services = [
    {
      title: "Hardware Maintenance",
      description:
        "Repair, replacement, and upgrades of desktops, laptops, and networking devices. Ensuring optimal performance of your hardware.",
      icon: "💻",
    },
    {
      title: "Network Setup & Troubleshooting",
      description:
        "Complete networking solutions, including installations, troubleshooting, and performance optimization for seamless connectivity.",
      icon: "🌐",
    },
    {
      title: "CCTV Maintenance",
      description:
        "Regular servicing, troubleshooting, and updates for CCTV cameras to maintain 24/7 surveillance and security.",
      icon: "📹",
    },
    {
      title: "Server Maintenance",
      description:
        "Monitoring, updating, and maintaining server infrastructure to ensure minimal downtime and high availability.",
      icon: "🖥️",
    },
    {
      title: "Software Installation & Updates",
      description:
        "Installation, licensing, and updates for various software, ensuring your systems remain secure and up-to-date.",
      icon: "🛠️",
    },
    {
      title: "Data Backup & Recovery",
      description:
        "Implementation of backup solutions and data recovery services to safeguard your business-critical information.",
      icon: "🔒",
    },
    {
      title: "Firewall & Security Solutions",
      description:
        "Installation and maintenance of firewalls and security systems to protect your network from cyber threats.",
      icon: "🔥",
    },
    {
      title: "On-Site & Remote Support",
      description:
        "Quick and efficient support services, available both on-site and remotely, tailored to your business needs.",
      icon: "📞",
    },
  ];

  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="bg-gray-100 py-4 mt-24">
        <div className="m-auto max-w-6xl p-4 md:p-12 text-center">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">
            Comprehensive IT Maintenance Services
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            At Vipsee Infotech, we ensure your IT infrastructure is reliable,
            secure, and always operational.
          </p>
          <img
            src={serviceImg}
            alt="IT Maintenance Services"
            className="rounded-xl mb-8 shadow-lg mx-auto max-w-full md:max-w-sm h-auto"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition-shadow duration-300"
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
              >
                <div className="text-4xl text-blue-900 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ITMaintainanceService;
