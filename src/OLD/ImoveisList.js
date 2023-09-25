import React, { createContext } from "react";
import SearchBar from "./SearchBar";

export const ImoveisDataContext = createContext();

export function ImoveisList() {
  return (
    <ImoveisDataContext.Provider>
      <SearchBar />{" "}
    </ImoveisDataContext.Provider>
  );
}
