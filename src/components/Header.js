"use client";
import React from "react";
import DarkToggle from "./DarkToggle";

const Header = () => {
  return (
    <header className="bg-transparent p-4 absolute top-0 left-0 z-20">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold">MBRAS</h1>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="https://www.mbras.com.br/anuncie-seu-imovel/"
            target="_blank"
            className="text-white hover:text-blue-500"
          >
            Anuncie seu imóvel
          </a>
          <a
            href="https://www.mbras.com.br/contato/"
            target="_blank"
            className="text-white hover:text-blue-500"
          >
            Contato
          </a>
          <a
            href="https://www.mbras.com.br/gerenciamento-de-propriedades/"
            target="_blank"
            className="text-white hover:text-blue-500"
          >
            Gerenciamento de Propriedades
          </a>
          <a
            href="https://www.mbras.com.br/trabalhe-conosco/"
            target="_blank"
            className="text-white hover:text-blue-500"
          >
            Trabalhe conosco
          </a>
          <DarkToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
