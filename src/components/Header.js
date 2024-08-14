import { Nav } from "./Nav";

export const Header = () => {
  return (
    <header>
      <img className="header-img" src="logo.svg" alt="Logo" />

      <Nav />
    </header>
  );
};
