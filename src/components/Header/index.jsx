import "./styles.css";
import moon from "../../assets/Icons/Moon.svg";

export const Header = () => {
  return (
    <div className="wrapperHeader">
      <p className="wrapperHeader-title">Where in the world?</p>
      <button className="wrapperHeader-button">
        <img className="moonIcon" src={moon} />
        Dark Mode
      </button>
    </div>
  );
};
