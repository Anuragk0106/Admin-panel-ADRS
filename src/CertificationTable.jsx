import { useState } from "react";
import { FaSearch, FaEllipsisV } from "react-icons/fa";

const CertificationTable = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Sample certification data
  const certifications = [
    { name: "React Developer", employees: 25, expiresIn: "6 months", status: "Active" },
    { name: "JavaScript Expert", employees: 18, expiresIn: "1 year", status: "Active" },
    { name: "UI/UX Specialist", employees: 12, expiresIn: "3 months", status: "Expiring Soon" },
    { name: "Data Science Professional", employees: 30, expiresIn: "9 months", status: "Active" },
    { name: "Machine Learning Engineer", employees: 8, expiresIn: "1 month", status: "Expiring Soon" },
  ];

  // Filter certifications based on search input
  const filteredCertifications = certifications.filter(cert =>
    cert.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Certifications</h2>
        <button className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800">
          + Add Certification
        </button>
      </div>

      {/* Search Bar */}
      <div className="mb-4 flex items-center space-x-2 border rounded-lg px-3 py-2">
        <FaSearch className="text-gray-500" />
        <input
          type="text"
          placeholder="Search certifications..."
          className="w-full outline-none text-gray-700"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Certification Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse rounded-lg">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="text-left p-3">Name</th>
              <th className="p-3">Employees</th>
              <th className="p-3">Expires In</th>
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCertifications.map((cert, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="p-3">{cert.name}</td>
                <td className="p-3 text-center">{cert.employees}</td>
                <td className="p-3 text-center">{cert.expiresIn}</td>
                <td className="p-3 text-center">
                  <span
                    className={`px-2 py-1 text-sm rounded-lg ${
                      cert.status === "Active" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {cert.status}
                  </span>
                </td>
                <td className="p-3 text-center">
                  <FaEllipsisV className="text-gray-500 cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CertificationTable;
