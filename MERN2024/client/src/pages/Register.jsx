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
                    <input type="text" name="username" value={} placeholder="username"/>
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
