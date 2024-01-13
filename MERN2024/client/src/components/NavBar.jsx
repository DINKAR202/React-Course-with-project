const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container">
          <a className="navbar-brand text-white" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <button className="nav-link text-white" href="#">
                  Register
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link text-white" href="#">
                  Login
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
