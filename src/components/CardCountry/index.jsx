import "./styles.css";

export const CardCountry = ({ country }) => {
  return (
    <div className="wrapperCountry">
      <img className="wrapperCountry__image" src={country.flags.svg} />
      <div className="wrapperDetail">
        <p className="wrapperDetail__title">{country.name}</p>
        <p className="wrapperDetail__item">
          Population:
          <span>{country.population}</span>
        </p>
        <p className="wrapperDetail__item">
          Region:
          <span>{country.region}</span>
        </p>
        <p className="wrapperDetail__item">
          Capital:
          <span>{country.capital}</span>
        </p>
      </div>
    </div>
  );
};
