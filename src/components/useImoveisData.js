"use client";
import { createContext, useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import firebase_app from "@/firebase/config";
import { ImoveisList } from "./ImoveisList";

import dynamic from "next/dynamic";
import DarkToggle from "./DarkToggle";

const DynamicSearchComponent = dynamic(() => import("./SearchBar"), {
  ssr: false, // Ensure it's only loaded and rendered on the client side
});

const db = getFirestore(firebase_app);
const imoveisRef = collection(db, "imoveis");

export const ImoveisDataContext = createContext();

export function ImoveisDataProvider({
  initialSearchTerm = "",
  initialSearchCity = "",
}) {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const [searchCity, setSearchCity] = useState(initialSearchCity);
  const handleInputThresholdMet = (term, city) => {
    if (term.length >= 3) {
      setSearchTerm(term);
    }
    if (city.length >= 3) {
      setSearchCity(city);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      let q;

      if (searchTerm && searchCity) {
        q = query(
          imoveisRef,
          where("bairro", "==", searchTerm),
          where("cidade", "==", searchCity)
        );
      } else if (searchTerm) {
        q = query(imoveisRef, where("bairro", "==", searchTerm));
      } else if (searchCity) {
        q = query(imoveisRef, where("cidade", "==", searchCity));
      } else {
        q = query(imoveisRef); // If no searchCity and no searchTerm, fetch all records.
      }

      const querySnapshot = await getDocs(q);
      const dataList = [];
      querySnapshot.forEach((doc) => {
        dataList.push(doc.data());
      });
      setData(dataList);
    };

    if (searchTerm || searchCity) {
      fetchData();
    }
  }, [searchTerm, searchCity]);

  return (
    <ImoveisDataContext.Provider
      value={{
        data: filteredData,
        searchTerm,
        setSearchTerm,
        searchCity,
        setSearchCity,
      }}
    >
      <DarkToggle />

      <DynamicSearchComponent
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
