export default function Dado({ valor }) {
  return (
    <img
      src={`/dados/dado${valor}.png`}
      alt={`Dado ${valor}`}
      style={{ width: "60px", margin: "5px" }}
    />
  );
}
