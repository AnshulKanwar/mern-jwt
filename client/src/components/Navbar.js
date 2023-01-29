import { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <nav className="px-10 py-8">
      <div className="flex items-center justify-around">
        <h1 className="text-2xl font-bold">
          <NavLink to="/">Authentication using jwt</NavLink>
        </h1>
        <ul className="flex gap-10 text-slate-500">
          <li className="hover:text-black">
            {user && (
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "text-black" : null)}
              >
                Home
              </NavLink>
            )}
          </li>
          {!user ? (
            <>
              <li className="hover:text-black">
                <NavLink
                  to="login"
                  className={({ isActive }) => (isActive ? "text-black" : null)}
                >
                  Login
                </NavLink>
              </li>
              <li className="hover:text-black">
                <NavLink
                  to="register"
                  className={({ isActive }) => (isActive ? "text-black" : null)}
                >
                  Register
                </NavLink>
              </li>
            </>
          ) : (
            <li>
              <NavLink to="logout">Logout</NavLink>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
