// images & logos
import trendSpotterLogo from "/trendSpotterLogo.svg";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
// styles
import "./footer.styles.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        {/* logo */}
        <div className="logo-container">
          <div className="logo">
            <img src={trendSpotterLogo} alt="logo" />
            <p>TRENDSPOTTER</p>
          </div>
          <Link to={"/signIn"}>
            <button type="button">Join Us.</button>
          </Link>
        </div>

        {/* pages links */}
        <div className="page-links-container">
          <ul className="page-links">
            <Link to={"/"} className="links">
              Home
            </Link>
            <Link to={"/shop"} className="links">
              Shop
            </Link>
            <Link to={"/cart"} className="links">
              Cart
            </Link>
          </ul>
        </div>

        {/* social media */}
        <div className="social-links-container">
          <ul className="social-links">
            <li className="links">
              <FaSquareFacebook />
            </li>
            <li className="links">
              <FaSquareXTwitter />
            </li>
            <li className="links">
              <FaGithubSquare />
            </li>
          </ul>
        </div>
      </div>
      {/* copyrights */}
      <div className="license-container">
        <p>
          <FaHeart className="heart" /> &copy; 2023 Trendspotter. Developed by
          Janarthanan.
        </p>
      </div>
    </>
  );
};

export default Footer;
