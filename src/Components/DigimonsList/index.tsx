import { useDigimons } from "../../Provider/DigimonsProvider";
import Card from "../Card";
import { Container } from "./style";

const DigimonsList = () => {
  const { digimons, addDigimon } = useDigimons();
  return (
    <Container>
      {digimons.map((digimon, index) => (
        <Card
          isFavorite={false}
          key={index}
          digimon={digimon}
          func={addDigimon}
        />
      ))}
    </Container>
  );
};
export default DigimonsList;
