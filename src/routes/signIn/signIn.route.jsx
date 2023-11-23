// hooks
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/user.Context";
// styles
import "./signIn.style.scss";
// icons and logos
import trendSpotterLogo from "/trendSpotterLogo.svg";
import { FaGoogle } from "react-icons/fa";

const SignIn = () => {
  // import database from context
  const { user, googleHandler } = useUserContext();

  // navigate to home
  let naviagte = useNavigate();
  const logoutToHome = () => {
    naviagte("/");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    googleHandler();
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
            />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your valid password"
            />
          </div>
          <div className="form-submit">
            <button type="submit">Sign In</button>
            <button type="submit">
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
