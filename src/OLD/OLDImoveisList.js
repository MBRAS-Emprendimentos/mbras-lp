import { ImovelItem } from "./card/ImovelItem";
{
  /*} <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"> */
}

export function ImoveisList({ data }) {
  return (
    <section>
      <div className="flex flex-wrap grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 justify-center">
        {data.slice(0, 36).map((item, index) => (
          <ImovelItem key={index} item={item} />
        ))}
      </div>
    </section>
  );
}
