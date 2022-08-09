import { createContext, FC, useMemo } from "react";
import { LOCAL_STORAGE_KEY, LOCAL_STORAGE_MAX_ITEMS } from "./../constants";
import { useStoredList } from "../hooks/useStoredList";

export interface FavouriteQuotesContextType {
  ids: number[];
  add: (id: number) => void;
  remove: (id: number) => void;
  maxLimit: boolean;
}

export const FavouriteQuotesContext = createContext<FavouriteQuotesContextType>(
  {
    ids: [],
    add: () => {},
    remove: () => {},
    maxLimit: false,
  }
);

export const FavouriteQuotesContextProvider: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const { items, add, remove, maxLimit } = useStoredList<number>(LOCAL_STORAGE_KEY, LOCAL_STORAGE_MAX_ITEMS);

  const value = useMemo<FavouriteQuotesContextType>(
    () => ({
      ids: items,
      add: add,
      remove: remove,
      maxLimit: maxLimit
    }),
    [items, add, remove, maxLimit]
  );

  return (
    <FavouriteQuotesContext.Provider value={value}>
      {children}
    </FavouriteQuotesContext.Provider>
  );
};
