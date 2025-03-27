import { Navigate } from "react-router-dom";

function ProtectedRoute({ Component }) {
    const isAuthenticated = localStorage.getItem("token"); // Change auth logic as needed
    return isAuthenticated ? <Component /> : <Navigate to="/login" />;
}

export default ProtectedRoute;
