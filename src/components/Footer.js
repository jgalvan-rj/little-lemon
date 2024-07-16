import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <div className="one">
        <img src="logo.svg" alt="Secondary Logo" />
      </div>
      <div className="two">
        <ul>
          <h5>Navigation</h5>
          <li>
            <Link to="/" className="a">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="a">
              About
            </Link>
          </li>
          <li>
            <Link to="/menu" className="a">
              Menu
            </Link>
          </li>
          <li>
            <Link to="/reservations" className="a">
              Reservations
            </Link>
          </li>
          <li>
            <Link to="/order" className="a">
              Order Online
            </Link>
          </li>
          <li>
            <Link to="/login" className="a">
              Login
            </Link>
          </li>
        </ul>
      </div>
      <div className="three">
        <ul>
          <h5>Contact</h5>
          <li>
            <Link id="nav" href="#">
              Phone Number
            </Link>
          </li>
          <li>
            <Link id="nav" href="#">
              Email
            </Link>
          </li>
          <li>
            <Link id="nav" href="#">
              Address
            </Link>
          </li>
        </ul>
      </div>
      <div className="four">
        <ul>
          <h5>Social Media</h5>

          <li>
            <Link id="nav" href="#">
              Instagram
            </Link>
          </li>
          <li>
            <Link id="nav" href="#">
              LinkedIn
            </Link>
          </li>
          <li>
            <Link id="nav" href="#">
              Pinterest
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};
