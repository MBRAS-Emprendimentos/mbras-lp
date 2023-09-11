import { Button, CardFooter } from "@nextui-org/react";

export function CardFooterComponent({ bairro, cidade, suites, areautil }) {
  const formattedAreaUtil = Number(areautil).toLocaleString("pt-BR");

  return (
    <CardFooter className="justify-between bg-mbras-blue/30 before: border-white/20 border-1 overflow-hidden py-1 absolute before: bottom-1 w-[calc(100%_-_8px)] shadow-large ml-1 z-10">
      <p className="text-tiny text-white">
        {bairro} - {cidade}
      </p>
      <Button
        className="text-tiny text-white bg-transparent"
        variant="flat"
        color="default"
        radius="small"
        size="sm"
      >
        {suites} Suítes | {formattedAreaUtil} m<sup>2</sup>
      </Button>
    </CardFooter>
  );
}
