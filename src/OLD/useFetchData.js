import { useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import firebase_app from "@/firebase/config";

const db = getFirestore(firebase_app);
const imoveisRef = collection(db, "imoveis");

export const useFetchData = (searchTerm, searchCity, cep) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let q;

      if (cep) {
        q = query(imoveisRef, where("cep", "==", cep));
      } else {
        const conditions = [];
        if (searchTerm) conditions.push(where("bairro", "==", searchTerm));
        if (searchCity) conditions.push(where("cidade", "==", searchCity));
        q = conditions.length ? query(imoveisRef, ...conditions) : imoveisRef;
      }

      const querySnapshot = await getDocs(q);
      const dataList = querySnapshot.docs.map((doc) => doc.data());
      setData(dataList);
    };

    fetchData();
  }, [searchTerm, searchCity, cep]);

  return data;
};
