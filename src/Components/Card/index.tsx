import { Digimon } from "../../Provider/DigimonsProvider";
import Button from "../Button";
import { CardContainer, Image, Level, Name } from "./style";

interface DigimonCardProps {
  digimon: Digimon;
  func: (digimon: Digimon) => void;
  isFavorite: boolean;
}

const Card = ({ digimon, func, isFavorite }: DigimonCardProps) => {
  const { name, img, level } = digimon;
  return (
    <CardContainer>
      <Name>{name}</Name>
      <Image src={img} />
      <Level>
        Level: <span>{level}</span>
      </Level>
      {isFavorite ? (
        <Button content="Remover" func={func} digimon={digimon}></Button>
      ) : (
        <Button content="Adicionar" func={func} digimon={digimon}></Button>
      )}
    </CardContainer>
  );
};
export default Card;
