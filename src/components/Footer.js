"use client";

import React from "react";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <div
      className="bg-gray-800 p-10 relatives overflow-hidden"
      style={{
        //backgroundImage: `url('https://maps.googleapis.com/maps/api/staticmap?center=-23.60176947877203,-46.70094752466863&zoom=15&size=800x600&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* 
      <div className="absolute inset-0 bg-mbras-blue h-[80vh] opacity-90"></div>{" "}
      Overlay */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {/* ... your footer content ... */}
        <div className="flex flex-col md:flex-row gap-4">
          <div>
            <h3 className="text-white text-xl mb-5 border-b-1 pb-2">MBRAS</h3>
            <p className="text-white mb-4">Corporate Cidade Jardim</p>
            <p className="text-white mb-2">Av. Magalhães de Castro, 4.800</p>
            <p className="text-white mb-2">Park Tower – 23° andar</p>
            <p className="text-white mb-2">Cidade Jardim - São Paulo - SP</p>
            <p className="text-white">CEP: 05676-120</p>
          </div>
        </div>

        <div>
          <h3 className="text-white text-xl mb-5 border-b-1 pb-2">
            Redes Sociais
          </h3>
          <a
            href="https://www.instagram.com/mbrasempreendimentos/"
            target="_blank"
            className="flex items-center text-green-600 mb-2 hover:text-green-800"
          >
            <FaInstagram className="mr-2" /> Instagram
          </a>
          <a
            href="https://www.facebook.com/mbrasempreendimentos"
            target="_blank"
            className="flex items-center text-green-600 mb-2 hover:text-green-800"
          >
            <FaFacebookF className="mr-2" /> Facebook
          </a>
          <a
            href="https://br.linkedin.com/company/mbras-solu%C3%A7%C3%B5es-imobili%C3%A1rias"
            target="_blank"
            className="flex items-center text-green-600 hover:text-green-800"
          >
            <FaLinkedinIn className="mr-2" /> LinkedIn
          </a>
        </div>

        <div>
          <h3 className="text-white text-xl mb-5 border-b-1 pb-2">BLOG</h3>
          <a
            href="https://blog.mbras.com.br/posts/as-5-mulheres-mais-ricas-do-brasil"
            target="_blank"
            className="text-white block mb-2"
          >
            As 5 mulheres mais ricas do Brasil
          </a>
          <a
            href="https://blog.mbras.com.br/posts/o-boom-imobiliario-das-ruas-comerciais-de-luxo-em-sao-paulo"
            target="_blank"
            className="text-white block mb-2"
          >
            O boom imobiliário das ruas comerciais de luxo em São Paulo
          </a>
          <a
            href="https://blog.mbras.com.br/posts/quais-sao-os-imoveis-residenciais-a-venda-mais-caros-de-sao-paulo"
            target="_blank"
            className="text-white"
          >
            Quais são os imóveis residenciais à venda mais caros de São Paulo?
          </a>
        </div>

        <div>
          <h3 className="text-white text-xl mb-5 border-b-1 pb-2">Links</h3>
          <a
            href="https://www.mbras.com.br/anuncie-seu-imovel/"
            target="_blank"
            className="text-green-600 block mb-2"
          >
            Anuncie seu imóvel
          </a>
          <a
            href="https://www.mbras.com.br/contato/"
            target="_blank"
            className="text-green-600 block mb-2"
          >
            Contato
          </a>
          <a
            href="https://www.mbras.com.br/gerenciamento-de-propriedades/"
            target="_blank"
            className="text-green-600 block mb-2"
          >
            Gerenciamento de Propriedades
          </a>
          <a
            href="https://www.mbras.com.br/trabalhe-conosco/"
            target="_blank"
            className="text-green-600"
          >
            Trabalhe conosco
          </a>
        </div>
      </div>
      <div className="mt-10 text-center">
        <p className="text-white">
          © 2023 MBRAS - Creci 23.907-J - Todos os Direitos Reservados.
        </p>
      </div>
    </div>
  );
}
