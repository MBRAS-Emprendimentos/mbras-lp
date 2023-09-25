// components/AlgoliaHits.js
import React, { useState } from "react";
import HitCard from "./HitCard";

function AlgoliaHits({ hits }) {
  const [isListView, setIsListView] = useState(false);

  const toggleView = () => {
    setIsListView(!isListView);
  };

  return (
    <div>
      <button
        onClick={toggleView}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
      >
        Switch View
      </button>
      <div
        className={`${isListView ? "grid-cols-1" : "grid-cols-2"} grid gap-4`}
      >
        {hits.map((hit, index) => (
          <HitCard key={index} hit={hit} />
        ))}
      </div>
    </div>
  );
}

export default AlgoliaHits;
