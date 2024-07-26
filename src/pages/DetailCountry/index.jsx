import { useParams, useNavigate } from "react-router-dom";
import { countries } from "../../api/countries";
import "./styles.css";

export const DetailCountry = () => {
  const { alpha2Code } = useParams();
  const country = countries.find((contry) => contry.alpha2Code === alpha2Code);

  const navigate = useNavigate();
  return (
    <div className="detail">
      <div className="detailCountry__wrapperButton">
        <button
          className="detailCountry__backButton"
          onClick={() => navigate(-1)}
        >
          <svg
            className="detailCountry__iconButton"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="call-made">
              <path
                id="Shape"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.81802 3.6967L6.87868 4.75736L3.3785 8.25754H16.7428L16.7428 9.74246H3.3785L6.87868 13.2426L5.81802 14.3033L0.514719 9L5.81802 3.6967Z"
                fill="currentColor"
              />
            </g>
          </svg>
          Back
        </button>
      </div>
      <div className="detailCountry">
        <div className="detailCountry__wrapperImage">
          <img className="detailCountry__flag" src={country?.flags?.svg} />
        </div>

        <div className="detailCountry__containerInfo">
          <p className="detailCountry__nameCountry">{country?.name}</p>
          <div className="detailInfo">
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
          </div>

          <div className="detailCountry__wrapper">
            <div className="detailCountry__wrapperBorders">
              <p className="detailCountry__border">Border Countries:</p>
              <div className="detailCountry__wrapperGrid">
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
      </div>
    </div>
  );
};
