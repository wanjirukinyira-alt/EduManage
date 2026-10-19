import { Link } from "react-router-dom";
import StatCard from "../components/StatCard";
import { initialStudents, initialTeachers } from "../data/sampleData";

export default function AdminDashboard() {
  const students = initialStudents;
  const teachers = initialTeachers;
  return (
    <>
      <div className="page-heading"><div><span className="eyebrow eyebrow-dark">OVERVIEW</span><h1>Good afternoon, Admin <span className="wave">✦</span></h1><p>Here’s what’s happening across your school today.</p></div><Link to="/admin/students" className="btn btn-forest"><i className="bi bi-plus-lg me-2" />Manage records</Link></div>
      <div className="row g-3 mb-4">
        <div className="col-sm-6 col-xl-3"><StatCard icon="bi-people" label="Total students" value={students.length} note="+2 this month" /></div>
        <div className="col-sm-6 col-xl-3"><StatCard icon="bi-person-workspace" label="Total teachers" value={teachers.length} note="Teaching staff" tone="mint" /></div>
        <div className="col-sm-6 col-xl-3"><StatCard icon="bi-person-check" label="Active students" value={students.filter(s => s.status === "Active").length} note="Currently enrolled" tone="peach" /></div>
        <div className="col-sm-6 col-xl-3"><StatCard icon="bi-journal-check" label="Semesters" value={new Set(students.map(student => student.semester)).size} note="Across student records" tone="lavender" /></div>
      </div>
      <div className="row g-4">
        <div className="col-lg-7"><section className="panel-card h-100"><div className="panel-header"><div><h2>Recently added students</h2><p>Quick look at student records</p></div><Link to="/admin/students">View all <i className="bi bi-arrow-up-right" /></Link></div>
          <div className="table-responsive"><table className="table align-middle data-table"><thead><tr><th>Student</th><th>Semester</th><th>Course</th><th>Status</th></tr></thead><tbody>{students.slice(0, 4).map(s => <tr key={s.id}><td><div className="person-cell"><div className="table-avatar">{s.name.split(" ").map(n => n[0]).join("")}</div><div><strong>{s.name}</strong><small>{s.email}</small></div></div></td><td>{s.semester}</td><td>{s.course}</td><td><span className={`status-pill ${s.status.toLowerCase()}`}>{s.status}</span></td></tr>)}</tbody></table></div>
        </section></div>
        <div className="col-lg-5"><section className="panel-card h-100"><div className="panel-header"><div><h2>Quick actions</h2><p>Jump into a task</p></div></div><div className="quick-actions">
          <Link to="/admin/students" className="quick-action"><span className="quick-icon"><i className="bi bi-person-plus" /></span><span><strong>Manage students</strong><small>Add, edit, or find a student</small></span><i className="bi bi-chevron-right ms-auto" /></Link>
          <Link to="/admin/teachers" className="quick-action"><span className="quick-icon"><i className="bi bi-person-workspace" /></span><span><strong>Manage teachers</strong><small>Keep staff records up to date</small></span><i className="bi bi-chevron-right ms-auto" /></Link>
          <Link to="/admin/settings" className="quick-action"><span className="quick-icon"><i className="bi bi-sliders" /></span><span><strong>Workspace settings</strong><small>Update demo preferences</small></span><i className="bi bi-chevron-right ms-auto" /></Link>
        </div></section></div>
      </div>
      <div className="notice mt-4"><i className="bi bi-lightbulb me-2" />Tip: this project uses sample data in React state. Changes demonstrate the interface and reset when the page is refreshed.</div>
    </>
  );
}
