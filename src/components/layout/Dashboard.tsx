// src/pages/Dashboard.jsx
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../../components/layout/Sidebar';
import TopNavbar from '../../components/layout/TopNavbar';

const Dashboard = () => {
  const location = useLocation();

  // Extract the last part of the pathname and capitalize it
  const getTitleFromPath = (path) => {
    const segments = path.split('/').filter(Boolean);
    if (segments.length === 0) return 'Dashboard'; // Default title
    return segments[segments.length - 1]
      .replace(/-/g, ' ') // Replace hyphens with spaces
      .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize first letter
  };

  return (
    <div className="flex min-h-screen overflow-hidden">
      <Sidebar onToggle={() => {}} />

      <div className="flex-1 flex flex-col min-w-0">
        <TopNavbar title={getTitleFromPath(location.pathname)} />

        <div className="flex-1 overflow-hidden">
          <div className="h-full w-full">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
