import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <ul>
      <li>
        <Link to="/">Digimons</Link>
      </li>
      <li>
        <Link to="/favorites">Favoritos</Link>
      </li>
    </ul>
  );
};
export default NavigationBar;
