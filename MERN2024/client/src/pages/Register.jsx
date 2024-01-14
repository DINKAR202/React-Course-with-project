const Register = () => {
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
                    />
                  </div>

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
