// import { useEffect, useState } from "react";
// import axios from "axios";
//import { Link } from "react-router-dom";

const Favorites = ({ favorites }) => {
  return (
    <>
      <h1>Comics ou Personnages favoris</h1>
      <div className="characters-list container">
        {favorites.map((fav, index) => {
          const url = fav.thumbnail.path + "." + fav.thumbnail.extension;
          return (
            <div className="char-in-list" key={index}>
              <h3>{fav.name || fav.title} </h3>
              <img alt="character" src={url} className="character-img" />
              <p>{fav.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Favorites;
