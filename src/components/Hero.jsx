import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">
      <nav className="hero-nav container">
        <Link to="/" className="brand brand-light"><span className="brand-mark">✿</span> EduManage</Link>
        <div className="hero-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link className="hero-login" to="/login">Login</Link>
        </div>
      </nav>
      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="eyebrow"><i className="bi bi-stars me-2" />SMARTER SCHOOL MANAGEMENT</span>
          <h1>Empowering Education,<br /><span>One Student at a Time.</span></h1>
          <p>A simpler way to manage students, support teachers, and bring your school community together.</p>
          <div className="d-flex flex-wrap gap-3">
            <Link to="/signup" className="btn btn-mint btn-lg">Get started <i className="bi bi-arrow-right ms-2" /></Link>
            <Link to="/about" className="btn btn-outline-light btn-lg">Learn more</Link>
          </div>
          <div className="hero-note"><i className="bi bi-check-circle-fill me-2" />Simple. Organized. Student-focused.</div>
        </div>
        <div className="hero-floating-card d-none d-lg-flex">
          <div className="floating-icon"><i className="bi bi-mortarboard-fill" /></div>
          <div><strong>Learning made simpler</strong><small>One organized school community</small></div>
        </div>
      </div>
    </section>
  );
}
