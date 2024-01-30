import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/User/Homepage";
import Properties from "./pages/User/Properties";
import Contact from "./pages/User/Contact";
import PropertiesDetails from "./pages/User/PropertiesDetails";
import Signup from "./pages/User/Signup";
import Login from "./pages/User/Login";
import Inspection from "./pages/User/Inspection";

// admin routes
import ErrorPage from "./pages/ErrorPage";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AddNewProperties from "./pages/Admin/AddNewProperties";
import AdminProperties from "./pages/Admin/AdminProperties";
import AdminInspection from "./pages/Admin/AdminInspection";
import AdminPropertyDetails from "./pages/Admin/AdminPropertyDetails";
import AdminPropertyEdit from "./pages/Admin/AdminPropertyEdit";
import SignupForm from "./pages/Admin/AdminSignupForm";
import SigninForm from "./pages/Admin/AdminSigninForm";

function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            {/* User Routes */}
            <Route path="/" element={<Homepage />} />
            <Route path="/properties" element={<Properties />} />
            <Route
              path="/properties/:propertyId"
              element={<PropertiesDetails />}
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/inspection" element={<Inspection />} />

            {/* Admin Routes */}
            <Route path="/admin" element={<SigninForm />} />

            <Route path="/admin/login" element={<SigninForm />} />
            <Route path="/admin/signup" element={<SignupForm />} />

            {/* ADMIN DASHBOARD ROUTES */}
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/add" element={<AddNewProperties />} />

            <Route path="/admin/inspection" element={<AdminInspection />} />
            <Route path="/admin/properties" element={<AdminProperties />} />
            <Route
              path="/admin/edit/:propertyId"
              element={<AdminPropertyEdit />}
            />
            <Route
              path="/admin/properties/:propertyId"
              element={<AdminPropertyDetails />}
            />
            {/* Error Route */}
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
