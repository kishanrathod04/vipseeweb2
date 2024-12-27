
import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import DemoProduct from './pages/DemoProduct';
import CyberSecurity from './pages/CyberSecurity';
import ITProducts from './pages/ITProducts';
import NetworkSecurity from './pages/CameraProducts';
import Mobility from './pages/Mobility';
import PrinterDetails from './pages/PrinterDetails'; // Import PrinterDetails page
// Components
import Portfolio from './components/Portfolio';
import { useDocTitle } from './components/CustomHook';
import ScrollToTop from './components/ScrollToTop';


import FirewallDetails from './pages/FirewallDetails';
// Add other import statements for VPN, Antivirus, etc.
import AntivirusDetails from './pages/AntivirusDetails';  // Add this import
import LaptopDetails from './pages/LaptopDetails'; // Import the Laptop Details page
import CameraProducts from './pages/CameraProducts'; // Import the Camera Products page
import NetworkSecurityDetails from './pages/NetworkSecurityDetails'; //import the netwrok security products
import MobilityProductsDetails from './pages/MobilityProductsDetails';
import RAppDetails from './pages/RAppDetails';
import NetworkDevicesDetails from './pages/NetworkDevicesDetails'; // Adjust the path



function App() {
  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: 'ease-out-cubic',
      });
    };

    window.addEventListener('load', () => {
      aos_init();
    });
  }, []);

  useDocTitle("MLD | Molad e Konsult - Bespoke Web and Mobile Applications");

  return (
    <>
      <Router>
        <ScrollToTop>
          <Routes>
            {/* Home and Contact Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            

            {/* Demo Page */}
            <Route path="/get-demo" element={<DemoProduct />} />

            {/* Portfolio and Category Pages */}
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/cyber-security" element={<CyberSecurity />} />
            <Route path="/it-products" element={<ITProducts />} />
            <Route path="/network-security" element={<NetworkSecurity />} />
            <Route path="/mobility" element={<Mobility />} />
            <Route path="/" element={<CyberSecurity />} />
            <Route path="/firewall-details" element={<FirewallDetails />} />
            <Route path="/antivirus-details" element={<AntivirusDetails />} /> {/* Add this route */}
            <Route path="/laptops" element={<LaptopDetails />} />
            <Route path="/cameras" element={<CameraProducts />} />
            <Route path="/network-security-details" element={<NetworkSecurityDetails />} />
            <Route path="/mobility-products-details" element={<MobilityProductsDetails />} />
            <Route path="/r-app-details" element={<RAppDetails />} />
            <Route path="/network-devices-details" element={<NetworkDevicesDetails />} />
            <Route path="/printers" element={<PrinterDetails />} />
            
          
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;
