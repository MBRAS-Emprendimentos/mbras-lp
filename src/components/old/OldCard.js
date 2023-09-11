import PropTypes from "prop-types";
import { useState } from "react";

export function ImovelItem({ item }) {
  const [retryCount, setRetryCount] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false); // New state for image loading

  const urls = [
    `https://s3.amazonaws.com/static.nidoimovel.com.br/cf67355a3333e6e143439161adc2d82e/imovel/MB/${item.ref}/${item.ref}023.jpg`,
    `https://s3.amazonaws.com/static.nidoimovel.com.br/cf67355a3333e6e143439161adc2d82e/imovel/MB/${item.ref}/${item.ref}010.jpg`,
    `https://s3.amazonaws.com/static.nidoimovel.com.br/cf67355a3333e6e143439161adc2d82e/imovel/MB/${item.ref}/${item.ref}015.jpg`,
    `https://s3.amazonaws.com/static.nidoimovel.com.br/cf67355a3333e6e143439161adc2d82e/imovel/MB/${item.ref}/${item.ref}001.jpg`,
    `https://s3.amazonaws.com/static.nidoimovel.com.br/cf67355a3333e6e143439161adc2d82e/imovel/MB/${item.ref}/${item.ref}003.jpg`,
  ];

  ImovelItem.defaultProps = {
    item: {
      titulo: "",
      // ... any other default values you expect ...
    },
  };

  const handleError = (e) => {
    if (retryCount < 4) {
      setRetryCount(retryCount + 1);
      e.target.src = urls[retryCount + 1];
    } else {
      e.target.onerror = null;
    }
  };

  // Truncate titulo if it exceeds 42 characters
  const truncatedTitulo =
    item && item.titulo
      ? item.titulo.length > 42
        ? item.titulo.substring(0, 42) + "..."
        : item.titulo
      : "";

  // Formatação do número
  const formattedAreaUtil = Number(item.areautil).toLocaleString("pt-BR");

  return (
    <a
      href={`https://www.mbras.com.br/imovel/${item.ref}`}
      className="bg-slate-800 rounded overflow-hidden shadow-lg block transition-all duration-300 transform hover:scale-1c05"
    >
      <div className={`w-full h-48 ${imageLoaded ? "hidden" : ""}`}></div>
      <img
        src={urls[0]}
        onError={handleError}
        onLoad={() => setImageLoaded(true)}
        alt={truncatedTitulo}
        className={`w-full h-48 object-cover ${!imageLoaded ? "hidden" : ""}`}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-md mb-2">{truncatedTitulo}</div>
        <p>
          {item.bairro} - {item.cidade}
        </p>
        <p className="text-sm mt-2">
          {item.suites} Suítes | {formattedAreaUtil} m<sup>2</sup>
        </p>
      </div>
      <div className="px-6 py-4">
        <span className="text-sm font-semibold">Código: {item.ref}</span>
      </div>
    </a>
  );
}

ImovelItem.propTypes = {
  item: PropTypes.shape({
    titulo: PropTypes.string.isRequired,
    // ... other properties ...
  }).isRequired,
};
