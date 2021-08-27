import { useDigimons } from "../../Provider/DigimonsProvider";
import Card from "../Card";
import { Container } from "./style";

function FavoritesList() {
  const { favorites, deleteDigimon } = useDigimons();
  return (
    <Container>
      {favorites.map((digimon, index) => (
        <Card
          isFavorite={true}
          key={index}
          digimon={digimon}
          func={deleteDigimon}
        />
      ))}
    </Container>
  );
}
export default FavoritesList;
