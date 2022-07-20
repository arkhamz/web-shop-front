import { useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import "./Signup.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [signedUp, setSignedUp] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    await axios.post("http://localhost:4000/users/signup", {
      email,
      password,
    });
  }

  return (
    <section className="signup">
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="signup-title">
          <h2>Register</h2>
          <p>Welcome! Create an account</p>
        </div>
        <div className="signup-input-container">
          <label htmlFor="signup-email-text">Email Address</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="signup-email-text"
            type="text"
          />
        </div>
        <div className="signup-input-container">
          <label htmlFor="signup-email-password">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="signup-email-password"
            type="password"
          />
        </div>
        <div className="signup-input-container">
          <label htmlFor="signup-email-password-rpt">Repeat Password</label>
          <input
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
            id="signup-email-password-rpt"
            type="password"
          />
        </div>
        <div className="signup-button">
          <button>Register</button>
        </div>
        <div className="signup-query">
          <p>Already have an account? Login</p>
        </div>
      </form>
    </section>
  );
}

export default Signup;