// import { Link, Outlet } from "react-router-dom";
import { NavLink, Outlet } from "react-router-dom";
import "../styles/index.css";

function RootLayout() {
  return (
    <>
      <NavLink
        className={({ isActive, isPending }) =>
          isActive ? "active" : isPending ? "pending" : ""
        }
        to="/"
      >
        Home
      </NavLink>
      | <NavLink to="/blog">Blog</NavLink> |<NavLink to="/about">About</NavLink>
      <p></p>
      <Outlet />
    </>
  );
}

export default RootLayout;
