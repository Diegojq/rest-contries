import "./styles.css";
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
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.875 2.875L5 5.75L2.125 2.875L1.25 3.75L5 7.5L8.75 3.75L7.875 2.875Z"
            fill="currentColor"
          />
        </svg>
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
