import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import AdminDashboard from "./pages/AdminDashboard";
import TeacherDashboard from "./pages/TeacherDashboard";
import StudentManagement from "./pages/StudentManagement";
import TeacherManagement from "./pages/TeacherManagement";
import Settings from "./pages/Settings";
import Help from "./pages/Help";
import NotFound from "./pages/NotFound";
import AppLayout from "./components/AppLayout";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route element={<AppLayout />}>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/students" element={<StudentManagement role="Admin" />} />
        <Route path="/admin/teachers" element={<TeacherManagement />} />
        <Route path="/admin/settings" element={<Settings role="Admin" />} />
        <Route path="/admin/help" element={<Help role="Admin" />} />
        <Route path="/teacher" element={<TeacherDashboard />} />
        <Route path="/teacher/students" element={<StudentManagement role="Teacher" />} />
        <Route path="/teacher/settings" element={<Settings role="Teacher" />} />
        <Route path="/teacher/help" element={<Help role="Teacher" />} />
      </Route>
      <Route path="/dashboard" element={<Navigate to="/admin" replace />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
