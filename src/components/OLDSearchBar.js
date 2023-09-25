"use client";
import React, { useState, useEffect } from "react";
import algoliasearch from "algoliasearch/lite";
import { debounce } from "lodash";

import {
  InstantSearch,
  SearchBox,
  RefinementList,
  Stats,
  Hits,
} from "react-instantsearch";
import { VoiceSearch } from "./VoiceSearch";
import HitCard from "./HitCard";
const client = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY
);

function CustomHit({ hit }) {
  const formattedAreaUtil = Number(hit.areautil).toLocaleString("pt-BR");

  return (
    <div className="shadow-xl">
      <HitCard hit={hit} />
    </div>
  );
}

export default function SearchBar() {
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
    <InstantSearch searchClient={client} indexName="MBRAS">
      <VoiceSearch
        isListening={isListening}
        toggleListening={toggleListening}
        voiceListeningState={false}
      />
      <SearchBox
        searchAsYouType={false}
        onInput={(event) => {
          debouncedsearch(event.currentTarget.value);
        }}
        value={query}
        queryLanguage={"pt-br"}
        placeholder="Fale mais sobre o imóvel que você procura..."
        classNames={{
          root: "p-3 shadow-xl",
          form: "relative",
          input:
            "block w-80 pl-9 pr-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md focus:ring-3",
          submitIcon: "absolute top-4 left-0 bottom-0 w-6",
        }}
      />

      <Stats lang="pt-br" />
      <RefinementList attribute="bairro" showMore={true} showMoreLimit={20} />

      <Hits hitComponent={(props) => <CustomHit {...props} />} />
    </InstantSearch>
  );
}
