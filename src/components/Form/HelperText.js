import PropTypes from "prop-types";

export const HelperText = (props) => {
  return (
    <>
      {props.error && props.helperText && (
        <p className="helper-text input-error">{props.helperText}</p>
      )}
    </>
  );
};

HelperText.propTypes = {
  error: PropTypes.bool,
  helperText: PropTypes.string,
};
