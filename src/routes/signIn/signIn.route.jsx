import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/user.Context";
import trendSpotterLogo from "/trendSpotterLogo.svg";
import { FaGoogle } from "react-icons/fa";
import "./signIn.style.scss";
const SignIn = () => {
  // import database from context
  const { user, googleHandler } = useUserContext();

  // form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // navigate to home
  let navigate = useNavigate();
  const logoutToHome = () => {
    navigate("/");
  };

  const googlePopupHandler = () => {
    googleHandler();
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };
    console.log(userData);

    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    if (user) {
      logoutToHome();
    }
  }, [user]);

  return (
    <div className="signIn-container">
      {/* image section */}
      <div className="image-container"></div>
      {/* form section */}
      <div className="form-container">
        <span className="logo-container">
          <img src={trendSpotterLogo} alt="logo" className="logo" />{" "}
          <h1>Welcome</h1>
        </span>
        <p className="message">
          Do not have an account? <span className="unique">Create today!</span>
        </p>

        <form className="form" onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your valid password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-submit">
            <button type="submit">Sign In</button>
            <button type="button" onClick={googlePopupHandler}>
              <FaGoogle />
              Sign In with Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
