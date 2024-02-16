// import skills from "../components/Skills/Skills";

import "./Navbar.css";

const NavBar = () => {
  // const menu = () => {
  //   const menuToggle = document.querySelector(".menu-toggle");
  //   const nav = document.querySelector("nav");

  //   // Toggle navigation display when the button is clicked
  //   menuToggle.addEventListener("click", function () {
  //     nav.classList.toggle("active");
  //   });
  // };

  return (
    <>
      <header>
        <div className="container">
          <div className="logo-brand">
            <a href="/">PORTFOLIO.</a>
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
                <a href="/skills">Skills</a>
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
          <button className="menu-toggle">
            Menu
          </button>
        </div>
      </header>
    </>
  );
};

export default NavBar;
