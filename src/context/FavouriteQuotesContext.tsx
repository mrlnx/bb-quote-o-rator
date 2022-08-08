import { createContext, FC, useMemo } from "react";
import { LOCAL_STORAGE_KEY } from "./../constants";
import { useStoredList } from "../hooks/useStoredList";

export interface FavouriteQuotesContextType {
  ids: number[];
  add: (id: number) => void;
  remove: (id: number) => void;
}

export const FavouriteQuotesContext = createContext<FavouriteQuotesContextType>(
  {
    ids: [],
    add: () => {},
    remove: () => {},
  }
);

export const FavouriteQuotesContextProvider: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const { items, add, remove } = useStoredList<number>(LOCAL_STORAGE_KEY);

  const value = useMemo<FavouriteQuotesContextType>(
    () => ({
      ids: items,
      add: add,
      remove: remove,
    }),
    [items, add, remove]
  );

  return (
    <FavouriteQuotesContext.Provider value={value}>
      {children}
    </FavouriteQuotesContext.Provider>
  );
};
