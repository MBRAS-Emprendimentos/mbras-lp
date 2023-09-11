import PropTypes from "prop-types";
import { Card } from "@nextui-org/react";
import Map from "../Map";
import { ImageComponent } from "./Image";
import { CardFooterComponent } from "./CardFooter";

export function ImovelItem({ item }) {
  const urls = [
    `https://s3.amazonaws.com/static.nidoimovel.com.br/cf67355a3333e6e143439161adc2d82e/imovel/MB/${item.ref}/${item.ref}023.jpg`,
    `https://s3.amazonaws.com/static.nidoimovel.com.br/cf67355a3333e6e143439161adc2d82e/imovel/MB/${item.ref}/${item.ref}010.jpg`,
    `https://s3.amazonaws.com/static.nidoimovel.com.br/cf67355a3333e6e143439161adc2d82e/imovel/MB/${item.ref}/${item.ref}015.jpg`,
    `https://s3.amazonaws.com/static.nidoimovel.com.br/cf67355a3333e6e143439161adc2d82e/imovel/MB/${item.ref}/${item.ref}001.jpg`,
    `https://s3.amazonaws.com/static.nidoimovel.com.br/cf67355a3333e6e143439161adc2d82e/imovel/MB/${item.ref}/${item.ref}003.jpg`,
  ];

  const handleError = () => {
    if (currentURLIndex < urls.length - 1) {
      setCurrentURLIndex(currentURLIndex + 1);
    }
  };

  // Truncate titulo if it exceeds 42 characters
  const truncatedTitulo =
    item && item.titulo
      ? item.titulo.length > 42
        ? item.titulo.substring(0, 42) + "..."
        : item.titulo
      : "";

  const address = `${item.cep}, ${item.numero}`;

  // Formatação do número
  const formattedAreaUtil = Number(item.areautil).toLocaleString("pt-BR");

  return (
    <a href={`https://www.mbras.com.br/imovel/${item.ref}`} className="m-2">
      <Card className="border-none flex-shrink-0 drop-shadow-2xl">
        {/*<Map address={address} />*/}
        <ImageComponent urls={urls} alt={truncatedTitulo} />
        <CardFooterComponent
          bairro={item.bairro}
          cidade={item.cidade}
          suites={item.suites}
          areautil={item.areautil}
        />
      </Card>
    </a>
  );
}

ImovelItem.propTypes = {
  item: PropTypes.shape({
    titulo: PropTypes.string.isRequired,
    cep: PropTypes.string.isRequired,
    numero: PropTypes.string.isRequired,
    bairro: PropTypes.string.isRequired,
    cidade: PropTypes.string.isRequired,
    suites: PropTypes.number.isRequired,
    areautil: PropTypes.number.isRequired,
    ref: PropTypes.string.isRequired,
    // ... other properties ...
  }).isRequired,
};
