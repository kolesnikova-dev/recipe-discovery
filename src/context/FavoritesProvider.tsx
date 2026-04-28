import { FavoritesContext } from './FavoritesContext';

export const FavoritesProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <FavoritesContext.Provider value={}>
      {children}
    </FavoritesContext.Provider>
  );
};
