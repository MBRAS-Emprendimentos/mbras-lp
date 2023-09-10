export default function SearchBar({
  searchTerm,
  setSearchTerm,
  searchCity,
  setSearchCity,
}) {
  return (
    <div>
      <input
        className="block w-full text-sm text-slate-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-violet-50 file:text-violet-700
          hover:file:bg-violet-100"
        type="text"
        placeholder="Digite o bairro..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <input
        className="block w-full text-sm text-slate-500
        file:mr-4 file:py-2 file:px-4
        file:rounded-full file:border-0
        file:text-sm file:font-semibold
        file:bg-violet-50 file:text-violet-700
        hover:file:bg-violet-100"
        type="text"
        placeholder="Digite a cidade..."
        value={searchCity}
        onChange={(e) => setSearchCity(e.target.value)}
      />
    </div>
  );
}
