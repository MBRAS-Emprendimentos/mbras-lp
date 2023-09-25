// ExpressSearch.js
import React from "react";

export default function ExpressSearch({ cep, handleCepChange }) {
  return (
    <div className="absolute top-[250px] left-1/2 transform -translate-x-1/2 p-6 bg-mbras-blue bg-opacity-50 rounded-lg shadow-lg z-1000">
      <div className="flex justify-between rounded-none items-start mb-4">
        <div>
          <h1 className="text-4xl">Referência em Altíssimo Padrão</h1>
          <p className="text-xl mb-8">
            Experimente nossa Busca Express, digite o que procura e clique para
            encontrar
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <input
          value={cep}
          onChange={handleCepChange}
          placeholder="Digite o CEP..."
          className="border-2 border-white flex-grow rounded border-0 bg-transparent px-3 py-4 leading-[1.6] outline-none transition-all duration-200 ease-linear dark:text-neutral-200"
        />
        <button className="bg-transparent border-2 border-white hover:border-blue-500 hover:border-3 text-white font-bold py-4 px-8 rounded-none drop-shadow-2xl">
          Busca Express
        </button>
      </div>
    </div>
  );
}
