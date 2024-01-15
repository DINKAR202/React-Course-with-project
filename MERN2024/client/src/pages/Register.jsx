import { useState } from "react";
import "../components/CSS-Design/Design.css";
import { useNavigate } from "react-router-dom";
const URL = `http://localhost:5000/api/auth/register`;

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();

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

      if (response.ok) {
        setUser({ username: "", email: "", phone: "", password: "" });
        navigate("/login");
      }
      console.log(response);
    } catch (error) {
      console.log("register", error);
    }
  };

  return (
    <>
      <section>
        <main>
          <div className="section-registration container">
            <div className="row">
              <div className="registration-image">
                <img
                  src="../../public/images/register.png"
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
