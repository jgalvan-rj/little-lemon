import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const LinkButton = (props) => {
  return (
    <Link to={props.to}>
      <button
        className={
          "link-button" + (props.disabled ? "link-button-disabled" : "")
        }
      >
        {props.text}
      </button>
    </Link>
  );
};

LinkButton.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};
