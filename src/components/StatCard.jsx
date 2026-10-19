export default function StatCard({ icon, label, value, note, tone = "sage" }) {
  return (
    <div className="stat-card">
      <div className={`stat-icon ${tone}`}><i className={`bi ${icon}`} /></div>
      <div className="stat-label">{label}</div>
      <div className="stat-value">{value}</div>
      <div className="stat-note">{note}</div>
    </div>
  );
}
