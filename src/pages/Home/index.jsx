
import { useState, useEffect } from "react";
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

  const renderView = () => {
    if (filteredCountries.length > 0) {
      return filteredCountries.map((country) => (
        <CardCountry key={country.alpha2Code} country={country} />
      ));
    } else {
      return <div>Elemento no encontrado</div>;
    }
  };

  const options = [
    { value: "/", label: "Filter By Region" },
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
            onChange={(event) => setsearchByCategory(event.target.value)}
          />
        </div>

        {/*         <select
          className="search__select"
          value={searchByCategory}
          onChange={(event) => setsearchByCategory(event.target.value)}
        >
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select> */}
      </div>
      <div className="wrapperFlags">{renderView()}</div>
    </section>
  );
};
