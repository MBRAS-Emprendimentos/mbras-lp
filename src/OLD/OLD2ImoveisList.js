import { connectHits } from "react-instantsearch-dom";
import { ImovelItem } from "./card/ImovelItem";

function CustomImoveisList({ hits }) {
  return (
    <section>
      <div className="flex flex-wrap grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 justify-center">
        {hits.slice(0, 36).map((hit, index) => (
          <ImovelItem key={index} item={hit} />
        ))}
      </div>
    </section>
  );
}

export const ImoveisList = connectHits(CustomImoveisList);
