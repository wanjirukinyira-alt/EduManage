import { Link } from "react-router-dom";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="container home-features section-pad">
        <div className="section-heading text-center">
          <span className="eyebrow eyebrow-dark">MADE FOR YOUR SCHOOL</span>
          <h2>Everything in one calm, clear space.</h2>
          <p>Spend less time searching for information and more time supporting learning.</p>
        </div>
        <div className="row g-4 mt-2">
          {[
            ["bi-people", "Student records", "Keep student information organized and easy to find."],
            ["bi-person-workspace", "Teacher management", "Manage teaching staff and course details in one place."],
            ["bi-graph-up-arrow", "Helpful overview", "See key school statistics at a glance."]
          ].map(([icon, title, description]) => (
            <div className="col-md-4" key={title}><div className="feature-card"><div className="feature-icon"><i className={`bi ${icon}`} /></div><h3>{title}</h3><p>{description}</p></div></div>
          ))}
        </div>
        <div className="home-cta"><div><span className="eyebrow eyebrow-dark">READY TO GET ORGANIZED?</span><h2>Bring your school records together.</h2></div><Link to="/login" className="btn btn-forest btn-lg">Open dashboard <i className="bi bi-arrow-right ms-2" /></Link></div>
      </section>
      <footer className="site-footer"><div className="container d-flex flex-wrap justify-content-between gap-2"><span>© 2026 EduManage · Student Management System</span><Link to="/about">About the project</Link></div></footer>
    </>
  );
}
