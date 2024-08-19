import "./header.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export const routes = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "About",
    route: "/",
  },
  {
    label: "Menu",
    route: "/",
  },
  {
    label: "Reservations",
    route: "/reservations",
  },
  {
    label: "Order Online",
    route: "/",
  },
  {
    label: "Login",
    route: "/",
  },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav>
        <Link to="/">
          <img className="header-img" src="logo.svg" alt="Logo" />
        </Link>
        <ul
          className={`nav-menu${isOpen ? " active" : ""}`}
          onClick={toggleMenu}
        >
          {routes.map((item) => {
            return (
              <li key={item.label} className="nav-item">
                <Link to={item.route} onClick={toggleMenu}>
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <div
          className={`hamburger${isOpen ? " active" : ""}`}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
};
