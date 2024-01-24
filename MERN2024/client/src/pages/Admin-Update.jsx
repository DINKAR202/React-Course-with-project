import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../store/auth";

const AdminUpdate = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
  });

  const params = useParams();
  //   console.log("single user data", params);
  const authorizationToken = useAuth();
  //   console.log("Authorization Token:", authorizationToken);

  //   Get single user data
  const getSingleUserData = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/users/${params.id}`,
        {
          method: "GET",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      console.log("Response data", response);
      const data = await response.json();
      console.log(`users single data: ${data}`);
      setData(data);

      //   if (response.ok) {
      //     getAllUsersData();
      //   }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleUserData();
  }, []);

  const handleInput = () => {};
  return (
    <>
      <section>
        <main className="container-fluid">
          <div className="container">
            <div className="row">
              {/* <div className="col-lg-6">
                <img
                  src="/images/support.png"
                  width="400"
                  height="500"
                  alt="Login image here"
                />
              </div> */}
              <div className="col-lg-6">
                <h1 className="main-heading mb-3">Update User Data</h1>
                <br />
                <form>
                  <div className="container-box">
                    <input
                      className="input"
                      type="text"
                      name="username"
                      // placeholder="username"
                      id="username"
                      required
                      autoComplete="off"
                      value={data.username}
                      onChange={handleInput}
                    />
                    <label className="label" htmlFor="username">
                      Username
                    </label>
                  </div>

                  <div className="container-box">
                    <input
                      className="input"
                      type="email"
                      name="email"
                      // placeholder="email"
                      id="email"
                      required
                      autoComplete="off"
                      value={data.email}
                      onChange={handleInput}
                    />
                    <label className="label" htmlFor="email">
                      Email
                    </label>
                  </div>

                  <div className="container-box">
                    <input
                      className="input"
                      type="phone"
                      name="phone"
                      // placeholder="email"
                      id="phone"
                      required
                      autoComplete="off"
                      value={data.phone}
                      onChange={handleInput}
                    />
                    <label className="label" htmlFor="phone">
                      Mobile
                    </label>
                  </div>

                  <button type="submit" className="btn btn-submit btn-primary">
                    Update
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default AdminUpdate;
