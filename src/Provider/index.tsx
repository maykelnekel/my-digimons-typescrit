import { ReactNode } from "react";
import { FavoriteDigimonsProvider } from "./DigimonsProvider";

interface ProvidersProps {
  children: ReactNode; //Utilizamos o tipo nativo do React chamado ReactNode
}

const Providers = ({ children }: ProvidersProps) => {
  return <FavoriteDigimonsProvider>{children}</FavoriteDigimonsProvider>;
};

export default Providers;
