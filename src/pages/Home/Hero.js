import { LinkButton } from "../../components/LinkButton";

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
          <LinkButton
            to="/reservations"
            text="Reserve a Table"
            aria-label="On click make your reservation"
          />
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
