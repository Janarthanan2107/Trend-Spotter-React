import trendSpotterLogo from "/trendSpotterLogo.svg";
import "../navbar/navbar.style.scss";

const Navbar = () => {
  return (
    <nav>
      {/* logo */}
      <div className="logo-container">
        <img src={trendSpotterLogo} alt="logo" className="logo"/> <p>TrendSpotter</p>
      </div>

      <span className="menu-container">
        {/* menu */}
        <ul>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">Cart</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>

        {/* signIn */}
        <a className="signIn">Sign In</a>
      </span>
    </nav>
  );
};

export default Navbar;
