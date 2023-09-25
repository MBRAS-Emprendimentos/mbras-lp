"use client";
import React, { useState } from "react";
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  Hits,
  SearchBox,
  RefinementList,
  Stats,
} from "react-instantsearch";
import { VoiceSearch } from "./VoiceSearch";
import HitCard from "./HitCard";
import AlgoliaHits from "../components/AlgoliaHits";
import { getAlgoliaResults } from "@algolia/autocomplete-js";

const client = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY
);

function CustomHit({ hit, onSelect }) {
  const formattedAreaUtil = Number(hit.areautil).toLocaleString("pt-BR");

  return (
    <div className="rounded-lg overflow-hidden shadow-md">
      <HitCard hit={hit} />
    </div>
  );
}

export default function SearchBar() {
  const [isListening, setListening] = useState(false);

  const toggleListening = () => {
    setListening(!isListening);
  };

  return (
    <InstantSearch searchClient={client} indexName="MBRAS">
      <VoiceSearch
        isListening={isListening}
        toggleListening={toggleListening}
        voiceListeningState={false}
      />
      <SearchBox
        searchAsYouType={true}
        placeholder="Fale mais sobre o imóvel que você procura..."
        classNames={{
          root: "p-3 shadow-sm",
          form: "relative",
          input:
            "block w-full pl-9 pr-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md focus:ring-1",
          submitIcon: "absolute top-4 left-0 bottom-0 w-6",
        }}
      />
      <Stats />
      <RefinementList attribute="bairro" showMore={true} showMoreLimit={20} />

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Hits hitComponent={(props) => <CustomHit {...props} />} />
      </div>
    </InstantSearch>
  );
}
