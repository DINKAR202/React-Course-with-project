import { useState } from "react";
import "../components/CSS-Design/Design.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const URL = `http://localhost:5000/api/auth/login`;

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();

  // Handling the input value
  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  // Handling the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const res_data = await response.json();
      if (response.ok) {
        storeTokenInLS(res_data.token);
        setUser({ email: "", password: "" });
        toast.success("Logged in successfully!");
        // alert("Logged in successfully!");
        navigate("/");
      } else {
        toast.error(
          res_data.extraDetails ? res_data.extraDetails : res_data.message
        );
      }
      console.log(response);
    } catch (error) {
      console.log("Login", error);
    }
  };

  // Handling the form submission
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(user);
  // };

  return (
    <>
      <section>
        <main className="contact1 contact-details">
          <div className="container-contact1 container">
            <div className="row">
              <div className="col-lg-6">
                <img
                  src="/images/login.png"
                  width="400"
                  height="500"
                  alt="Login image here"
                />
              </div>
              <div className="col-lg-6">
                <h1 className="main-heading mb-3">Login here</h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div className="wrap-input1 validate-input">
                    <input
                      className="input1"
                      type="email"
                      name="email"
                      placeholder="Email"
                      id="email"
                      required
                      autoComplete="off"
                      value={user.email}
                      onChange={handleInput}
                    />
                    <span className="shadow-input1"></span>
                  </div>

                  <div className="wrap-input1 validate-input">
                    <input
                      className="input1"
                      type="password"
                      name="password"
                      placeholder="Password"
                      id="password"
                      required
                      autoComplete="off"
                      value={user.password}
                      onChange={handleInput}
                    />
                    <span className="shadow-input1"></span>
                  </div>
                  <button
                    type="submit"
                    className="container-contact1-form-btn contact1-form-btn"
                  >
                    Login
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

export default Login;
