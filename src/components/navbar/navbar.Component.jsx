// react hooks
import { NavLink, useNavigate } from "react-router-dom";

// icons
import { PiSignIn } from "react-icons/pi";
import { FaUser } from "react-icons/fa6";
import trendSpotterLogo from "/trendSpotterLogo.svg";

// context function
import { useUserContext } from "../../context/user.Context";
import { useCartGlobalContext } from "../../context/cart.Context";
// styles
import "../navbar/navbar.style.scss";

const Navbar = () => {
  // import database from context
  const { user, logoutHandler } = useUserContext();

  const { newCartCount } = useCartGlobalContext();

  // navigate to home
  let navigate = useNavigate();

  const navigateToSignIn = () => {
    navigate("/signIn");
  };

  const logout = () => {
    setTimeout(() => {
      logoutHandler();
    }, 500);
    navigateToSignIn();
  };

  return (
    <nav>
      {/* logo */}
      <NavLink to="/">
        <div className="logo-container">
          <img src={trendSpotterLogo} alt="logo" className="logo" />
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
          <li className="cart-list">
            <NavLink
              to="cart"
              className={({ isActive }) =>
                isActive ? "isActive" : "isNotActive"
              }
            >
              Cart
            </NavLink>
            <p className="cart-count">{newCartCount}</p>
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
