import dynamic from "next/dynamic";
import SearchBar from "./SearchBar";

// Dynamically import the SearchBar component
const DynamicSearchBar = dynamic(() => import("./SearchBar"), {
  ssr: false,
});

export const SearchComponent = () => {
  return <></>;
};
