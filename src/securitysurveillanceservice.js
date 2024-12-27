import React from "react";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer";
import surveillanceImg from "../images/website images/cctv camera ai.png";

const SecuritySurveillanceService = () => {
  const services = [
    {
      title: "CCTV Camera Installation",
      description:
        "Professional installation of high-quality CCTV cameras for both indoor and outdoor surveillance, tailored to your security needs.",
      icon: "📹",
    },
    {
      title: "CCTV Maintenance & Servicing",
      description:
        "Regular maintenance, troubleshooting, and updates to ensure uninterrupted 24/7 surveillance.",
      icon: "🛠️",
    },
    {
      title: "Remote Monitoring Solutions",
      description:
        "Access your surveillance feed remotely from anywhere in the world through secure and easy-to-use applications.",
      icon: "🌐",
    },
    {
      title: "Home & Office Security Systems",
      description:
        "Customized security solutions for residential and commercial spaces, combining advanced technologies with reliability.",
      icon: "🏠",
    },
    {
      title: "Alarm Systems Integration",
      description:
        "Seamlessly integrate alarm systems with your CCTV setup for real-time alerts in case of potential threats.",
      icon: "🚨",
    },
    {
      title: "Surveillance Analytics",
      description:
        "Advanced AI-based analytics for motion detection, facial recognition, and threat identification to enhance security.",
      icon: "📊",
    },
    {
      title: "Video Storage Solutions",
      description:
        "Secure and scalable storage options for storing surveillance footage, with cloud and local storage options.",
      icon: "💾",
    },
    {
      title: "Customized Surveillance Plans",
      description:
        "Designing surveillance systems to meet specific security requirements for factories, offices, retail shops, and homes.",
      icon: "📝",
    },
  ];

  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="bg-gray-100  py-4 mt-24">
        <div className="m-auto max-w-6xl p-4 md:p-12 text-center">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">
            Comprehensive Security Surveillance Services
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            At Vipsee Infotech, we deliver state-of-the-art security solutions to safeguard
            your property and provide peace of mind.
          </p>
          <img
            src={surveillanceImg}
            alt="Security Surveillance Services"
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

export default SecuritySurveillanceService;
