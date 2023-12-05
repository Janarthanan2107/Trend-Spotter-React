// react hooks
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

// icons
import trendSpotterLogo from "/trendSpotterLogo.svg";
import { FaGoogle } from "react-icons/fa";

// firebase and context functions
import { signInAuthForGoogle } from "../../../utils/firebase";
import { useUserContext } from "../../../context/user.Context";
import "./signIn.style.scss";

const SignIn = () => {
  // import database from context
  const { user, googleHandler } = useUserContext();

  // form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // navigate to home
  let navigate = useNavigate();

  const logInToHome = () => {
    navigate("/");
  };

  const signUpPage = () => {
    navigate("/signUp");
  };

  const googlePopupHandler = () => {
    googleHandler();
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { user } = await signInAuthForGoogle(email, password);
      // console.log(user);

      // navigate to home
      logInToHome();

      setEmail("");
      setPassword("");
    } catch (err) {
      console.log("Something went wrong!", err.message);
      console.log(err.code);
      if (err.code === "auth/invalid-login-credentials") {
        toast.error("Invalid login credentials!");
      }
    }
  };

  useEffect(() => {
    if (user) {
      logInToHome()
    }
  }, [user]);

  return (
    <div className="signIn-container">
      <Toaster
        position="top-right"
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
            marginTop:"50px"
          },
        }}
      />
      {/* image section */}
      <div className="image-container"></div>
      {/* form section */}
      <div className="form-container">
        <span className="logo-container">
          <img src={trendSpotterLogo} alt="logo" className="logo" />{" "}
          <h1>Welcome Back!</h1>
        </span>
        <p className="message">
          Do not have an account?{" "}
          <span className="unique" onClick={signUpPage}>
            {" "}
            Sign up!
          </span>
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
