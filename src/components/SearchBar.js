import React, { useState } from "react";

export default function SearchBar({
  searchTerm,
  setSearchTerm,
  searchCity = "Porto Feliz",
  setSearchCity,
  onInputThresholdMet,
}) {
  const [searchBairro, setSearchBairro] = useState("Jardim Europa");

  const handleSearchTermChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.length >= 3) {
      onInputThresholdMet(value, searchCity);
    }
  };

  const handleSearchBairroChange = (e) => {
    setSearchBairro(e.target.value);
  };

  const handleSearchCityChange = (e) => {
    const value = e.target.value;
    setSearchCity(value);
    onInputThresholdMet(searchTerm, value);
  };

  const cities = [
    "Porto Feliz",
    "São Paulo",
    "Rio de Janeiro",
    "Bragança Paulista",
  ];

  const bairros = [
    "", // Opção vazia
    "Cidade Jardim",
    "Itaim Bibi",
    "Jardins",
    "Jardim Europa",
    "Vila Nova Conceição",
  ];

  return (
    <div className="flex space-x-4">
      {" "}
      {/* Flex container */}
      <div className="relative mb-3 flex-1" data-te-input-wrapper-init>
        <input
          id="bairroInput"
          type="text"
          value={searchTerm}
          onChange={handleSearchTermChange}
          data-has-value={searchTerm ? true : undefined}
          className="peer block w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear dark:text-neutral-200"
        />
        <label
          htmlFor="bairroInput"
          className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
        >
          Digite o Bairro...
        </label>
      </div>
      <div className="relative mb-3" data-te-input-wrapper-init>
        <label
          htmlFor="bairroInput"
          className="pointer-events-none left-3 mb-0 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
        >
          Bairro
        </label>{" "}
        <select
          id="bairroInput"
          value={searchBairro}
          onChange={handleSearchBairroChange} // Aqui está a mudança
          className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear dark:text-neutral-200"
        >
          {bairros.map((bairro) => (
            <option key={bairro} value={bairro}>
              {bairro}
            </option>
          ))}
        </select>
      </div>
      <div className="relative mb-3 flex-1" data-te-input-wrapper-init>
        <label
          htmlFor="cidadeInput"
          className="pointer-events-none left-3 mb-0 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
        >
          Cidade
        </label>{" "}
        <select
          id="cidadeInput"
          value={searchCity}
          onChange={handleSearchCityChange}
          className="peer block w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear dark:text-neutral-200"
        >
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
