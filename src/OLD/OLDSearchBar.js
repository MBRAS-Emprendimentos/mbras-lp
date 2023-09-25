import React, { useState } from "react";
import { useFetchData } from "./useFetchData";
import TraditionalSearchFilters from "./TraditionalSearchFilters";
import ExpressSearch from "./ExpressSearch"; // Import the new component

export default function SearchBar({
  searchTerm,
  setSearchTerm,
  searchCity = "Porto Feliz",
  setSearchCity,
  onInputThresholdMet,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [cep, setCep] = useState("");

  const data = useFetchData(searchTerm, searchCity, cep);

  const handleSearchTermChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.length >= 3) {
      onInputThresholdMet(value, searchCity);
    }
  };

  const handleSearchCityChange = (e) => {
    const value = e.target.value;
    setSearchCity(value);
    onInputThresholdMet(searchTerm, value);
  };

  const handleCepChange = (e) => {
    const value = e.target.value;
    setCep(value);
  };

  const [showAdditionalFilters, setShowAdditionalFilters] = useState(false);
  const [showExpressSearch, setShowExpressSearch] = useState(true); // By default, show the Express Search

  const cities = [
    "Porto Feliz",
    "São Paulo",
    "Rio de Janeiro",
    "Bragança Paulista",
  ];

  return (
    <>
      {showExpressSearch ? (
        <ExpressSearch cep={cep} handleCepChange={handleCepChange} />
      ) : (
        <TraditionalSearchFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          searchCity={searchCity}
          setSearchCity={setSearchCity}
          cities={cities}
          onInputThresholdMet={onInputThresholdMet}
        />
      )}

      <button onClick={() => setShowExpressSearch(!showExpressSearch)}>
        {showExpressSearch ? "Busca Tradicional" : "Busca Express"}
      </button>
    </>
  );
}
