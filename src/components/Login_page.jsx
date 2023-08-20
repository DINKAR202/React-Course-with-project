import React, { useState } from "react";
import "./Login_page.css";

const Login_page = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  return (
    <>
      <section className="Basic_form">
        <form action="" className="Basic_form_under">
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
      </section>
    </>
  );
};

export default Login_page;
