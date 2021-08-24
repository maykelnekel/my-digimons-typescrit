import { Digimon } from "../../Provider/DigimonsProvider";

interface ButtonProps {
  digimon: Digimon;
  content: string;
  func: (digimon: Digimon) => void;
}

function Button({ content, func, digimon }: ButtonProps) {
  return <button onClick={() => func(digimon)}>{content}</button>;
}
export default Button;
