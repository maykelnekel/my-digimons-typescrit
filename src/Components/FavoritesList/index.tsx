import { useDigimons } from "../../Provider/DigimonsProvider";
import Card from "../Card";

function FavoritesList() {
  const { favorites, deleteDigimon } = useDigimons();
  return (
    <>
      {favorites.map((digimon, index) => (
        <Card
          isFavorite={true}
          key={index}
          digimon={digimon}
          func={deleteDigimon}
        />
      ))}
    </>
  );
}
export default FavoritesList;
