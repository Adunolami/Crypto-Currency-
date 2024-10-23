import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppProvider from '../context/AppContext';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';

function AppRoutes() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default AppRoutes;
