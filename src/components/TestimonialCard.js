import starIcon from "../assets/icons/Five_Pointed_Star_Solid.svg";

import PropTypes from "prop-types";

export const TestimonialCard = (props) => {
  return (
    <div className="testimonials-card">
      <div className="testimonials-card-rating-container">
        {Array.from({ length: props.rating }).map((el) => (
          <img
            key={el}
            src={starIcon}
            alt="Star Icon"
            className="testimonials-card-star"
          />
        ))}
      </div>
      <div className="testimonials-card-content">
        <h2 className="black">{props.name}</h2>
        <div className="testimonials-profile-container">
          <img src={props.profileSrc} alt="headshot" />
        </div>
        <p>"{props.testimonial}"</p>
      </div>
    </div>
  );
};

TestimonialCard.propTypes = {
  rating: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  testimonial: PropTypes.string.isRequired,
  profileSrc: PropTypes.string.isRequired,
};
