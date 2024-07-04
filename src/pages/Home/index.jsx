import { Link } from "react-router-dom";
import { countries } from "../../api/countries";
import { CardCountry } from "../../components/CardCountry";
import "./styles.css";

export const Home = () => {
  return (
    <section>
      <div className="wrapperFlags ">
        {countries.map((country) => (
          <Link
            className="linkCountry"
            key={country.alpha2Code}
            to={`/country/${country.alpha2Code}`}
          >
            <CardCountry country={country} />
          </Link>
        ))}
      </div>
    </section>
  );
};
