import axios from "axios";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";

export interface Digimon {
  name: string;
  img: string;
  level: string;
}

interface Favorite extends Digimon {}

interface FavoriteDigimonsProviderData {
  digimons: Digimon[];
  error: string;
  favorites: Favorite[];
  addDigimon: (digimon: Digimon) => void;
  deleteDigimon: (digimon: Digimon) => void;
}

interface FavoriteDigimonsProviderProps {
  children: ReactNode;
}
export const DigimonsContext = createContext<FavoriteDigimonsProviderData>(
  {} as FavoriteDigimonsProviderData
);

export const FavoriteDigimonsProvider = ({
  children,
}: FavoriteDigimonsProviderProps) => {
  const [digimons, setDigimons] = useState<Digimon[]>([] as Digimon[]);

  const [favorites, setFavorites] = useState<Favorite[]>(() => {
    let data = localStorage.getItem("favorites");
    if (data) {
      return JSON.parse(data);
    }
    return [];
  });

  const [error, setError] = useState<string>("");

  useEffect(() => {
    console.log(favorites);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    axios
      .get("https://digimon-api.vercel.app/api/digimon")
      .then((response) => {
        setDigimons(response.data);
      })
      .catch(() => setError("Algo de errado!"));
  }, []);

  const addDigimon = (digimon: Digimon) => {
    //Faça a lógica para não add digimons repetidos
    if (favorites.includes(digimon)) {
      return toast.error("Digimon já adicionado aos favoritos");
    } else {
      toast.success("Digimon adicionado aos favoritos");
      return setFavorites([...favorites, digimon]);
    }
  };

  const deleteDigimon = (digimonToBeDeleted: Favorite) => {
    const newList = favorites.filter(
      (digimon) => digimon.name !== digimonToBeDeleted.name
    );
    setFavorites(newList);
    toast.warn("Digimon removido dos favoritos");
  };

  return (
    <DigimonsContext.Provider
      value={{ digimons, error, favorites, addDigimon, deleteDigimon }}
    >
      {children}
    </DigimonsContext.Provider>
  );
};

export const useDigimons = () => useContext(DigimonsContext);
