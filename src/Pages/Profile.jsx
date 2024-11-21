import { useState } from "react";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="container-page">
      <h1 className="title">{isLogin ? "Login" : "Sign Up"}</h1>

      {/* Form Login/Sign-Up */}
      <div className="auth-card">
        {isLogin ? (
          <form className="auth-form">
            <label>
              Email:
              <input type="email" name="email" required />
            </label>
            <label>
              Password:
              <input type="password" name="password" required />
            </label>
            <button type="submit" className="auth-button">Login</button>
          </form>
        ) : (
          <form className="auth-form">
            <label>
              Name:
              <input type="text" name="name" required />
            </label>
            <label>
              Email:
              <input type="email" name="email" required />
            </label>
            <label>
              Password:
              <input type="password" name="password" required />
            </label>
            <button type="submit" className="auth-button">Sign Up</button>
          </form>
        )}

        {/* Button to Toggle Between Login and Sign-Up */}
        <p className="toggle-text">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button onClick={toggleAuthMode} className="toggle-button">
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}
