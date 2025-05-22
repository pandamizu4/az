import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import CVPage from './pages/CVPage';
import ServicesPage from './pages/ServicesPage';

// Main App component - handles routing configuration
function App() {
  return (
    // Define application routes using React Router
    <Routes>
      {/* Main Layout wrapper - contains header and footer */}
      <Route path="/" element={<Layout />}>
        {/* Home page - landing page route */}
        <Route index element={<HomePage />} />
        {/* Portfolio page - showcases work samples */}
        <Route path="portfolio" element={<PortfolioPage />} />
        {/* Contact page - contact information and form */}
        <Route path="contact" element={<ContactPage />} />
        {/* CV page - resume and professional experience */}
        <Route path="cv" element={<CVPage />} />
        {/* Services page - available services and offerings */}
        <Route path="services" element={<ServicesPage />} />
      </Route>
    </Routes>
  );
}

export default App;
