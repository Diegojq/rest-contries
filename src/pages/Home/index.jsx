import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { countries } from "../../api/countries";
import { CardCountry } from "../../components/CardCountry";
import { CustomSelect } from "../../components/CustomSelect";
import shape from "../../assets/Icons/Shape.svg";
import "./styles.css";

export const Home = () => {
  const [searchByTitle, setSearchByTitle] = useState("");
  const [searchByCategory, setsearchByCategory] = useState("");
  const [filteredCountries, setFilteredCountries] = useState(countries);

  useEffect(() => {
    const results = countries.filter((country) => {
      const matchesTitle = country.name
        .toLowerCase()
        .includes(searchByTitle.toLowerCase());

      const matchesCategory = searchByCategory
        ? country.region === searchByCategory
        : true;
      return matchesTitle && matchesCategory;
    });
    setFilteredCountries(results);
  }, [searchByTitle, searchByCategory]);

  const options = [
    { value: "Africa", label: "Africa" },
    { value: "Americas", label: "America" },
    { value: "Asia", label: "Asia" },
    { value: "Europe", label: "Europe" },
    { value: "Oceania", label: "Oceania" },
  ];

  return (
    <section>
      <div className="search">
        <div className="search__wrapperInput">
          <img src={shape} className="search__iconInput" />
          <input
            className="search__input"
            type="text"
            placeholder="Search for a country…"
            onChange={(event) => setSearchByTitle(event.target.value)}
          />
        </div>
        <div>
          <CustomSelect
            label="Filter By Region"
            options={options}
            onChange={(value) => setsearchByCategory(value)}
          />
        </div>
      </div>
      <div className="wrapperFlags ">
        {filteredCountries.map((country) => (
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
