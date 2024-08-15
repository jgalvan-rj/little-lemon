import PropTypes from "prop-types";

export const Radio = (props) => {
  return (
    <label className="radio-label">
      <span className="radio-input">
        <input
          type="radio"
          name={props.name}
          value={props.value}
          onClick={props.onChange}
          defaultChecked={props.checked}
        />
      </span>
      <span className="radio-label-text">{props.label}</span>
    </label>
  );
};

Radio.propTypes = {
  checked: PropTypes.bool,
  name: PropTypes.string,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};
