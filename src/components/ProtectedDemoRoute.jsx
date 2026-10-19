import { Navigate } from "react-router-dom";

// Optional demonstration guard. This assignment intentionally does not implement real authentication.
export default function ProtectedDemoRoute({ children, role = "Admin" }) {
  const destination = role === "Teacher" ? "/teacher" : "/admin";
  return children ? children : <Navigate to={destination} replace />;
}
