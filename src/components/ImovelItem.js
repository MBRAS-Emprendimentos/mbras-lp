import PropTypes from "prop-types";
import { useState } from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";

export function ImovelItem({ item }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [currentURLIndex, setCurrentURLIndex] = useState(0);

  const urls = [
    `https://s3.amazonaws.com/static.nidoimovel.com.br/cf67355a3333e6e143439161adc2d82e/imovel/MB/${item.ref}/${item.ref}023.jpg`,
    `https://s3.amazonaws.com/static.nidoimovel.com.br/cf67355a3333e6e143439161adc2d82e/imovel/MB/${item.ref}/${item.ref}010.jpg`,
    `https://s3.amazonaws.com/static.nidoimovel.com.br/cf67355a3333e6e143439161adc2d82e/imovel/MB/${item.ref}/${item.ref}015.jpg`,
    `https://s3.amazonaws.com/static.nidoimovel.com.br/cf67355a3333e6e143439161adc2d82e/imovel/MB/${item.ref}/${item.ref}001.jpg`,
    `https://s3.amazonaws.com/static.nidoimovel.com.br/cf67355a3333e6e143439161adc2d82e/imovel/MB/${item.ref}/${item.ref}003.jpg`,
  ];

  ImovelItem.propTypes = {
    item: PropTypes.shape({
      titulo: PropTypes.string.isRequired,
      // ... other properties ...
    }).isRequired,
    titulo: PropTypes.string,
  };

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

  // Formatação do número
  const formattedAreaUtil = Number(item.areautil).toLocaleString("pt-BR");

  return (
    <a href={`https://www.mbras.com.br/imovel/${item.ref}`} className="m-2">
      <Card className="border-none flex-shrink-0">
        <Image
          alt={truncatedTitulo}
          src={
            imageLoaded
              ? urls[currentURLIndex]
              : "https://via.placeholder.com/150"
          }
          onError={handleError}
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-48 object-cover ${!imageLoaded ? "hidden" : ""}`}
        />
        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <p className="text-tiny text-white/80">
            {item.bairro} - {item.cidade}
          </p>
          <Button
            className="text-tiny text-white bg-black/20"
            variant="flat"
            color="default"
            radius="lg"
            size="sm"
          >
            {item.suites} Suítes | {formattedAreaUtil} m<sup>2</sup>
          </Button>
        </CardFooter>
      </Card>
    </a>
  );
}

ImovelItem.propTypes = {
  item: PropTypes.shape({
    titulo: PropTypes.string.isRequired,
    // ... other properties ...
  }).isRequired,
};
