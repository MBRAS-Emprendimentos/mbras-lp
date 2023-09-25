"use client";
import React, { useState } from "react";
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  SearchBox,
  RefinementList,
  Stats,
  Hits,
} from "react-instantsearch";
import { VoiceSearch } from "./VoiceSearch";
import HitCard from "./HitCard";
import AlgoliaHits from "../components/AlgoliaHits";
import { getAlgoliaResults } from "@algolia/autocomplete-js";
import { ProductItem } from "./ProductItem";
import { Autocomplete } from "./Autocomplete";

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
        queryLanguage={"pt-br"}
        placeholder="Fale mais sobre o imóvel que você procura..."
        classNames={{
          root: "p-3 shadow-xl",
          form: "relative",
          input:
            "block w-full pl-9 pr-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md focus:ring-3",
          submitIcon: "absolute top-4 left-0 bottom-0 w-6",
        }}
      />

      <Stats lang="pt-br" />
      <RefinementList attribute="bairro" showMore={true} showMoreLimit={20} />

      <Hits hitComponent={(props) => <CustomHit {...props} />} />

      <Autocomplete
        placeholder="Fale mais sobre o imóvel que você procura..."
        openOnFocus={true}
        getSources={({ query }) => [
          {
            sourceId: "products",
            getItems() {
              return getAlgoliaResults({
                searchClient: client,
                queries: [
                  {
                    indexName: "MBRAS",
                    query,
                  },
                ],
              });
            },
            templates: {
              item({ item, components }) {
                return <ProductItem hit={item} components={components} />;
              },
            },
          },
        ]}
      />
    </InstantSearch>
  );
}
