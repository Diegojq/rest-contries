import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { countries } from "../../api/countries";
import { CardCountry } from "../../components/CardCountry";
import { CustomSelect } from "../../components/CustomSelect";
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
          <svg
            className="search__iconInput"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.1111 9.77778H10.4L10.1333 9.51111C11.0222 8.53333 11.5556 7.2 11.5556 5.77778C11.5556 2.57778 8.97778 0 5.77778 0C2.57778 0 0 2.57778 0 5.77778C0 8.97778 2.57778 11.5556 5.77778 11.5556C7.2 11.5556 8.53333 11.0222 9.51111 10.1333L9.77778 10.4V11.1111L14.2222 15.5556L15.5556 14.2222L11.1111 9.77778ZM5.77778 9.77778C3.55556 9.77778 1.77778 8 1.77778 5.77778C1.77778 3.55556 3.55556 1.77778 5.77778 1.77778C8 1.77778 9.77778 3.55556 9.77778 5.77778C9.77778 8 8 9.77778 5.77778 9.77778Z"
              fill="currentColor"
            />
          </svg>
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
