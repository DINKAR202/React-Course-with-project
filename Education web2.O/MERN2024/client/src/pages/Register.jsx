import { useState } from "react";
import "../components/CSS-Design/Design.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import Atom from "../json/Registration.json";
import Lottie from "lottie-react";

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
      } else {
        toast.error(
          res_data.extraDetails ? res_data.extraDetails : res_data.message
        );
      }
    } catch (error) {
      console.log("register", error);
    }
  };

  return (
    <>
      <section>
        <main className="contact1 contact-details">
          <div className="container-contact1 container">
            <div className="row">
              <div className="col-lg-6">
                <Lottie animationData={Atom} />
              </div>

              {/* let tackle registration form */}

              <div className="col-lg-6">
                <h1 className="main-heading mb-3">Registration Form</h1>
                <br />

                <form className="Form-box" onSubmit={handleSubmit}>
                  <div className="wrap-input1 validate-input">
                    <input
                      className="input1"
                      type="text"
                      name="username"
                      placeholder="Username"
                      id="username"
                      required
                      autoComplete="off"
                      value={user.username}
                      onChange={handleInput}
                    />
                    <span className="shadow-input1"></span>
                  </div>

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
                      type="number"
                      name="phone"
                      placeholder="Phone"
                      id="phone"
                      required
                      autoComplete="off"
                      value={user.phone}
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
