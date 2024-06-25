import { countries } from "../../api/countries";
import { CardCountry } from "../../components/CardCountry";
import "./styles.css";

export const Home = () => {
  return (
    <section>
      <div className="wrapperFlags">
        {countries.map((country) => (
          <CardCountry key={country.alpha2Code} country={country} />
        ))}
      </div>
    </section>
  );
};
