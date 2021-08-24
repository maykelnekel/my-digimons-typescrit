import { useDigimons } from "../../Provider/DigimonsProvider";
import Card from "../Card";

const DigimonsList = () => {
  const { digimons, addDigimon } = useDigimons();
  return (
    <>
      {digimons.map((digimon, index) => (
        <Card
          isFavorite={false}
          key={index}
          digimon={digimon}
          func={addDigimon}
        />
      ))}
    </>
  );
};
export default DigimonsList;
