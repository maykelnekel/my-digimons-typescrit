import { Route, Switch } from "react-router-dom";
import DigimonsPage from "../Pages/Digimons";
import FavoritesPage from "../Pages/Favorites";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <DigimonsPage />
      </Route>
      <Route exact path="/favorites">
        <FavoritesPage />
      </Route>
    </Switch>
  );
};

export default Routes;
