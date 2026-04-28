import { FavoritesProvider } from './context/FavoritesProvider';

import './App.css';


function App() {
  return (
    <FavoritesProvider>
      <div id="center">
      </div>
    </FavoritesProvider>
  );
}

export default App;