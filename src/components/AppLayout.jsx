import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";

export default function AppLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const isTeacher = location.pathname.startsWith("/teacher");
  const base = isTeacher ? "/teacher" : "/admin";
  const role = isTeacher ? "Teacher workspace" : "Admin workspace";
  const links = isTeacher
    ? [{ to: "/teacher", icon: "bi-grid-1x2", label: "Overview" }, { to: "/teacher/students", icon: "bi-people", label: "Students" }, { to: "/teacher/settings", icon: "bi-gear", label: "Settings" }, { to: "/teacher/help", icon: "bi-question-circle", label: "Help & support" }]
    : [{ to: "/admin", icon: "bi-grid-1x2", label: "Overview" }, { to: "/admin/students", icon: "bi-people", label: "Students" }, { to: "/admin/teachers", icon: "bi-person-workspace", label: "Teachers" }, { to: "/admin/settings", icon: "bi-gear", label: "Settings" }, { to: "/admin/help", icon: "bi-question-circle", label: "Help & support" }];

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <NavLink to="/" className="brand sidebar-brand"><span className="brand-mark">✿</span> EduManage</NavLink>
        <div className="workspace-label">{role}</div>
        <nav className="side-nav">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === base} className={({ isActive }) => `side-link ${isActive ? "active" : ""}`}>
              <i className={`bi ${link.icon}`} /><span>{link.label}</span>
            </NavLink>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <div className="support-mini"><i className="bi bi-headset" /><strong>Need a hand?</strong><span>Visit the help section for guidance.</span><NavLink to={`${base}/help`}>Get help <i className="bi bi-arrow-up-right" /></NavLink></div>
          <button className="side-link logout-button" onClick={() => navigate("/")}><i className="bi bi-box-arrow-left" /><span>Back to home</span></button>
        </div>
      </aside>
      <main className="main-area">
        <header className="topbar">
          <div><span className="topbar-kicker">STUDENT MANAGEMENT SYSTEM</span><div className="topbar-title">{isTeacher ? "Teacher Portal" : "Administration"}</div></div>
          <div className="profile-chip"><div className="avatar">{isTeacher ? "T" : "A"}</div><div><strong>{isTeacher ? "Demo Teacher" : "Demo Admin"}</strong><small>{isTeacher ? "Teacher" : "Administrator"}</small></div><i className="bi bi-chevron-down ms-2" /></div>
        </header>
        <div className="page-content"><Outlet /></div>
      </main>
    </div>
  );
}
