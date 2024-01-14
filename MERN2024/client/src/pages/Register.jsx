import { useState } from "react";

const Register = () => {

  const [user, setUser] = useState({
      username: "dinkar",
      email: "",
      phone: "",
      password: "",
  });

  // Handling the input value
    const handleInput = (e) =>{
      console.log(e);
      let name = e.target.name;
      let value = e.target.value;
    
      setUser({
        ...user,
      });
    };

  return (
    <>
      <section>
        <main>
          <div className="section-registration container">
            <div className="row">
              <div className="registration-image col-lg-6">
                <img
                  src="../../public/images/register.png"
                  alt="Left side of image error! "
                  width="400"
                  height="500"
                />
              </div>

              {/* let tackle registration form */}

              <div className="registration-form col-lg-6">
                <h1 className="main-heading mb-3">Registration Form</h1>
                <br />

                <form action="">
                  <div>
                    <label htmlFor="username">username</label>
                    <input
                      type="text"
                      name="username"
                      placeholder="username"
                      id="username"
                      required
                      autoComplete="off"
                      value={user.username}
                      onChange={handleInput}
                    />
                  </div>

                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="email"
                      id="email"
                      required
                      autoComplete="off"
                      // value={user.email}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone">phone</label>
                    <input
                      type="number"
                      name="phone"
                      placeholder="phone"
                      id="phone"
                      required
                      autoComplete="off"
                      // value={user.phone}
                    />
                  </div>
                  <div>
                    <label htmlFor="password">password</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="password"
                      id="password"
                      required
                      autoComplete="off"
                      // value={user.password}
                    />
                  </div>
                  <button type="submit" className="btn btn-submit btn-primary" >Register bow</button>
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
