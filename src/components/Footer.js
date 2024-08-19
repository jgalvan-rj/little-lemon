import { Link } from "react-router-dom";
import { routes } from "./Header";

export const Footer = () => {
  return (
    <footer>
      <img
        src="/Asset 20@4x.png"
        alt="Secondary Logo"
        className="footer-logo"
      />
      <div className="footer-navigation">
        <h5>Navigation</h5>
        <div className="list-container">
          {routes.map((item) => {
            return (
              <Link key={item.label} to={item.route}>
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
      <div>
        <h5>Contact</h5>
        <div className="list-container">
          <div>
            <p>25238 Hosea Cape, Chicago, IL 6007</p>
          </div>
          <div>
            <p>+1 (555) 555-5555</p>
          </div>
          <div>
            <p>LittleLemon@LittleLemon.com</p>
          </div>
        </div>
      </div>
      <div>
        <h5>Social Media</h5>
        <div className="list-container">
          <Link id="nav" to="#">
            Instagram
          </Link>
          <Link id="nav" to="#">
            LinkedIn
          </Link>
          <Link id="nav" to="#">
            Pinterest
          </Link>
        </div>
      </div>
    </footer>
  );
};
