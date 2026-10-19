import { useMemo, useState } from "react";
import { courses, initialTeachers } from "../data/sampleData";

const blank = { name: "", email: "", courses: [courses[0], courses[1]], status: "Active" };

export default function TeacherManagement() {
  const [teachers, setTeachers] = useState(initialTeachers);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(blank);
  const [notice, setNotice] = useState("");
  const filtered = useMemo(() => teachers.filter(t => `${t.name} ${t.email} ${t.courses.join(" ")}`.toLowerCase().includes(search.toLowerCase())), [teachers, search]);

  function add() { setEditingId(null); setForm(blank); setShowForm(true); setNotice(""); }
  function edit(t) { setEditingId(t.id); setForm({ ...t, courses: [...t.courses] }); setShowForm(true); setNotice(""); }
  function updateCourse(index, value) {
    setForm(current => ({
      ...current,
      courses: current.courses.map((course, courseIndex) => courseIndex === index ? value : course)
    }));
  }
  function submit(e) {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) return setNotice("Please provide a name and email.");
    if (form.courses.length !== 2 || form.courses[0] === form.courses[1]) return setNotice("Please select two different courses.");
    if (editingId) { setTeachers(current => current.map(t => t.id === editingId ? { ...form, id: editingId } : t)); setNotice("Teacher record updated."); }
    else { setTeachers(current => [{ ...form, id: Math.max(0, ...current.map(t => t.id)) + 1 }, ...current]); setNotice("Teacher added successfully."); }
    setShowForm(false);
  }
  function remove(id) { if (window.confirm("Delete this sample teacher record?")) { setTeachers(current => current.filter(t => t.id !== id)); setNotice("Teacher record deleted."); } }

  return <>
    <div className="page-heading"><div><span className="eyebrow eyebrow-dark">ADMIN WORKSPACE</span><h1>Teacher management</h1><p>Manage teaching staff and course information.</p></div><button className="btn btn-forest" onClick={add}><i className="bi bi-plus-lg me-2" />Add teacher</button></div>
    {notice && <div className="alert alert-success alert-dismissible">{notice}<button className="btn-close" onClick={() => setNotice("")} aria-label="Close" /></div>}
    {showForm && <section className="panel-card mb-4"><div className="panel-header"><div><h2>{editingId ? "Edit teacher" : "Add a teacher"}</h2><p>Enter the teacher's basic details.</p></div><button className="btn-close" onClick={() => setShowForm(false)} aria-label="Close form" /></div>
      <form onSubmit={submit}><div className="row g-3"><div className="col-md-6"><label className="form-label">Full name *</label><input className="form-control" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required /></div><div className="col-md-6"><label className="form-label">Email *</label><input type="email" className="form-control" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required /></div>{form.courses.map((course, index) => <div className="col-md-6" key={index}><label className="form-label">Course {index + 1}</label><select className="form-select" value={course} onChange={e => updateCourse(index, e.target.value)}>{courses.map(option => <option key={option} value={option} disabled={form.courses.some((selected, selectedIndex) => selectedIndex !== index && selected === option)}>{option}</option>)}</select></div>)}<div className="col-md-6"><label className="form-label">Status</label><select className="form-select" value={form.status} onChange={e => setForm({ ...form, status: e.target.value })}><option>Active</option><option>Inactive</option></select></div></div><div className="d-flex justify-content-end gap-2 mt-4"><button type="button" className="btn btn-light border" onClick={() => setShowForm(false)}>Cancel</button><button className="btn btn-forest" type="submit">{editingId ? "Save changes" : "Add teacher"}</button></div></form>
    </section>}
    <section className="panel-card"><div className="panel-header table-panel-header"><div><h2>All teachers <span className="count-badge">{filtered.length}</span></h2><p>Sample teaching staff records</p></div><div className="search-box"><i className="bi bi-search" /><input placeholder="Search teachers..." aria-label="Search teachers" value={search} onChange={e => setSearch(e.target.value)} /></div></div>
      <div className="table-responsive"><table className="table align-middle data-table"><thead><tr><th>Teacher</th><th>Courses</th><th>Status</th><th className="text-end">Actions</th></tr></thead><tbody>{filtered.map(t => <tr key={t.id}><td><div className="person-cell"><div className="table-avatar">{t.name.split(" ").map(n => n[0]).join("")}</div><div><strong>{t.name}</strong><small>{t.email}</small></div></div></td><td>{t.courses.join(", ")}</td><td><span className={`status-pill ${t.status.toLowerCase()}`}>{t.status}</span></td><td><div className="d-flex justify-content-end gap-2"><button className="icon-button" title="Edit teacher" onClick={() => edit(t)}><i className="bi bi-pencil" /></button><button className="icon-button danger" title="Delete teacher" onClick={() => remove(t.id)}><i className="bi bi-trash3" /></button></div></td></tr>)}{filtered.length === 0 && <tr><td colSpan="4"><div className="empty-state"><i className="bi bi-search" /><strong>No teachers found</strong><span>Try another search.</span></div></td></tr>}</tbody></table></div>
      <div className="table-footer"><span>Showing {filtered.length} of {teachers.length} teacher records</span><span className="muted">Demo data · resets on refresh</span></div>
    </section>
  </>;
}
