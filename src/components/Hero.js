"use client";
import React, { useEffect, useRef } from "react";
import Header from "./Header";

function Hero() {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <div className="relative h-screen flex flex-col justify-center items-center text-white parallax-container">
        <div
          ref={parallaxRef}
          className="absolute top-0 left-0 w-full h-full z-0"
        >
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
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>{" "}
        {/* Overlay */}
        <div className="z-10">
          <h1 className="text-4xl mb-4">Referência em Altíssimo Padrão</h1>
          <p className="text-xl mb-8">
            Experimente nossa Busca Express, digite o que procura e clique para
            encontrar
          </p>
          <button className="bg-transparent border-2 border-white hover:border-blue-500 hover:border-3 text-white font-bold py-4 px-8 rounded-none drop-shadow-2xl">
            Busca Express
          </button>
        </div>
      </div>
    </>
  );
}

export default Hero;
