import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "", role: "Teacher" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  function update(event) { setForm({ ...form, [event.target.name]: event.target.value }); }
  function submit(event) {
    event.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.password || !form.confirm) return setError("Please complete all fields.");
    if (form.password.length < 6) return setError("Use at least 6 characters for the demo password.");
    if (form.password !== form.confirm) return setError("Your passwords do not match.");
    setError("");
    navigate("/login");
  }
  return (
    <div className="auth-page signup-page">
      <div className="auth-visual"><Link to="/" className="brand brand-light"><span className="brand-mark">✿</span> EduManage</Link><div className="auth-visual-copy"><span className="eyebrow">A BETTER ORGANIZED DAY</span><h1>Make school management feel simpler.</h1><p>Set up your demo profile and explore the workspace.</p></div><small>Built for administrators and teachers.</small></div>
      <div className="auth-panel"><Link to="/" className="back-link"><i className="bi bi-arrow-left me-2" />Back to home</Link><div className="auth-form-wrap"><span className="eyebrow eyebrow-dark">GET STARTED</span><h2>Create your account</h2><p className="muted">This form demonstrates registration and validation only.</p>
        <form onSubmit={submit} noValidate>
          <label className="form-label" htmlFor="name">Full name</label><input id="name" name="name" className="form-control" placeholder="Your full name" value={form.name} onChange={update} />
          <label className="form-label mt-3" htmlFor="signup-email">Email address</label><input id="signup-email" name="email" type="email" className="form-control" placeholder="you@school.com" value={form.email} onChange={update} />
          <div className="row g-3 mt-0"><div className="col-sm-6"><label className="form-label mt-3" htmlFor="signup-password">Password</label><input id="signup-password" name="password" type="password" className="form-control" placeholder="Min. 6 characters" value={form.password} onChange={update} /></div><div className="col-sm-6"><label className="form-label mt-3" htmlFor="confirm">Confirm password</label><input id="confirm" name="confirm" type="password" className="form-control" placeholder="Repeat password" value={form.confirm} onChange={update} /></div></div>
          <label className="form-label mt-3" htmlFor="signup-role">Account role</label><select id="signup-role" name="role" className="form-select" value={form.role} onChange={update}><option>Teacher</option><option>Admin</option></select>
          {error && <div className="alert alert-danger mt-3 mb-0">{error}</div>}
          <button className="btn btn-forest btn-lg w-100 mt-4" type="submit">Create demo account</button>
        </form>
        <p className="auth-bottom">Already have an account? <Link to="/login">Sign in</Link></p>
      </div></div>
    </div>
  );
}
