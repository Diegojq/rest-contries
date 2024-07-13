import "./styles.css";
import moon from "../../assets/Icons/Moon.svg";
import { useTheme } from "../ThemeContext";

export const Header = () => {
  const { toggleTheme } = useTheme();
  return (
    <div className="wrapperHeader">
      <p className="wrapperHeader-title">Where in the world?</p>
      <button className="wrapperHeader-button" onClick={toggleTheme}>
        <img className="moonIcon" src={moon} />
        Dark Mode
      </button>
    </div>
  );
};
