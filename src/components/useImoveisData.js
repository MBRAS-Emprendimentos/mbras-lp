"use client";
import { createContext, useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import firebase_app from "@/firebase/config";
import { ImoveisList } from "./ImoveisList";

import dynamic from "next/dynamic";

const DynamicSearchComponent = dynamic(() => import("./SearchBar"), {
  ssr: false, // Ensure it's only loaded and rendered on the client side
});

const db = getFirestore(firebase_app);
const imoveisRef = collection(db, "imoveis");

export const ImoveisDataContext = createContext();

export function ImoveisDataProvider({
  initialSearchTerm = "Jardim Europa",
  initialSearchCity = "",
}) {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const [searchCity, setSearchCity] = useState(initialSearchCity);

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

    fetchData();
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
      <DynamicSearchComponent
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        searchCity={searchCity}
        setSearchCity={setSearchCity}
      />
      <ImoveisList data={data} />
    </ImoveisDataContext.Provider>
  );
}
