import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './pages/Services';
import CyberSecurity from './pages/CyberSecurity';
import ITProducts from './pages/ITProducts';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Services />} />
                <Route path="/cyber-security" element={<CyberSecurity />} />
                <Route path="/it-products" element={<ITProducts />} />
            </Routes>
        </Router>
    );
}

export default App;
