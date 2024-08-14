import PropTypes from "prop-types";
import React from "react";
import { HelperText } from "./HelperText";
import { InputLabel } from "./InputLabel";

export const RadioGroup = (props) => {
  const renderChildren = () => {
    return React.Children.map(props.children, (child) => {
      return React.cloneElement(child, {
        name: props.name,
        onChange: props.onChange,
        checked: child.props.value === props.value,
      });
    });
  };
  return (
    <div className={`radio-group-root ${props.className}`}>
      <InputLabel {...props} className="radio-group-label" />
      <div className="radio-group" role="radiogroup">
        {renderChildren()}
      </div>
      <HelperText {...props} />
    </div>
  );
};

RadioGroup.propTypes = {
  className: PropTypes.string,
  error: PropTypes.bool,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
  helperText: PropTypes.string,
  children: PropTypes.node.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};
