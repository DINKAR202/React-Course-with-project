import { useState } from "react";

const AdminUpdate = () => {
    const [data, setData] = useState({
        
    });
  return (
    <>
        <section>
        <main className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <img
                  src="../../public/images/support.png"
                  width="400"
                  height="500"
                  alt="Login image here"
                />
              </div>
              <div className="col-lg-6">
                <h1 className="main-heading mb-3">Contact here</h1>
                <br />
                <form onSubmit={handleSubmit}>
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
                      value={data.email}
                      onChange={handleInput}
                    />
                  </div>

                  <button type="submit" className="btn btn-submit btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  )
}

export default AdminUpdate;