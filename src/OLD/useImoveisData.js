"use client";
import SearchBar from "./SearchBar";
import { createContext, useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import firebase_app from "@/firebase/config";
import { ImoveisList } from "../components/ImoveisList";
import dynamic from "next/dynamic";
import algoliasearch from "algoliasearch/lite";

// Initialize the Algolia client
const client = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY
);

const DynamicSearchComponent = dynamic(
  () => import("../components/SearchBar"),
  {
    ssr: false,
  }
);

const db = getFirestore(firebase_app);
const imoveisRef = collection(db, "imoveis");

export const ImoveisDataContext = createContext();

const useImoveisDataFetch = (searchTerm, searchCity) => {
  const [data, setData] = useState([]);

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
        q = imoveisRef; // If no searchCity and no searchTerm, fetch all records.
      }

      const querySnapshot = await getDocs(q);
      const dataList = querySnapshot.docs.map((doc) => doc.data());
      setData(dataList);
    };

    if (searchTerm || searchCity) {
      fetchData();
    }
  }, [searchTerm, searchCity]);

  return data;
};

export function ImoveisDataProvider({
  initialSearchTerm = "",
  initialSearchCity = "",
}) {
  const data = useImoveisDataFetch(searchTerm, searchCity);

  return (
    <ImoveisDataContext.Provider>
      <SearchBar />
      <ImoveisList data={data} />
    </ImoveisDataContext.Provider>
  );
}
