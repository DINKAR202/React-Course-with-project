import { NavLink, Outlet, Navigate } from "react-router-dom";
import { FaUser, FaHome, FaRegListAlt } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { useAuth } from "./../../store/auth";

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
        <div className="container" style={{marginTop:"114px"}}>
          <nav>
            <ul>
              <li>
                <NavLink to="/admin/users">
                  <FaUser /> Users{" "}
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/contacts">
                  {" "}
                  <FaMessage /> Contacts{" "}
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/services">
                  {" "}
                  <FaRegListAlt /> Services{" "}
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <FaHome /> Home{" "}
                </NavLink>
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
