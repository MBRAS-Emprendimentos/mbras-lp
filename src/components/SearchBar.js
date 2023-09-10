export default function SearchBar({
  searchTerm,
  setSearchTerm,
  searchCity,
  setSearchCity,
  onInputThresholdMet,
}) {
  const handleSearchTermChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Check if the input is 3 or more characters before fetching
    if (value.length >= 3) {
      onInputThresholdMet(value, searchCity);
    }
  };

  const handleSearchCityChange = (e) => {
    const value = e.target.value;
    setSearchCity(value);

    // Check if the input is 3 or more characters before fetching
    if (value.length >= 3) {
      onInputThresholdMet(searchTerm, value);
    }
  };
  return (
    <div>
      <div className="relative mb-3" data-te-input-wrapper-init>
        <input
          id="bairroInput"
          type="text"
          value={searchTerm}
          onChange={handleSearchTermChange}
          data-has-value={searchTerm ? true : undefined}
          className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear dark:text-neutral-200"
        />
        <label
          htmlFor="bairroInput"
          className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
        >
          Digite o Bairro...
        </label>
      </div>
      <div className="relative mb-3" data-te-input-wrapper-init>
        <input
          id="cidadeInput"
          type="text"
          value={searchCity}
          onChange={handleSearchCityChange}
          data-has-value={searchCity ? true : undefined}
          className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear dark:text-neutral-200"
        />
        <label
          htmlFor="cidadeInput"
          className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
        >
          Digite a Cidade...
        </label>
      </div>
    </div>
  );
}
