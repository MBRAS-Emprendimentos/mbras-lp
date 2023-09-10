import { ImovelItem } from "../components/ImovelItem";
{
  /*} <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"> */
}

export function ImoveisList({ data }) {
  return (
    <div className="flex flex-wrap justify-center">
      {data.map((item, index) => (
        <ImovelItem key={index} item={item} />
      ))}
    </div>
  );
}
