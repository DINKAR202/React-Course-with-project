import { NavLink, Outlet } from "react-router-dom";
const AdminLayout = () => {
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <ul>
              <li>
                <NavLink to="/admin/users">users </NavLink>
              </li>
              <li>
                <NavLink to="/admin/contacts">contacts </NavLink>
              </li>
              <li>
                services
                <NavLink to="/admin/services">services </NavLink>
              </li>
              <li>
                <NavLink to="/admin">Home </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default AdminLayout;
