import Image from "next/image";

export default function Dado({ valor }) {
  return (
    <Image
      src={`/dados/dado${valor}.png`}
      alt={`Dado ${valor}`}
      width={60}
      height={60}
    />
  );
}
