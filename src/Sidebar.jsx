import { useState, useEffect } from "react";
import { FaTachometerAlt, FaBook, FaUsers, FaCertificate, FaChartBar, FaCog, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close sidebar when clicking outside (only in mobile)
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isOpen && window.innerWidth < 768 && !event.target.closest(".sidebar")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isOpen]);

  return (
    <>
      {/* Mobile Menu Button (Only Visible in Mobile) */}
      <button 
        className="md:hidden p-3 text-gray-700 fixed top-4 left-4 z-30"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaBars size={24} />
      </button>

      {/* Overlay (Only in Mobile View) */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div 
        className={`sidebar h-screen w-64 bg-gray-100 p-5 shadow-md fixed top-0 left-0 z-20 transition-transform duration-300 ease-in-out 
        ${isOpen ? "translate-x-0" : "-translate-x-64"} 
        md:translate-x-0 md:relative`}
      >
        {/* Logo */}
        <h1 className="text-xl font-bold mb-6">LMS Admin</h1>

        {/* Navigation Links */}
        <ul className="space-y-4">
          <li>
            <Link to="/" className="flex items-center space-x-2 text-gray-700 hover:text-black">
              <FaTachometerAlt /> <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/courses" className="flex items-center space-x-2 text-gray-700 hover:text-black">
              <FaBook /> <span>Courses</span>
            </Link>
          </li>
          <li>
            <Link to="/employees" className="flex items-center space-x-2 text-gray-700 hover:text-black">
              <FaUsers /> <span>Employees</span>
            </Link>
          </li>
          <li>
            <Link to="/certifications" className="flex items-center space-x-2 text-gray-700 hover:text-black">
              <FaCertificate /> <span>Certifications</span>
            </Link>
          </li>
          <li>
            <Link to="/reports" className="flex items-center space-x-2 text-gray-700 hover:text-black">
              <FaChartBar /> <span>Reports</span>
            </Link>
          </li>
          <li>
            <Link to="/settings" className="flex items-center space-x-2 text-gray-700 hover:text-black">
              <FaCog /> <span>Settings</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
