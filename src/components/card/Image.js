import { useState } from "react";
import { Image } from "@nextui-org/react";

export function ImageComponent({ urls, alt }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [currentURLIndex, setCurrentURLIndex] = useState(0);

  const handleError = () => {
    if (currentURLIndex < urls.length - 1) {
      setCurrentURLIndex(currentURLIndex + 1);
    }
  };

  return (
    <Image
      alt={alt}
      src={
        imageLoaded ? urls[currentURLIndex] : "https://via.placeholder.com/150"
      }
      onError={handleError}
      onLoad={() => setImageLoaded(true)}
      className={`w-full h-48 object-cover ${!imageLoaded ? "hidden" : ""}`}
    />
  );
}
