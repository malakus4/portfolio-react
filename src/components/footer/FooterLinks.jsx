import { Link } from "react-router-dom";

function FooterLinks() {
  return (
    <div className="space-y-3">
      <h3 className="footer-title">Links</h3>
      <ul className="mt-3 space-y-2 footer-text">
        <li><Link to="/" className="hover:text-gray-900">Home</Link></li>
        <li><Link to="/work" className="hover:text-gray-900">Work</Link></li>
        <li><Link to="/thoughts" className="hover:text-gray-900">Thoughts</Link></li>
      </ul>
    </div>
  );
}

export default FooterLinks;
