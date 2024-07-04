import { useParams, useNavigate } from "react-router-dom";
import { countries } from "../../api/countries";
import callMade from "../../assets/Icons/callMade.svg";
import "./styles.css";

export const DetailCountry = () => {
  const { alpha2Code } = useParams();
  const country = countries.find((contry) => contry.alpha2Code === alpha2Code);

  const navigate = useNavigate();
  return (
    <div className="detailCountry">
      <div className="detailCountry__wrapperImage">
        <button
          className="detailCountry__backButton"
          onClick={() => navigate(-1)}
        >
          <img className="detailCountry__iconButton" src={callMade} /> Back
        </button>

        <img className="detailCountry__flag" src={country?.flags?.svg} />
      </div>

      <div className="detailCountry__containerInfo">
        <p className="detailCountry__nameCountry">{country?.name}</p>

        <div className="detailCountry__principalInfoWrapper">
          <p className="detailCountry__info">
            Native Name:
            <span>{country?.nativeName}</span>
          </p>
          <p className="detailCountry__info">
            Population:
            <span>{country?.population}</span>
          </p>
          <p className="detailCountry__info">
            Region:
            <span>{country?.region}</span>
          </p>
          <p className="detailCountry__info">
            Sub Region:
            <span>{country?.subregion}</span>
          </p>
          <p className="detailCountry__info">
            Capital:
            <span>{country?.capital}</span>
          </p>
        </div>

        <div className="detailCountry__secondaryInfoWrapper">
          <p className="detailCountry__info">
            Top Level Domain:
            <span>{country?.topLevelDomain}</span>
          </p>
          <p className="detailCountry__info">
            Currencies:
            <span>{country?.currencies?.[1]?.name}</span>
          </p>
          <p className="detailCountry__info">
            Languages:
            {country.languages &&
              country.languages.map((lang) => (
                <span key={lang.iso639_2}>{lang.name}</span>
              ))}
          </p>
        </div>

        <div className="detailCountry__wrapper">
          <p className="detailCountry__border">Border Countries:</p>
          <div className="detailCountry__wrapperBorders">
            {country.borders &&
              country.borders.map((border, index) => (
                <span
                  key={border + index}
                  className="detailCountry__borderItems"
                >
                  {border}
                </span>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
