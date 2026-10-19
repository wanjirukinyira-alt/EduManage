import { Link } from "react-router-dom";
import StatCard from "../components/StatCard";
import { initialStudents } from "../data/sampleData";

export default function TeacherDashboard() {
  return (
    <>
      <div className="page-heading"><div><span className="eyebrow eyebrow-dark">TEACHER OVERVIEW</span><h1>Welcome back, Teacher <span className="wave">✦</span></h1><p>Here’s a quick overview of the students you support.</p></div><Link to="/teacher/students" className="btn btn-forest"><i className="bi bi-plus-lg me-2" />Manage students</Link></div>
      <div className="row g-3 mb-4">
        <div className="col-sm-6 col-xl-4"><StatCard icon="bi-people" label="Total students" value={initialStudents.length} note="Sample student records" /></div>
        <div className="col-sm-6 col-xl-4"><StatCard icon="bi-person-check" label="Active students" value={initialStudents.filter(s => s.status === "Active").length} note="Currently enrolled" tone="mint" /></div>
        <div className="col-sm-6 col-xl-4"><StatCard icon="bi-journal-bookmark" label="Semesters" value={new Set(initialStudents.map(student => student.semester)).size} note="Across student records" tone="lavender" /></div>
      </div>
      <div className="row g-4">
        <div className="col-lg-7"><section className="panel-card"><div className="panel-header"><div><h2>Recent student records</h2><p>Sample students in the system</p></div><Link to="/teacher/students">View all <i className="bi bi-arrow-up-right" /></Link></div>
          {initialStudents.slice(0, 4).map(s => <div className="recent-row" key={s.id}><div className="table-avatar">{s.name.split(" ").map(n => n[0]).join("")}</div><div className="recent-main"><strong>{s.name}</strong><small>{s.semester} · {s.course}</small></div><span className={`status-pill ${s.status.toLowerCase()}`}>{s.status}</span></div>)}
        </section></div>
        <div className="col-lg-5"><section className="panel-card"><div className="panel-header"><div><h2>Your workspace</h2><p>Useful links for your day</p></div></div>
          <div className="quick-actions">
            <Link to="/teacher/students" className="quick-action"><span className="quick-icon"><i className="bi bi-search" /></span><span><strong>Find a student</strong><small>Search and filter records</small></span><i className="bi bi-chevron-right ms-auto" /></Link>
            <Link to="/teacher/settings" className="quick-action"><span className="quick-icon"><i className="bi bi-gear" /></span><span><strong>Account settings</strong><small>Review your preferences</small></span><i className="bi bi-chevron-right ms-auto" /></Link>
            <Link to="/teacher/help" className="quick-action"><span className="quick-icon"><i className="bi bi-life-preserver" /></span><span><strong>Help & support</strong><small>Learn how to use the portal</small></span><i className="bi bi-chevron-right ms-auto" /></Link>
          </div>
        </section></div>
      </div>
    </>
  );
}
