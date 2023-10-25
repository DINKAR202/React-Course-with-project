import React, { useState } from "react";
import "./Login_page.css";

const Login_page = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [allEntry, setAllEntry] = useState([]);

    const submitForm = (e) => {
      e.preventDefault();
      const newEntry = {email: email, password: password};

      setAllEntry([...allEntry, newEntry]); 
      console.log(allEntry)
    }

  return (
    <>
      <section className="Basic_form">
        <form action="" className="Basic_form_under" onSubmit={submitForm}>
          <div>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        {
          allEntry.map((curElem)=>{
            return(
              <div className="showDataStyles">
                  <p className="btn btn-secondary">{curElem.email}</p>
                  <p className="btn btn-warning">{curElem.password}</p>
              </div>
            )
          })
        }
      </section>
    </>
  );
};

export default Login_page;
