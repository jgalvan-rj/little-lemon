import PropTypes from "prop-types";
import { InputLabel } from "./InputLabel";
import { HelperText } from "./HelperText";

export const Select = (props) => {
  return (
    <div className={`text-input-field ${props.className}`}>
      <InputLabel {...props} />
      <select
        name={props.name}
        required={props.required}
        onChange={props.onChange}
        value={props.value}
        type="select"
        aria-label={props.name}
      >
        {props.displayEmpty && <option value="">{props.placeholder}</option>}
        {props.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <HelperText {...props} />
    </div>
  );
};

Select.propTypes = {
  className: PropTypes.string,
  error: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  helperText: PropTypes.string,
  options: PropTypes.array.isRequired,
  displayEmpty: PropTypes.bool,
};
