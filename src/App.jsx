import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import SiteLayout from './components/layout/SiteLayout';
import AllWeatherPage from './pages/AllWeather';
import ContactPage from './pages/Contact';
import Home from './pages/Home';

const pageMetadata = {
  '/': {
    title: 'BrainTree Capital | Managed Global ETF Portfolios for NRIs & Indian Residents',
    description: 'Managed global UCITS ETF portfolios for Indian residents, NRIs & foreign investors. Built on the Layered Pyramid approach.',
  },
  '/contact': {
    title: 'Contact BrainTree Capital',
    description: 'Contact BrainTree Capital directly by email or schedule a 30-minute call.',
  },
  '/portfolios/all-weather': {
    title: 'All Weather Portfolio | BrainTree Capital',
    description: "Learn about BrainTree Capital's All Weather portfolio.",
  },
};

function RouteMetadata() {
  const { pathname } = useLocation();

  useEffect(() => {
    const normalizedPath = pathname.replace(/\/+$/, '') || '/';
    const page = pageMetadata[normalizedPath] ?? pageMetadata['/'];
    const canonicalUrl = `https://www.braintreecap.com${normalizedPath === '/' ? '/' : normalizedPath}`;
    const values = [
      ['meta[name="description"]', 'content', page.description],
      ['link[rel="canonical"]', 'href', canonicalUrl],
      ['meta[property="og:title"]', 'content', page.title],
      ['meta[property="og:description"]', 'content', page.description],
      ['meta[property="og:url"]', 'content', canonicalUrl],
      ['meta[name="twitter:title"]', 'content', page.title],
      ['meta[name="twitter:description"]', 'content', page.description],
    ];

    document.title = page.title;
    values.forEach(([selector, attribute, value]) => {
      document.querySelector(selector)?.setAttribute(attribute, value);
    });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <RouteMetadata />
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/portfolios/all-weather" element={<AllWeatherPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MotionConfig>
  );
}
