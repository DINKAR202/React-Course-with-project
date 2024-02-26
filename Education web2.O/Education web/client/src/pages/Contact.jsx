import { useState } from "react";
import "../components/CSS-Design/Design.css";
import { useAuth } from "../store/auth";
import { toast } from 'react-toastify';

const defaultContactFormData = {
  username: "",
  email: "",
  message: "",
};

const Contact = () => {
  const [contact, setContact] = useState(defaultContactFormData);

  const [userData, setUserData] = useState(true);
  const { user } = useAuth();

  if (userData && user) {
    setContact({
      username: user.username,
      email: user.email,
      message: "",
    });

    setUserData(false);
  }

  // Handling the input value
  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  // Handling the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch("http://localhost:5000/api/form/contact", {
          method: "POST",
          headers: {
            'Content-Type': "application/json"
          },
          body:JSON.stringify(contact),
        });

        if(response.ok){
          setContact(defaultContactFormData);
          const data = await response.json();
          console.log(data);
          toast.success("Message sent successfully");
          // alert("Message sent successfully");
        }
    } catch (error) {
      console.log(error)
    }
  };

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
                      value={contact.username}
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
                      value={contact.email}
                      onChange={handleInput}
                    />
                    <label className="label" htmlFor="email">
                      Email
                    </label>
                  </div>

                  <div className="container-box">
                    <textarea
                      className="input"
                      name="message"
                      id="message"
                      autoComplete="off"
                      value={contact.message}
                      onChange={handleInput}
                      required
                      cols="30"
                      rows="6"
                    ></textarea>
                    <label className="label" htmlFor="message">
                      message
                    </label>
                  </div>

                  <button type="submit" className="btn btn-submit btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>

        <section className="mb-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2613173278896!2d73.91411937501422!3d18.562253982539413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20Pune!5e0!3m2!1sen!2sin!4v1697604225432!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </section>
    </>
  );
};

export default Contact;
