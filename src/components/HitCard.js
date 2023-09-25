import React from "react";

function truncateString(str, num) {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + "...";
}

function HitCard({ hit }) {
  return (
    <div className="mx-4 lg:mx-auto w-full lg:w-4/5 2xl:w-4/5 overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 hover:shadow-xl p-4 bg-emerald-400/30 dark:bg-teal-800/30">
      <div className="flex flex-col lg:flex-row items-stretch">
        <a
          href={`https://www.mbras.com.br/imovel/${hit.ref}`}
          className="relative w-full lg:w-1/2 h-56 lg:h-auto rounded-t-lg lg:rounded-l-lg overflow-hidden transition-all duration-300 hover:shadow-inner"
        >
          <img
            src={hit.photos[0]}
            className="object-cover w-full h-full transition-opacity duration-300 hover:opacity-85"
            alt={`Imóvel - ${hit.bairro}`}
            title={`Fotos Imóvel - ${hit.bairro}`}
          />
        </a>

        <div className="w-full lg:w-1/2 p-4 lg:p-8 flex flex-col justify-between">
          <div>
            <h5 className="mb-3 text-xl lg:text-2xl font-medium leading-tight text-black dark:text-white">
              {truncateString(hit.titulo, 50)}
            </h5>
            <p className="mb-2 text-sm lg:text-base text-gray-600 dark:text-gray-300 opacity-90">
              Bairro: {hit.bairro}
            </p>
            <p className="mb-2 text-sm lg:text-base text-gray-600 dark:text-gray-300 opacity-90">
              Suítes: {hit.suites}
            </p>
            <p className="mb-4 text-sm lg:text-base text-gray-600 dark:text-gray-300 opacity-90">
              Área Útil: {hit.areautil} m²
            </p>
            <p className="mb-4 text-sm lg:text-base text-gray-600 dark:text-gray-300 opacity-90">
              {truncateString(hit.promocao, 250)}
            </p>
          </div>

          <a
            className="inline-block mt-4 lg:mt-0 px-6 py-2.5 bg-mbras-blue shadow-md shadow-mbras-blue text-white font-semibold text-sm lg:text-base rounded-md hover:bg-green-700 active:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors duration-300"
            href={`https://www.mbras.com.br/imovel/${hit.ref}`}
          >
            Ver Imóvel
          </a>
        </div>
      </div>
    </div>
  );
}

export default HitCard;
