import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Signup.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const navigator = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    //reset error in case there was an error on previous submission
    setError("");
    //store an error message in state if the passwords don't match
    if (password !== password2) {
      setError("Both passwords must match.");
      //clear password fields afterwards?
    } else if (password === password2) {
      await axios.post("http://localhost:4000/users/signup", {
        name: username,
        email,
        password,
      });
      //move user to login page
      navigator("/login");
    }
  }

  return (
    <section className="signup">
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="signup-title">
          <h2>Register</h2>
          <p>Welcome! Create an account</p>
        </div>
        <div className="signup-input-container">
          <label htmlFor="signup-email-name">Username</label>
          <input
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            id="signup-email-text"
            type="text"
          />
        </div>
        <div className="signup-input-container">
          <label htmlFor="signup-email-text">Email Address</label>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="signup-email-text"
            type="text"
          />
        </div>
        <div className="signup-input-container">
          <label htmlFor="signup-email-password">Password</label>
          <input
            minlength="6"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="signup-email-password"
            type="password"
          />
        </div>
        {error && <p>{error}</p>}
        <div className="signup-input-container">
          <label htmlFor="signup-email-password-rpt">Repeat Password</label>
          <input
            minlength="6"
            required
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
