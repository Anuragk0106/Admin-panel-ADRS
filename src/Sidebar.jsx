import { FaTachometerAlt, FaBook, FaUsers, FaCertificate, FaChartBar, FaCog } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-100 p-5 shadow-md">
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
  );
};

export default Sidebar;
