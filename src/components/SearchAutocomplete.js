"use client";
import React, { useState, useEffect } from "react";
import algoliasearch from "algoliasearch/lite";

import {
  InstantSearch,
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
      <VoiceSearch
        isListening={isListening}
        toggleListening={toggleListening}
        voiceListeningState={false}
      />
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
                    indexName: "mysql",
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

      <Stats lang="pt-br" />
      <RefinementList attribute="bairro" showMore={true} showMoreLimit={20} />

      <Hits hitComponent={(props) => <CustomHit {...props} />} />
    </InstantSearch>
  );
}
