import motorbikeIcon from "../../assets/icons/motorbike-delivery.svg";
import PropTypes from "prop-types";

export const SpecialsCard = (props) => {
  return (
    <div className="specials-card">
      <div className="specials-img-cover">
        <div
          className="specials-img"
          style={{ backgroundImage: `url('${props.imageURL}')` }}
        />
      </div>
      <div className="specials-description">
        <div className="specials-description-header">
          <div className="specials-card-title">{props.title}</div>
          <div className="specials-card-title-price">
            ${props.price.toFixed(2)}
          </div>
        </div>
        <p>{props.description}</p>
        <div className="specials-order">
          <div>Order a delivery</div>
          <img
            className="specials-order-icon"
            src={motorbikeIcon}
            alt="Delivery"
          />
        </div>
      </div>
    </div>
  );
};

SpecialsCard.propTypes = {
  imageURL: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};
