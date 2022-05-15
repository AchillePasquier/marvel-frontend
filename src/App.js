import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import "./App.css";
import "./index.css";

import Home from "./pages/Home";
import CharacInf from "./pages/CharacInf";
import Comics from "./pages/Comics";
import Favorites from "./pages/Favorites";

import Header from "./components/Header";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
library.add(faHeart);

function App() {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (charcom) => {
    let favoritesCopy = [...favorites];
    let newFav = { ...charcom };
    favoritesCopy.push(newFav);
    setFavorites(favoritesCopy);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home addFavorite={addFavorite} />} />
        <Route path="/comics/:characterId" element={<CharacInf />} />
        <Route path="/comics" element={<Comics addFavorite={addFavorite} />} />
        <Route
          path="/favorites"
          element={<Favorites favorites={favorites} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
