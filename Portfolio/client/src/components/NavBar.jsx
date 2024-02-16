// import { NavLink }   from "react-router-dom";
import { useEffect } from 'react';
import "./Navbar.css";
// import "./Navbar.js";
// import { useAuth } from "../store/auth";

const NavBar = () => {
  // const { isLoggedIn } = useAuth();
  useEffect(() => {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");

    const toggleNav = () => {
      nav.classList.toggle("active");
    };

    if (menuToggle && nav) {
      menuToggle.addEventListener("click", toggleNav);
    }

    return () => {
      if (menuToggle && nav) {
        menuToggle.removeEventListener("click", toggleNav);
      }
    };
  }, []); // Empty dependency array ensures effect runs only once after initial render

  return (
    <>
      <header>
        <div className="container">
          <div className="logo-brand">
            <a href="/">Portfolio.</a>
          </div>

          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/service">Services</a>
              </li>
              <li>
                <a href="/service">Skills</a>
              </li>
              <li>
                <a href="/service">Projects</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav>

          {/* <!-- Button to toggle navigation display --> */}
          <button className="menu-toggle">Menu</button>
        </div>
      </header>
    </>
  );
};

export default NavBar;
