"use client";
import React, { createContext, useState } from "react";
import { SearchComponent } from "./SearchComponent";

export const ImoveisDataContext = createContext();

export function ImoveisDataProvider() {
  return (
    <ImoveisDataContext.Provider value={data}>
      <SearchComponent />
    </ImoveisDataContext.Provider>
  );
}
