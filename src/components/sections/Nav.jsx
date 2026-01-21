import { NavLink } from "react-router-dom";

function Nav() {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold border-b-2 border-blue-600 transition-colors duration-200"
      : "text-gray-600 hover:text-blue-600 transition-colors duration-200";

  return (
    <nav className="sticky top-0 bg-base/98 backdrop-blur z-10 border-b border-gray-200/60">
      <div className="container-page flex justify-between items-center py-4 sm:py-5 lg:py-6 text-sm sm:text-base lg:text-lg">

        {/* Logo */}
        <NavLink to="/" aria-label="Go to homepage">
          <span className="font-bold tracking-tight inline-flex items-baseline gap-1">
            malakus <span className="leading-none self-baseline">&gt;</span>
          </span>
        </NavLink>

        {/* Navigation Links */}
        <ul className="flex gap-4 sm:gap-5 lg:gap-8">
          <li>
            <NavLink
              to="/work"
              className={({ isActive }) =>
                `${linkClass({ isActive })} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded`
              }
            >
              Work
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${linkClass({ isActive })} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded`
              }
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
