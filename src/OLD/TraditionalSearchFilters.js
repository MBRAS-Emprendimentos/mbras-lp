// TraditionalSearchFilters.js
import React from "react";

export default function TraditionalSearchFilters({
  searchTerm,
  setSearchTerm,
  searchCity,
  setSearchCity,
  cities,
  onInputThresholdMet,
}) {
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

  return (
    <div className="absolute top-[250px] left-1/2 transform -translate-x-1/2 p-6 bg-mbras-blue bg-opacity-50 rounded-lg shadow-lg z-1000">
      <div className="flex justify-between rounded-none items-start mb-4">
        <div>
          <h1 className="text-4xl">Busca Tradicional</h1>
          <p className="text-xl mb-8">
            Selecione o bairro e a cidade para refinar sua busca.
          </p>
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <div className="relative mb-3 flex-1">
          <input
            id="bairroInput"
            type="text"
            value={searchTerm}
            onChange={handleSearchTermChange}
            className="peer block w-full rounded border-0 bg-transparent px-3 py-4 leading-[1.6] outline-none transition-all duration-200 ease-linear dark:text-neutral-200"
          />
          <label
            htmlFor="bairroInput"
            className={`pointer-events-none absolute left-3 top-0 mb-0 ${
              searchTerm ? "opacity-0" : "opacity-100"
            }`}
          >
            Digite o Bairro...
          </label>
        </div>
        <div className="relative flex-1">
          <label
            htmlFor="cidadeInput"
            className="pointer-events-none left-3 mb-0 absolute"
          >
            Cidade
          </label>
          <select
            id="cidadeInput"
            value={searchCity}
            onChange={handleSearchCityChange}
            className="peer block w-full rounded border-0 bg-transparent px-3 py-4 leading-[1.6] outline-none transition-all duration-200 ease-linear dark:text-neutral-200"
          >
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
