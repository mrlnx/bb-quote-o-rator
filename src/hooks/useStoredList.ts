import { useCallback, useEffect, useState } from "react";

export interface StoredList<T> {
  initialized: boolean;
  items: T[];
  add: (item: T) => void;
  remove: (item: T) => void;
  maxLimit: boolean,
}

export const useStoredList = <T>(key: string, maxItems: number = 0): StoredList<T> => {
  const [items, setItems] = useState<T[]>([]);
  const [initialized, setInitialized] = useState<boolean>(false);

  useEffect(() => {
    const storedList = window.localStorage.getItem(key);
    if (storedList) {
      const parsedStoredList = JSON.parse(storedList);
      setItems(parsedStoredList);
    }

    setInitialized(true);
  }, [key]);

  useEffect(() => {
    if (initialized) localStorage.setItem(key, JSON.stringify(items));
  }, [initialized, items, key]);

  const add = useCallback((item: T) => {
    setItems((currentItems) =>
      currentItems && (currentItems.length <= maxItems) ? [...currentItems, item] : currentItems
    );
  }, [maxItems]);

  const remove = useCallback((item: T) => {
    setItems((currentItems) =>
      currentItems.includes(item)
        ? currentItems.filter((id) => id !== item)
        : currentItems
    );
  }, []);

  return {
    initialized,
    add,
    remove,
    items,
    maxLimit: maxItems >= items.length,
  };
};
