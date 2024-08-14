import { LinkButton } from "./LinkButton";

export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <LinkButton to="/booking" text="Reserve a Table" />
        </div>
      </div>
      <div className="hero-container">
        <div className="hero-img-cover">
          <div className="hero-img" />
        </div>
      </div>
    </section>
  );
};
