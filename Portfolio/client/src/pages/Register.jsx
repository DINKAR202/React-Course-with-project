import { useState } from "react";
import "../components/CSS-Design/Design.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from 'react-toastify';



const URL = `http://localhost:5000/api/auth/register`;

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
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

      // console.log(response);
      const res_data = await response.json();
      console.log("res from server", res_data.message);
      if (response.ok) {

        // Store the token in localhost
        storeTokenInLS(res_data.token);
        setUser({ username: "", email: "", phone: "", password: "" });
        toast.success("Registration Successful");
        navigate("/");
      }else{
        toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
      }
    } catch (error) {
      console.log("register", error);
    }
    // update
  };

  return (
    <>
      <section>
        <main>
          <div className="section-registration container">
            <div className="row">
              <div className="registration-image">
                <img
                  src="/images/register.png"
                  alt="Left side of image error! "
                  width="400"
                  height="500"
                />
              </div>

              {/* let tackle registration form */}

              <div className="registration-form">
                <h1 className="main-heading mb-3">Registration Form</h1>
                <br />

                <form className="Form-box" onSubmit={handleSubmit}>
                  <div className="container-box">
                    <input
                      className="input"
                      type="text"
                      name="username"
                      // placeholder="username"
                      id="username"
                      required
                      autoComplete="off"
                      value={user.username}
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
                      value={user.email}
                      onChange={handleInput}
                    />
                    <label className="label" htmlFor="email">
                      Email
                    </label>
                  </div>

                  <div className="container-box">
                    <input
                      className="input"
                      type="number"
                      name="phone"
                      // placeholder="phone"
                      id="phone"
                      required
                      autoComplete="off"
                      value={user.phone}
                      onChange={handleInput}
                    />
                    <label className="label" htmlFor="phone">
                      Phone
                    </label>
                  </div>

                  <div className="container-box">
                    <input
                      className="input"
                      type="password"
                      name="password"
                      // placeholder="password"
                      id="password"
                      required
                      autoComplete="off"
                      value={user.password}
                      onChange={handleInput}
                    />
                    <label className="label" htmlFor="password">
                      Password
                    </label>
                  </div>
                  <button type="submit" className="btn btn-submit btn-primary">
                    Register now
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

export default Register;
