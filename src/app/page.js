"use client";
import Image from "next/image";
import { collection, query, where, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import firebase_app from "@/firebase/config";
import { useState, useEffect } from "react";

const db = getFirestore(firebase_app);
const imoveisRef = collection(db, "imoveis");

export default function Home() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("Jardim Europa");
  const [city, setCity] = useState(""); // Default to empty or set it to any default city
  const cities = ["São Paulo", "Rio de Janeiro", "Belo Horizonte"]; // Example cities

  useEffect(() => {
    const fetchData = async () => {
      let q;
      if (city) {
        q = query(
          imoveisRef,
          where("bairro", "==", searchTerm),
          where("cidade", "==", city)
        );
      } else {
        q = query(imoveisRef, where("bairro", "==", searchTerm));
      }
      const querySnapshot = await getDocs(q);
      const dataList = [];
      querySnapshot.forEach((doc) => {
        dataList.push(doc.data());
      });
      setData(dataList);
    };

    fetchData();
  }, [searchTerm]); // useEffect will run again if searchTerm changes

  useEffect(() => {
    const results = data.filter((item) =>
      item.titulo.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(results);
  }, [searchTerm]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <label
          htmlFor="city"
          className="block text-sm font-medium text-gray-700"
        >
          Select City
        </label>
        <select
          id="city"
          name="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="bg-white text-sm border rounded-md shadow-sm focus:ring focus:ring-opacity-50"
        >
          <option value="" disabled>
            Select a city
          </option>
          {cities.map((c, index) => (
            <option key={index} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

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
      </div>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        {data.map((item, index) => (
          <div key={index}>
            <div className="fixed items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
              <p>{item.titulo}</p>
              <p>
                {item.bairro} - {item.cidade}
              </p>
              <div className="items-center justify-between font-mono text-sm lg:flex">
                <a> www.mbras.com.br/imovel/{item.ref}</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
