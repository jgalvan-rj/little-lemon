import { Link } from "react-router-dom";

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

export const Nav = () => {
  return (
    <nav>
      {routes.map((item) => {
        return (
          <Link key={item.label} to={item.route}>
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
};
