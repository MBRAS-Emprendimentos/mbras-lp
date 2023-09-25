"use client";
import React, { useState, useEffect } from "react";
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  SearchBox,
  RefinementList,
  Stats,
  Hits,
} from "react-instantsearch";
import DarkToggle from "./DarkToggle";
import HitCard from "./HitCard";
import { VoiceSearch } from "./VoiceSearch";
import { debounce } from "lodash";

const client = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY
);

function CustomHit({ hit }) {
  const formattedAreaUtil = Number(hit.areautil).toLocaleString("pt-BR");
  return (
    <div>
      <HitCard hit={hit} />
    </div>
  );
}

function HeroSearch() {
  const [isListening, setListening] = useState(false);
  const [query, setQuery] = useState("");

  const toggleListening = () => {
    setListening(!isListening);
  };

  const debouncedsearch = debounce((q) => {
    setQuery(q);
  }, 250); // 250ms delay

  useEffect(() => {
    return () => {
      // Cleanup function to cancel the debounce if component is unmounted
      debouncedsearch.cancel();
    };
  }, []);
  return (
    <InstantSearch searchClient={client} indexName="mysql">
      <>
        <div className="relative h-screen md:h-[18vh] shadow-2xl shadow-mbras-blue dark:shadow-green-100 dark:shadow-md w-full flex flex-col justify-center items-center space-y-5">
          <div
            className="fixed text-white top-0 left-0 w-full p-4 md:p-8 z-50 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0"
            style={{
              backgroundImage: `
      linear-gradient(rgba(11, 17, 32, 0.6), rgba(11, 17, 32, 0.6)),
      url("https://firebasestorage.googleapis.com/v0/b/mbras-database.appspot.com/o/hero-2_1920x1080.jpeg?alt=media&token=4b8583ae-6f5e-409a-8875-a7af2966da15")
    `,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
            }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center w-11/12 md:w-3/4 space-y-4 md:space-y-0">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/mbras-database.appspot.com/o/brand%2Fmbras-azul-bordabranca.png?alt=media&token=739b3ab3-b391-483d-96ac-10328c78b255"
                alt="Logo MBRAS"
                width={150}
                height={50}
              />

              <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4 items-center">
                <p className="text-md md:text-lg mt-2 text-center text-shadow-md">
                  Digite o local, suítes e outras informações do imóvel
                </p>
                <SearchBox
                  searchAsYouType={false}
                  onInput={(event) => {
                    debouncedsearch(event.currentTarget.value);
                  }}
                  value={query}
                  queryLanguage={"pt-br"}
                  placeholder="Fale mais sobre o imóvel, local, suítes..."
                  classNames={{
                    root: "p-3 mt-4",
                    form: "relative",
                    input:
                      "block w-3/4 md:w-96 pl-9 pr-3 py-2 border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md focus:ring-3",
                    submitIcon: "absolute top-4 left-0 bottom-0 w-6",
                  }}
                />
                <VoiceSearch
                  isListening={isListening}
                  toggleListening={toggleListening}
                  voiceListeningState={false}
                />
              </div>

              <DarkToggle />
            </div>
          </div>
        </div>

        {/* Algolia Search Widgets */}
        <div className="container mx-auto my-8 p-6 space-y-6">
          <Stats className="text-md" />
          <RefinementList attribute="bairro" />
          <Hits hitComponent={(props) => <CustomHit {...props} />} />
        </div>
      </>
    </InstantSearch>
  );
}

export default HeroSearch;
