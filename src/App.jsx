import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Certifications from "./Certifications";

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-grow p-6">
          <Routes>
            <Route path="/certifications" element={<Certifications />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
