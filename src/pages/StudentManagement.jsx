import { useMemo, useState } from "react";
import { courses, initialStudents } from "../data/sampleData";

const semesters = ["Semester 1", "Semester 2", "Semester 3", "Semester 4"];
const emptyStudent = { name: "", email: "", semester: "Semester 1", course: courses[0], gender: "Female", status: "Active" };

export default function StudentManagement({ role = "Admin" }) {
  const [students, setStudents] = useState(initialStudents);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(emptyStudent);
  const [notice, setNotice] = useState("");
  const isAdmin = role === "Admin";

  const filteredStudents = useMemo(() => students.filter(student => {
    const query = search.toLowerCase();
    const matchesSearch = student.name.toLowerCase().includes(query) || student.email.toLowerCase().includes(query) || student.semester.toLowerCase().includes(query) || student.course.toLowerCase().includes(query);
    const matchesStatus = statusFilter === "All" || student.status === statusFilter;
    return matchesSearch && matchesStatus;
  }), [students, search, statusFilter]);

  function openAdd() { setEditingId(null); setForm(emptyStudent); setShowForm(true); setNotice(""); }
  function openEdit(student) { setEditingId(student.id); setForm({ ...student }); setShowForm(true); setNotice(""); }
  function submit(event) {
    event.preventDefault();
    if (!form.name.trim() || !form.email.trim()) return setNotice("Please provide a name and email.");
    if (editingId) {
      setStudents(current => current.map(s => s.id === editingId ? { ...form, id: editingId } : s));
      setNotice("Student record updated.");
    } else {
      setStudents(current => [{ ...form, id: Math.max(0, ...current.map(s => s.id)) + 1 }, ...current]);
      setNotice("Student added successfully.");
    }
    setShowForm(false);
  }
  function removeStudent(id) {
    if (window.confirm("Delete this sample student record?")) {
      setStudents(current => current.filter(s => s.id !== id));
      setNotice("Student record deleted.");
    }
  }

  return (
    <>
      <div className="page-heading"><div><span className="eyebrow eyebrow-dark">{role.toUpperCase()} WORKSPACE</span><h1>Student management</h1><p>View, search, and maintain student records.</p></div><button className="btn btn-forest" onClick={openAdd}><i className="bi bi-plus-lg me-2" />Add student</button></div>
      {notice && <div className="alert alert-success alert-dismissible">{notice}<button className="btn-close" onClick={() => setNotice("")} aria-label="Close" /></div>}
      {showForm && <section className="panel-card mb-4"><div className="panel-header"><div><h2>{editingId ? "Edit student" : "Add a student"}</h2><p>Fields marked with * are required.</p></div><button className="btn-close" onClick={() => setShowForm(false)} aria-label="Close form" /></div>
        <form onSubmit={submit}><div className="row g-3">
          <div className="col-md-6"><label className="form-label">Full name *</label><input className="form-control" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required /></div>
          <div className="col-md-6"><label className="form-label">Email address *</label><input type="email" className="form-control" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required /></div>
          <div className="col-md-4"><label className="form-label">Semester</label><select className="form-select" value={form.semester} onChange={e => setForm({ ...form, semester: e.target.value })}>{semesters.map(semester => <option key={semester}>{semester}</option>)}</select></div>
          <div className="col-md-4"><label className="form-label">Course</label><select className="form-select" value={form.course} onChange={e => setForm({ ...form, course: e.target.value })}>{courses.map(course => <option key={course}>{course}</option>)}</select></div>
          <div className="col-md-4"><label className="form-label">Gender</label><select className="form-select" value={form.gender} onChange={e => setForm({ ...form, gender: e.target.value })}><option>Female</option><option>Male</option><option>Prefer not to say</option></select></div>
          <div className="col-md-4"><label className="form-label">Status</label><select className="form-select" value={form.status} onChange={e => setForm({ ...form, status: e.target.value })}><option>Active</option><option>Inactive</option></select></div>
        </div><div className="d-flex justify-content-end gap-2 mt-4"><button type="button" className="btn btn-light border" onClick={() => setShowForm(false)}>Cancel</button><button className="btn btn-forest" type="submit">{editingId ? "Save changes" : "Add student"}</button></div></form>
      </section>}
      <section className="panel-card"><div className="panel-header table-panel-header"><div><h2>All students <span className="count-badge">{filteredStudents.length}</span></h2><p>Sample records for demonstration</p></div><div className="table-tools"><div className="search-box"><i className="bi bi-search" /><input aria-label="Search students" placeholder="Search students..." value={search} onChange={e => setSearch(e.target.value)} /></div><select aria-label="Filter by status" className="form-select filter-select" value={statusFilter} onChange={e => setStatusFilter(e.target.value)}><option>All</option><option>Active</option><option>Inactive</option></select></div></div>
        <div className="table-responsive"><table className="table align-middle data-table"><thead><tr><th>Student</th><th>Semester</th><th>Course</th><th>Gender</th><th>Status</th><th className="text-end">Actions</th></tr></thead><tbody>
          {filteredStudents.map(s => <tr key={s.id}><td><div className="person-cell"><div className="table-avatar">{s.name.split(" ").map(n => n[0]).join("")}</div><div><strong>{s.name}</strong><small>{s.email}</small></div></div></td><td>{s.semester}</td><td>{s.course}</td><td>{s.gender}</td><td><span className={`status-pill ${s.status.toLowerCase()}`}>{s.status}</span></td><td><div className="d-flex justify-content-end gap-2"><button className="icon-button" title="Edit student" onClick={() => openEdit(s)}><i className="bi bi-pencil" /></button>{isAdmin && <button className="icon-button danger" title="Delete student" onClick={() => removeStudent(s.id)}><i className="bi bi-trash3" /></button>}</div></td></tr>)}
          {filteredStudents.length === 0 && <tr><td colSpan="6"><div className="empty-state"><i className="bi bi-search" /><strong>No students found</strong><span>Try another search or filter.</span></div></td></tr>}
        </tbody></table></div>
        <div className="table-footer"><span>Showing {filteredStudents.length} of {students.length} student records</span><span className="muted">Demo data · resets on refresh</span></div>
      </section>
    </>
  );
}
