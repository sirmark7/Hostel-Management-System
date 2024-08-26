import { PropTypes } from "prop-types";

const SelectField = ({
  options,
  value,
  label,
  className,
  onChange,
}) => {
  return (
    <select
      value={value}
      className={className}
      onChange={(e) => onChange(label, e.target.value)}
    >
      <option value="">::{label.toUpperCase()}::</option>
      {options.map((option, i) => (
        <option key={i} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
SelectField.propTypes={
   options:PropTypes.string,
  value:PropTypes.string,
  label:PropTypes.string,
  className:PropTypes.string,
  onChange:PropTypes.func
}
export default SelectField;
