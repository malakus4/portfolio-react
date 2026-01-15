import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-8">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-lg text-gray-600 mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>

      <NavLink
        to="/"
        className="text-blue-600 hover:underline"
      >
        Go back home
      </NavLink>
    </div>
  );
};

export default NotFound;
