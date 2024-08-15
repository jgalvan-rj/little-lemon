import PropTypes from "prop-types";
import { LinkButton } from "../../components/LinkButton";

export const ConfirmedBooking = ({ values, onEdit }) => {
  const number = "3YSMBYS4D51V";
  return (
    <section className="reservation-confirmed">
      <img
        className="reservation-details-image"
        src="grilled fish.jpg"
        alt="Grilled fish"
      />
      <div className="reservation-details-container">
        <h1>{`${values.firstName} ${values.lastName}`}</h1>
        <div className="reservation-details-underline"></div>
        <div className="reservation-details">
          <p>{values.date}</p>
          <p>{`for ${values.numberOfGuests} at ${values.time}`}</p>
        </div>
        <div className="reservation-details-button-container">
          <button
            className="link-button"
            onClick={onEdit}
            aria-label="On click edit your reservation"
          >
            Edit Reservation
          </button>
          <LinkButton
            text="Cancel Reservation"
            to="/"
            aria-label="On click cancel your reservation"
          />
        </div>
      </div>

      <div className="reservation-details-contact">
        <p className="bold">Confirmation Number {number}</p>

        <p className="bold">Contact Us</p>
        <p>
          +1 (555) 555-5555 25238
          <br />
          Hosea Cape,
          <br />
          Chicago, IL 60007
        </p>
      </div>

      <div className="reservation-confirmation">
        <p>
          Confirmed! Thank you for making a reservation with Little Lemon. We
          look forward to seeing you!
        </p>
      </div>
    </section>
  );
};

ConfirmedBooking.propTypes = {
  values: PropTypes.object.isRequired,
  onEdit: PropTypes.func.isRequired,
};
