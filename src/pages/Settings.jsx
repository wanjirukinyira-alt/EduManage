import { useState } from "react";

export default function Settings({ role }) {
  const [name, setName] = useState(role === "Admin" ? "Demo Admin" : "Demo Teacher");
  const [email, setEmail] = useState(role === "Admin" ? "admin@edumanage.demo" : "teacher@edumanage.demo");
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [compact, setCompact] = useState(false);
  const [saved, setSaved] = useState(false);
  return <>
    <div className="page-heading"><div><span className="eyebrow eyebrow-dark">{role.toUpperCase()} WORKSPACE</span><h1>Settings</h1><p>Manage your demo profile and workspace preferences.</p></div></div>
    {saved && <div className="alert alert-success">Your demo settings have been saved in this page state.</div>}
    <div className="row g-4"><div className="col-lg-7"><section className="panel-card"><div className="panel-header"><div><h2>Profile information</h2><p>Update the details shown in your workspace.</p></div></div><form onSubmit={e => { e.preventDefault(); setSaved(true); }}><label className="form-label">Display name</label><input className="form-control mb-3" value={name} onChange={e => setName(e.target.value)} /><label className="form-label">Email address</label><input className="form-control mb-3" type="email" value={email} onChange={e => setEmail(e.target.value)} /><label className="form-label">Role</label><input className="form-control" value={role} disabled /><div className="d-flex justify-content-end mt-4"><button className="btn btn-forest" type="submit">Save changes</button></div></form></section></div>
      <div className="col-lg-5"><section className="panel-card"><div className="panel-header"><div><h2>Preferences</h2><p>Choose how your demo workspace behaves.</p></div></div><label className="setting-row"><span><strong>Email notifications</strong><small>Receive important school updates.</small></span><input type="checkbox" className="form-check-input" checked={emailAlerts} onChange={e => setEmailAlerts(e.target.checked)} /></label><label className="setting-row"><span><strong>Compact tables</strong><small>Prefer a tighter table layout.</small></span><input type="checkbox" className="form-check-input" checked={compact} onChange={e => setCompact(e.target.checked)} /></label><div className="notice mt-3"><i className="bi bi-info-circle me-2" />Preferences are for demonstration and are not saved to a database.</div></section></div>
    </div>
  </>;
}
