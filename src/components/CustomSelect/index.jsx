import "./styles.css";
import below from "../../assets/Icons/below.svg";
import { useState } from "react";

export const CustomSelect = ({ options, ...props }) => {
  const [isOpenSelect, setIsOpenSelect] = useState(false);
  const [optionSelect, setOptionSelect] = useState("");

  const handleShowOptions = () => {
    setIsOpenSelect(!isOpenSelect);
  };

  const handleOptionSelect = (value) => {
    props.onChange && props.onChange(value);
    setOptionSelect(value);
    setIsOpenSelect(false);
  };

  return (
    <div className="selectContainer" onClick={handleShowOptions}>
      <div className="selectContainer__label">
        <span>{optionSelect ? optionSelect : props.label}</span>
        <img className="" src={below} />
      </div>
      {isOpenSelect && (
        <div className="selectContainer__options">
          {options.map((option, index) => (
            <option
              key={index}
              value={option.value}
              onClick={() => handleOptionSelect(option.value)}
              className="selectContainer__option"
            >
              {option.label}
            </option>
          ))}
        </div>
      )}
    </div>
  );
};
