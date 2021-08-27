import { Digimon } from "../../Provider/DigimonsProvider";
import { ButtonComponent } from "./style";

interface ButtonProps {
  digimon: Digimon;
  content: string;
  func: (digimon: Digimon) => void;
}

function Button({ content, func, digimon }: ButtonProps) {
  return (
    <ButtonComponent onClick={() => func(digimon)}>{content}</ButtonComponent>
  );
}
export default Button;
