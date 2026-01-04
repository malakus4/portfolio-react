import { NavLink } from "react-router-dom";


function Nav() {

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold border-b-2 border-blue-600"
      : "text-gray-600 hover:text-blue-600";

  return (
    <nav className='flex justify-between'>
                  
            <NavLink to="/" end className={linkClass}>
                <span>malakus <span>&gt;</span></span>
              </NavLink>

          <ul className="flex gap-4"> 

              
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
  )
}

export default Nav