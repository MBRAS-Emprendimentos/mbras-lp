import dynamic from "next/dynamic";

const DynamicSearchComponent = dynamic(() => import("./SearchBar"), {
  ssr: false,
});

export const SearchComponent = ({
  searchTerm,
  setSearchTerm,
  searchCity,
  setSearchCity,
  onInputThresholdMet,
}) => {
  return (
    <DynamicSearchComponent
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      searchCity={searchCity}
      setSearchCity={setSearchCity}
      onInputThresholdMet={onInputThresholdMet}
    />
  );
};
