import { NavLink } from "react-router-dom";

import { PiSignIn } from "react-icons/pi";
import trendSpotterLogo from "/trendSpotterLogo.svg";
import "../navbar/navbar.style.scss";

const Navbar = () => {
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
        <NavLink
          to="signIn"
          className={({ isActive }) =>
            isActive ? "isActive signIn" : "isNotActive signIn"
          }
        >
          <PiSignIn /> Sign In
        </NavLink>
      </span>
    </nav>
  );
};

export default Navbar;
