import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Admin");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    if (!email.trim() || !password.trim()) {
      setError("Please enter both your email and password.");
      return;
    }
    setError("");
    navigate(role === "Teacher" ? "/teacher" : "/admin");
  }

  return (
    <div className="auth-page">
      <div className="auth-visual"><Link to="/" className="brand brand-light"><span className="brand-mark">✿</span> EduManage</Link><div className="auth-visual-copy"><span className="eyebrow">WELCOME BACK</span><h1>Good systems make room for great learning.</h1><p>Your school workspace, thoughtfully organized.</p></div><small>Simple. Organized. Student-focused.</small></div>
      <div className="auth-panel"><Link to="/" className="back-link"><i className="bi bi-arrow-left me-2" />Back to home</Link><div className="auth-form-wrap"><span className="eyebrow eyebrow-dark">YOUR WORKSPACE</span><h2>Sign in to EduManage</h2><p className="muted">Enter any demo email and password to explore the interface.</p>
        <form onSubmit={handleSubmit} noValidate>
          <label className="form-label" htmlFor="email">Email address</label><input id="email" className="form-control form-control-lg" type="email" placeholder="you@school.com" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label className="form-label mt-3" htmlFor="password">Password</label><input id="password" className="form-control form-control-lg" type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <label className="form-label mt-3" htmlFor="role">Continue as</label><select id="role" className="form-select form-select-lg" value={role} onChange={(e) => setRole(e.target.value)}><option>Admin</option><option>Teacher</option></select>
          {error && <div className="alert alert-danger mt-3 mb-0">{error}</div>}
          <button className="btn btn-forest btn-lg w-100 mt-4" type="submit">Sign in <i className="bi bi-arrow-right ms-2" /></button>
        </form>
        <p className="auth-bottom">New to EduManage? <Link to="/signup">Create an account</Link></p>
        <div className="demo-note"><i className="bi bi-info-circle me-2" />Demo only — do not use a real password.</div>
      </div></div>
    </div>
  );
}
