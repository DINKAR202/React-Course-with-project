import { useState } from "react";
import "../components/CSS-Design/Design.css";
import { useNavigate } from "react-router-dom";

const URL = `http://localhost:5000/api/auth/login`;


const Login = () => {
  const [user, setUser] = useState({
    email: "",
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
          const res_data = await response.json();          
          // storetokenInLS(res_data.token);
          localStorage.setItem("token", res_data);
          setUser({ email: "", password: "" });
          alert("Logged in successfully!");
          navigate("/register");
        } else {
          alert("Invalid credentials!")
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
        <main className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <img
                  src="../../public/images/login.png"
                  width="400"
                  height="500"
                  alt="Login image here"
                />
              </div>
              <div className="col-lg-6">
                <h1 className="main-heading mb-3">Login here</h1>
                <br />
                <form onSubmit={handleSubmit}>
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
                    <label className="label" htmlFor="email">Email</label>
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
                    <label className="label" htmlFor="password">password</label>
                  </div>
                  <button type="submit" className="btn btn-submit btn-primary">
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
