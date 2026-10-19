import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="public-page">
      <nav className="public-nav container"><Link to="/" className="brand"><span className="brand-mark">✿</span> EduManage</Link><Link to="/login" className="btn btn-forest">Login</Link></nav>
      <section className="container public-content">
        <span className="eyebrow eyebrow-dark">ABOUT EDUMANAGE</span>
        <h1>A clearer way to manage a school.</h1>
        <p className="lead">EduManage is a student management system concept designed to help administrators and teachers organize student records and everyday school information.</p>
        <div className="row g-4 mt-3">
          <div className="col-md-6"><div className="feature-card h-100"><div className="feature-icon"><i className="bi bi-shield-check" /></div><h3>Role-focused spaces</h3><p>Administrators can manage both students and teachers. Teachers can focus on student records and their own account settings.</p></div></div>
          <div className="col-md-6"><div className="feature-card h-100"><div className="feature-icon"><i className="bi bi-layout-text-window-reverse" /></div><h3>Simple by design</h3><p>The interface uses clear navigation, readable tables, responsive layouts, and reusable React components.</p></div></div>
        </div>
        <div className="notice mt-4"><i className="bi bi-info-circle me-2" />This is an educational demo using fictional sample data. It does not include real authentication or a backend database.</div>
        <Link to="/signup" className="btn btn-forest btn-lg mt-4">Create a demo account <i className="bi bi-arrow-right ms-2" /></Link>
      </section>
    </div>
  );
}
