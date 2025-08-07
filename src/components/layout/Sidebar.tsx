import { useState } from 'react';
import {
  FaChevronLeft,
  FaChevronRight,
  FaFileAlt,
  FaFileUpload,
  FaQuestion,
  FaSignOutAlt,
  FaUserCheck,
  FaUsers
} from 'react-icons/fa';

import { RiOrganizationChart } from 'react-icons/ri';
import { useLocation, useNavigate } from 'react-router-dom';
import logocollapse from '../../assets/images/logo-collapse.png';
import logo from '../../assets/images/logo1.png';
import { useAuth } from '../../context/AuthHooks';

const Sidebar = ({ onToggle }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isNavHovered, setIsNavHovered] = useState(false);
  const { logout, role } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
    onToggle(!isCollapsed);
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  const shouldExpand = isNavHovered && isCollapsed;

  return (
    <div className="relative">
      <div
        className={`${shouldExpand ? 'w-60' : isCollapsed ? 'w-16' : 'w-60'} h-full bg-gradient-to-b from-white-50 to-white-100 border-r border-gray-200 flex flex-col transition-all duration-400 ease-in-out overflow-hidden font-sans`}
      >
        {/* Collapse Button */}
        <button
          className="absolute -right-4 top-6 bg-white p-2 rounded-full shadow-lg hover:bg-emerald-50 hover:shadow-xl transition-all duration-200 group"
          onClick={toggleSidebar}
        >

          {isCollapsed ? (
            <FaChevronRight size={16} className="text-emerald-500 text-lg group-hover:text-emerald-600" />
          ) : (
            <FaChevronLeft size={20} className="text-emerald-500 text-lg group-hover:text-emerald-600" />
          )}
        </button>

        {/* Logo Section */}
        <div
          className={`flex items-center py-4 border-b border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors duration-200 ${isCollapsed ? 'justify-center' : 'justify-start pl-5'}`}
          onClick={handleLogoClick}
        >
          {shouldExpand ? (
            <img
              src={logo}
              alt="Logo"
              className="h-14 w-auto brightness-110 contrast-110 transition-all duration-300"
            />
          ) : isCollapsed ? (
            <img
              src={logocollapse}
              alt="Logo"
              className="h-14 w-12 p-0 brightness-110 contrast-110 transition-all duration-300"
            />
          ) : (
            <img
              src={logo}
              alt="Logo"
              className="h-14 w-auto brightness-110 contrast-110 transition-all duration-300"
            />
          )}
        </div>

        {/* Navigation Items */}
        <div
          className="flex-1 pt-4"
          onMouseEnter={() => setIsNavHovered(true)}
          onMouseLeave={() => setIsNavHovered(false)}
        >
          <nav className={`px-3 py-4 ${isCollapsed ? 'pt-6' : 'pt-2'}`}>
            <ul className="space-y-1">
              {role === 'client' && (
                <>
                  <NavItem
                    icon={<FaUsers className="text-emerald-500 group-hover:text-emerald-600" />}
                    label="Verifier Role"
                    path="/dashboard/verifier-role"
                    active={location.pathname === '/dashboard/verifier-role'}
                    isCollapsed={isCollapsed}
                    shouldShowLabel={shouldExpand}
                  />
                  <NavItem
                    icon={<FaUserCheck className="text-emerald-500 group-hover:text-emerald-600" />}
                    label="Verifier User"
                    path="/dashboard/verifier-user"
                    active={location.pathname === '/dashboard/verifier-user'}
                    isCollapsed={isCollapsed}
                    shouldShowLabel={shouldExpand}
                  />
                  <NavItem
                    icon={<FaFileAlt className="text-emerald-500 group-hover:text-emerald-600" />}
                    label="Proof Templates"
                    path="/dashboard/proof-templates"
                    active={location.pathname === '/dashboard/proof-templates'}
                    isCollapsed={isCollapsed}
                    shouldShowLabel={shouldExpand}
                  />
                </>
              )}
              {role === 'admin' && (
                <>
                <NavItem
                  icon={<RiOrganizationChart className="text-emerald-500 group-hover:text-emerald-600" />}
                  label="Create Organization"
                  path="/dashboard/create-organization"
                  active={location.pathname === '/dashboard/create-organization'}
                  isCollapsed={isCollapsed}
                  shouldShowLabel={shouldExpand}
                />
              <NavItem
                icon={<FaFileUpload className="text-emerald-500 group-hover:text-emerald-600" />}
                label="Upload Schema File"
                path="/dashboard/schema-upload"
                active={location.pathname === '/dashboard/schema-upload'}
                isCollapsed={isCollapsed}
                shouldShowLabel={shouldExpand}
              />
              </>
              )}
              {/* Temporarily hidden - will be enabled later */}
              {/* <NavItem
                icon={<FaQuestion className="text-emerald-500 group-hover:text-emerald-600" />}
                label="Connection"
                path="/dashboard/connection"
                active={location.pathname === '/dashboard/connection'}
                isCollapsed={isCollapsed}
                shouldShowLabel={shouldExpand}
              />
              <NavItem
                icon={<FaQuestion className="text-emerald-500 group-hover:text-emerald-600" />}
                label="Create DID"
                path="/dashboard/create-did"
                active={location.pathname === '/dashboard/create-did'}
                isCollapsed={isCollapsed}
                shouldShowLabel={shouldExpand}
              />
              <NavItem
                icon={<FaQuestion className="text-emerald-500 group-hover:text-emerald-600" />}
                label="Register Schema"
                path="/dashboard/register-schema"
                active={location.pathname === '/dashboard/register-schema'}
                isCollapsed={isCollapsed}
                shouldShowLabel={shouldExpand}
              />
              <NavItem
                icon={<FaQuestion className="text-emerald-500 group-hover:text-emerald-600" />}
                label="Issuance"
                path="/dashboard/issuance"
                active={location.pathname === '/dashboard/issuance'}
                isCollapsed={isCollapsed}
                shouldShowLabel={shouldExpand}
              />
              <NavItem
                icon={<FaQuestion className="text-emerald-500 group-hover:text-emerald-600" />}
                label="Verification"
                path="/dashboard/verification"
                active={location.pathname === '/dashboard/verification'}
                isCollapsed={isCollapsed}
                shouldShowLabel={shouldExpand}
              />
              <NavItem
                icon={<FaQuestion className="text-emerald-500 group-hover:text-emerald-600" />}
                label="User"
                path="/dashboard/user"
                active={location.pathname === '/dashboard/user'}
                isCollapsed={isCollapsed}
                shouldShowLabel={shouldExpand}
              /> */}
              <NavItem
                icon={<FaQuestion className="text-emerald-500 group-hover:text-emerald-600" />}
                label="FAQ"
                path="/dashboard/faq"
                active={location.pathname === '/dashboard/faq'}
                isCollapsed={isCollapsed}
                shouldShowLabel={shouldExpand}
              />
            </ul>
          </nav>
        </div>

        {/* Logout Button */}
         <div
          className={`border-t mb-[0.3rem] border-gray-200 ${isCollapsed ? 'px-2' : 'px-4'} py-1`}
        >
          <button
            onClick={logout}
            className="flex items-center w-full text-emerald-100 hover:text-emerald-600 font-medium group transition-colors duration-200"
          >
            <div className="py-1 pl-4 rounded-md group-hover:bg-emerald-50 transition-colors duration-200">
              <FaSignOutAlt className="w-5 h-5 text-emerald-400 group-hover:text-emerald-600" />
            </div>
            {(!isCollapsed || shouldExpand) && (
              <span className="ml-3 text-emerald-400 group-hover:text-emerald-700 transition-colors duration-200">
                Logout
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

const NavItem = ({ icon, label, path, active, isCollapsed, shouldShowLabel }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
  };

  return (
    <li>
      <div
        onClick={handleClick}
        className={`flex items-center px-4 py-3 rounded-lg cursor-pointer transition-all duration-200 group ${
          active ? 'bg-emerald-50 text-emerald-600 font-medium border-l-4 border-emerald-500' : 'text-gray-600 hover:bg-emerald-50 hover:text-emerald-600'
        }`}
      >
        <div className="flex items-center">
          <span className={`transition-transform duration-200 ${!active ? 'group-hover:scale-110' : ''}`}>
            {icon}
          </span>
          {(!isCollapsed || shouldShowLabel) && (
            <span className={`ml-3 transition-transform duration-200 ${!active ? 'group-hover:translate-x-1' : ''}`}>
              {label}
            </span>
          )}
        </div>
      </div>
    </li>
  );
};

export default Sidebar;