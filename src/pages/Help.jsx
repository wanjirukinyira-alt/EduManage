import { useState } from "react";

const adminItems = [
  ["How do I add a student?", "Open Students from the sidebar, choose Add student, enter the required details, select a semester and one course, then save the record."],
  ["How do I manage teachers?", "Open Teachers in the admin sidebar. You can add, search, edit, or delete sample teacher records."],
  ["Will my changes be saved permanently?", "No. This assignment demo stores records in React state, so refreshing the page restores the original sample data."]
];
const teacherItems = [
  ["How do I find a student?", "Open Students and use the search box to find a record by name, email, semester, or course. You can also filter by status."],
  ["Can I edit a student record?", "Yes. Open Students and select the pencil icon next to the record. Update the student's details, semester, or course and save changes."],
  ["Where do I change my profile?", "Open Settings in the sidebar to edit your display name, email, and demo preferences."]
];

export default function Help({ role }) {
  const [open, setOpen] = useState(0);
  const items = role === "Admin" ? adminItems : teacherItems;
  return <>
    <div className="page-heading"><div><span className="eyebrow eyebrow-dark">{role.toUpperCase()} WORKSPACE</span><h1>Help & support</h1><p>Quick answers to help you use your workspace.</p></div></div>
    <div className="row g-4"><div className="col-lg-8"><section className="panel-card"><div className="panel-header"><div><h2>Frequently asked questions</h2><p>Choose a question to see the answer.</p></div></div><div className="faq-list">{items.map(([question, answer], index) => <div className="faq-item" key={question}><button className="faq-question" onClick={() => setOpen(open === index ? -1 : index)} aria-expanded={open === index}><span>{question}</span><i className={`bi ${open === index ? "bi-dash-lg" : "bi-plus-lg"}`} /></button>{open === index && <p className="faq-answer">{answer}</p>}</div>)}</div></section></div>
      <div className="col-lg-4"><section className="help-card"><div className="help-card-icon"><i className="bi bi-chat-heart" /></div><h3>Still need a hand?</h3><p>This project is a front-end assignment demo. Check the README for setup and run instructions.</p><a href="https://react.dev/learn" target="_blank" rel="noreferrer">Explore React learning <i className="bi bi-arrow-up-right ms-1" /></a></section><section className="panel-card mt-4"><h3 className="small-panel-title">Helpful reminder</h3><p className="muted mb-0">Use fictional sample information only. This app does not implement production authentication or data storage.</p></section></div>
    </div>
  </>;
}
