import { Lista, Menu } from "./style";

const NavigationBar = () => {
  return (
    <Lista>
      <Menu to="/">Digimons</Menu>

      <Menu to="/favorites">Favoritos</Menu>
    </Lista>
  );
};
export default NavigationBar;
