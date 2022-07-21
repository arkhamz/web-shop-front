import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigator = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    await axios.post("http://localhost:4000/users/login", {
      email,
      password,
    });

    //move user to home page
    navigator("/");
  }

  return (
    <section className="login">
      <form onSubmit={handleSubmit} className="login-form">
        <div className="login-title">
          <h2>Login</h2>
          <p>Please login using account detail below.</p>
        </div>
        <div className="login-input-container">
          <label htmlFor="login-email-text">Email Address</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="login-email-text"
            type="text"
          />
        </div>
        <div className="login-input-container">
          <label htmlFor="login-email-password">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="login-email-password"
            type="password"
          />
        </div>
        <div className="login-query">
          {/* make the forgot your password bit a link? */}
          <p>Forgot your password?</p>
        </div>

        <div className="login-button">
          <button>Register</button>
        </div>
        <div className="login-query">
          {/* make the "create account" section a link */}
          <p>Don't have an Account? Create account</p>
        </div>
      </form>
    </section>
  );
}

export default Login;
