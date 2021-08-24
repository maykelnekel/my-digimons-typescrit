import { Digimon } from "../../Provider/DigimonsProvider";
import Button from "../Button";

interface DigimonCardProps {
  digimon: Digimon;
  func: (digimon: Digimon) => void;
  isFavorite: boolean;
}

const Card = ({ digimon, func, isFavorite }: DigimonCardProps) => {
  const { name, img, level } = digimon;
  return (
    <div>
      <h1>{name}</h1>
      <img src={img} />
      <h3>{level}</h3>
      {isFavorite ? (
        <Button content="Remover" func={func} digimon={digimon}></Button>
      ) : (
        <Button content="Adicionar" func={func} digimon={digimon}></Button>
      )}
    </div>
  );
};
export default Card;
