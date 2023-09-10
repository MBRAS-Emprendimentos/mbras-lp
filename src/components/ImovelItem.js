import { useState } from "react";

export function ImovelItem({ item }) {
  const [retryCount, setRetryCount] = useState(0);

  const urls = [
    `https://s3.amazonaws.com/static.nidoimovel.com.br/cf67355a3333e6e143439161adc2d82e/imovel/MB/${item.ref}/${item.ref}023.jpg`,
    `https://s3.amazonaws.com/static.nidoimovel.com.br/cf67355a3333e6e143439161adc2d82e/imovel/MB/${item.ref}/${item.ref}010.jpg`,
    `https://s3.amazonaws.com/static.nidoimovel.com.br/cf67355a3333e6e143439161adc2d82e/imovel/MB/${item.ref}/${item.ref}015.jpg`,
    `https://s3.amazonaws.com/static.nidoimovel.com.br/cf67355a3333e6e143439161adc2d82e/imovel/MB/${item.ref}/${item.ref}001.jpg`,
    `https://s3.amazonaws.com/static.nidoimovel.com.br/cf67355a3333e6e143439161adc2d82e/imovel/MB/${item.ref}/${item.ref}003.jpg`,
  ];

  const handleError = (e) => {
    if (retryCount < 4) {
      setRetryCount(retryCount + 1);
      e.target.src = urls[retryCount + 1];
    } else {
      e.target.onerror = null;
    }
  };

  // Truncate titulo if it exceeds 36 characters
  const truncatedTitulo =
    item.titulo.length > 36
      ? item.titulo.substring(0, 36) + "..."
      : item.titulo;

  return (
    <a
      href={`https://www.mbras.com.br/imovel/${item.ref}`}
      className="block bg-gray-800 overflow-hidden shadow rounded-lg hover:bg-gray-700 transition"
    >
      <img
        src={urls[0]}
        onError={handleError}
        alt={truncatedTitulo}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="font-bold text-xl mb-2 text-white">{truncatedTitulo}</h2>
        <p className="text-gray-400 text-base">
          {item.bairro} - {item.cidade}
        </p>
        <p className="text-blue-500 hover:text-blue-700 mt-4">
          www.mbras.com.br/imovel/{item.ref}
        </p>
      </div>
    </a>
  );
}
