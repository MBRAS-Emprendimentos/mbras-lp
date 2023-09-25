"use client";
import { createContext, useState } from "react";
import { ImoveisList } from "../components/ImoveisList";
import { useFetchData } from "./useFetchData";
import { SearchComponent } from "./SearchComponent";

export const ImoveisDataContext = createContext();

export function ImoveisDataProvider({
  initialSearchTerm = "",
  initialSearchCity = "",
}) {
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const [searchCity, setSearchCity] = useState(initialSearchCity);
  const data = useFetchData(searchTerm, searchCity);

  const handleInputThresholdMet = (term, city) => {
    if (term.length >= 3) {
      setSearchTerm(term);
    }
    if (city.length >= 3) {
      setSearchCity(city);
    }
  };

  return (
    <ImoveisDataContext.Provider
      value={{
        data,
        searchTerm,
        setSearchTerm,
        searchCity,
        setSearchCity,
      }}
    >
      <SearchComponent
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        searchCity={searchCity}
        setSearchCity={setSearchCity}
        onInputThresholdMet={handleInputThresholdMet}
      />
      <ImoveisList data={data} />
    </ImoveisDataContext.Provider>
  );
}
