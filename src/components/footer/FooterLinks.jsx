import { Link } from "react-router-dom";

function FooterLinks() {
  return (
    <div className="space-y-3">
      <h3 className="footer-title">  </h3>

      <ul className="mt-3 space-y-2 footer-text">

        <li><Link to="#" className="hover:text-gray-900">GitHub</Link></li>
       
        <li><Link to="#" className="hover:text-gray-900">LinkedIn</Link></li>
        
        <li><Link to="#" className="hover:text-gray-900">Twitter</Link></li>

      </ul>
    </div>
  );
}

export default FooterLinks;
