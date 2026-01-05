import { NavLink } from "react-router-dom";

function Nav() {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold border-b-2 border-blue-600"
      : "text-gray-600 hover:text-blue-600";

  return (
    <nav className="
      flex justify-between items-center
      py-4 sm:py-5 lg:py-6
      border-b border-gray-200
      text-sm sm:text-base lg:text-lg
    ">
      {/* Logo / Brand */}
      <NavLink to="/" end className={linkClass}>
        <span className="font-bold tracking-tight">
          malakus <span>&gt;</span>
        </span>
      </NavLink>

      {/* Navigation Links */}
      <ul className="flex gap-3 sm:gap-5 lg:gap-8">
        <NavLink to="/thoughts" end className={linkClass}>
          Thoughts
        </NavLink>

        <NavLink to="/experiments" className={linkClass}>
          Experiments
        </NavLink>

        <NavLink to="/work" className={linkClass}>
          Work
        </NavLink>
      </ul>
    </nav>
  );
}

export default Nav;
