import { Link } from "react-router-dom";
export default function NotFound() {
  return <div className="not-found"><div className="not-found-icon"><i className="bi bi-compass" /></div><h1>Page not found</h1><p>The page you’re looking for may have moved.</p><Link className="btn btn-forest" to="/">Return home</Link></div>;
}
