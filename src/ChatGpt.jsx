import { NavLink } from "react-router-dom";

const Nav = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold border-b-2 border-blue-600"
      : "text-gray-600 hover:text-blue-600";

  return (
    <nav className="flex gap-6 px-8 py-4">
      <NavLink to="/" end className={linkClass}>
        Home
      </NavLink>

      <NavLink to="/experiments" className={linkClass}>
        Experiments
      </NavLink>

      <NavLink to="/home" className={linkClass}>
        HomeTest
      </NavLink>
    </nav>
  );
};

export default Nav;
