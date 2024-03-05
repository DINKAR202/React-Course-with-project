import { NavLink, Outlet, Navigate } from "react-router-dom";
// import { FaUser, FaHome, FaRegListAlt } from "react-icons/fa";
// import { FaMessage } from "react-icons/fa6";
import { useAuth } from "./../../store/auth";
import "./Admin-Layout.css";

const AdminLayout = () => {
  const { user, isLoading } = useAuth();
  console.log("admin layout", user);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!user.isAdmin) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <header>
        <div className="container" style={{ marginTop: "114px" }}>
          {/* <nav>
            <ul>
              <li>
                <NavLink to="/admin/users" className="text-dark">
                  <FaUser /> Users{" "}
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/contacts" className="text-dark">
                  {" "}
                  <FaMessage /> Contacts{" "}
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/services" className="text-dark">
                  {" "}
                  <FaRegListAlt /> Services{" "}
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="text-dark">
                  <FaHome /> Home{" "}
                </NavLink>
              </li>
            </ul>
          </nav> */}

          <div>
            <section id="sidebar">
              <ul className="side-menu top">
                <li>
                  <NavLink to="/admin/users" className="text-dark">
                    <i className="bx bxs-dashboard"></i> Users{" "}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/admin/contacts" className="text-dark">
                    {" "}
                    <i className="bx bxs-shopping-bag-alt"></i> Contacts{" "}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/admin/services" className="text-dark">
                    {" "}
                    <i className="bx bxs-doughnut-chart"></i> Services{" "}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className="text-dark">
                    <i className="bx bxs-doughnut-chart"></i> Home{" "}
                  </NavLink>
                </li>
              </ul>
              <ul className="side-menu">
                <li>
                  <a href="#" className="logout">
                    <i className="bx bxs-log-out-circle" />
                    <span className="text">Logout</span>
                  </a>
                </li>
              </ul>
            </section>
            {/* SIDEBAR */}
            {/* CONTENT */}
            <section id="content">
              {/* NAVBAR */}
              <nav>
                <i className="bx bx-menu" />
                <a href="#" className="nav-link">
                  Categories
                </a>
                <form action="#">
                  <div className="form-input">
                    <input type="search" placeholder="Search..." />
                    <button type="submit" className="search-btn">
                      <i className="bx bx-search" />
                    </button>
                  </div>
                </form>
                <a href="#" className="notification">
                  <i className="bx bxs-bell" />
                  <span className="num">+</span>
                </a>
              </nav>
              {/* NAVBAR */}
              {/* MAIN */}
              <main>
                <div className="head-title">
                  <div className="left">
                    <h1>User Data</h1>
                  </div>
                </div>
                <div className="table-data">
                  <div className="order">
                    <div className="head">
                      <h3>Recent Orders</h3>
                      <i className="bx bx-search" />
                      <i className="bx bx-filter" />
                    </div>
                    <table>
                      <thead>
                        <tr>
                          <th>User</th>
                          <th>Email</th>
                          <th>Phone</th>
                          <th>Update</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <img src="img/people.png" />
                            <p>John Doe</p>
                          </td>
                          <td>demo@gmail.com</td>
                          <td>7079775849</td>
                          <td>
                            <span className="status pending">Edit</span>
                          </td>
                          <td>
                            <span className="status completed">Delete</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </main>
            </section>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default AdminLayout;
