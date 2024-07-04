import "./styles.css";
import below from "../../assets/Icons/below.svg";
export const CustomSelect = ({ options, ...props }) => (
  <div className="select-container">
    <select className="styled-select" {...props}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    <span className="select-icon">
      <img src={below} />
    </span>
  </div>
);
