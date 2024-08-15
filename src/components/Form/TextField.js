import PropTypes from "prop-types";
import { InputLabel } from "./InputLabel";
import { HelperText } from "./HelperText";

export const TextField = (props) => {
  return (
    <div className={`text-input-field ${props.className}`}>
      <InputLabel {...props} />
      <input
        name={props.name}
        required={props.required}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value ?? ""}
      />
      <HelperText {...props} />
    </div>
  );
};

TextField.propTypes = {
  className: PropTypes.string,
  error: PropTypes.bool,
  value: PropTypes.string,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  helperText: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};
