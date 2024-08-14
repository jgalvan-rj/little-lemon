import PropTypes from "prop-types";

export const InputLabel = (props) => {
  return (
    <label
      htmlFor={props.name}
      className={props.className + (props.error ? " input-error" : "")}
    >
      {props.label} {props.required && <sup>*</sup>}
    </label>
  );
};

InputLabel.propTypes = {
  error: PropTypes.bool,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
  name: PropTypes.string,
  className: PropTypes.string,
};
