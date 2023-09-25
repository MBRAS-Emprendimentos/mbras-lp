import React from "react";
import Header from "./Header";

function Hero() {
  return (
    <>
      <Header />
      <div className="relative h-2 flex flex-col justify-end items-center text-white parallax-container">
        {/* Parallax Background and Overlay Container */}
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <picture>
            <source
              srcSet="https://firebasestorage.googleapis.com/v0/b/mbras-database.appspot.com/o/hero-2_1920x1080.webp?alt=media&token=287c35ec-3ea7-4e9c-874b-3da69293f279"
              type="image/webp"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/mbras-database.appspot.com/o/hero-2_1920x1080.jpeg?alt=media&token=4b8583ae-6f5e-409a-8875-a7af2966da15"
              alt="Hero Background"
              className="w-full object-cover parallax-image"
            />
          </picture>

          {/* Gradient Overlay to make text more readable */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-mbras-blue opacity-50 to-transparent"></div>
        </div>

        {/* Text Overlay */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 bg-mbras-blue bg-opacity-60 rounded-lg shadow-xl z-10">
          <h1 className="text-5xl mb-4">Referência em Altíssimo Padrão</h1>
          <p className="text-xl mb-4">
            Experimente nossa Busca Express, digite o que procura e clique para
            encontrar
          </p>
        </div>
        <div className="absolute top-3/4 rounded-lg shadow-xl z-10">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Buscar Imóvel..."
              className="p-3 w-96 flex-grow rounded-md"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
