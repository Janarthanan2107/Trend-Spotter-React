// hooks
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useUserContext } from "../../context/user.Context";

// icons and logos
import { PiSignIn } from "react-icons/pi";
import { FaUser } from "react-icons/fa6";
import trendSpotterLogo from "/trendSpotterLogo.svg";

// styles
import "../navbar/navbar.style.scss";

const Navbar = () => {
  // import database from context
  const { user, logoutHandler } = useUserContext();

  // navigate to home
  let naviagte = useNavigate();
  const logoutToSignIn = () => {
    naviagte("/signIn");
  };

  const logout = () => {
    logoutHandler();
  };

  useEffect(() => {
    if(!user){
      logoutToSignIn();
    }
  }, [user])

  return (
    <nav>
      {/* logo */}
      <NavLink to="/">
        <div className="logo-container">
          <img src={trendSpotterLogo} alt="logo" className="logo" />{" "}
          <p>TrendSpotter</p>
        </div>
      </NavLink>

      <span className="menu-container">
        {/* menu */}
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "isActive" : "isNotActive"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="shop"
              className={({ isActive }) =>
                isActive ? "isActive" : "isNotActive"
              }
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to="cart"
              className={({ isActive }) =>
                isActive ? "isActive" : "isNotActive"
              }
            >
              Cart
            </NavLink>
          </li>
          <li>
            <NavLink
              to="contact"
              className={({ isActive }) =>
                isActive ? "isActive" : "isNotActive"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* signIn */}
        <span className="signIn-section">
          {user ? (
            <>
              <span className="user">
                <img src={user.photoURL} alt={user.displayName} />
                <p>{user.displayName}</p>
              </span>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "isActive signIn" : "isNotActive signIn"
                }
                onClick={logout}
              >
                <PiSignIn /> Logout
              </NavLink>
            </>
          ) : (
            <>
              <span className="guest">
                <FaUser className="guest-icon" />
                <p>Guest</p>
              </span>
              <NavLink
                to="signIn"
                className={({ isActive }) =>
                  isActive ? "isActive signIn" : "isNotActive signIn"
                }
              >
                <PiSignIn /> Sign In
              </NavLink>
            </>
          )}
        </span>
      </span>
    </nav>
  );
};

export default Navbar;
