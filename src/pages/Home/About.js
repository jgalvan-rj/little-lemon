export const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <h4 className="about-header">Our Story</h4>
        <p>
          Little Lemon is owned by two Italian brothers, Mario and Adrian, who
          moved to the United States to pursue their shared dream of owning a
          restaurant.
        </p>
        <p>
          To craft the menu, Mario relies on family recipes and his experience
          as a chef in Italy. Adrian does all the marketing for the restaurant
          and led the effort to expand the menu beyond classic Italian to
          incorporate additional cuisines from the Mediterranean region.
        </p>
      </div>
      <div className="about-image-container">
        <img src="/restaurant.jpg" alt="Restaurant" />
        <img
          src="/Mario and Adrian A.jpg"
          alt="Mario and Adrian"
          className="top"
        />
      </div>
    </section>
  );
};
