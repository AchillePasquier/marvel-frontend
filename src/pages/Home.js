import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = ({ addFavorite }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsloading] = useState(true);
  const [toSkip, setToskip] = useState(0);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchMarvelBack = async () => {
      try {
        const response = await axios.get(
          `https://backend-marvel-achille.herokuapp.com/characters?limit=100&skip=${toSkip}&name=${search}`
        );
        //console.log(response.data);
        setData(response.data);
        setIsloading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMarvelBack();
  }, [toSkip, search]);

  return isLoading ? (
    <h1>Loading ...</h1>
  ) : (
    <div className="home container">
      <input
        className="search"
        type="text"
        placeholder="Rechercher des personnages"
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
      <div className="what-page">
        <button
          disabled={page === 1 && true}
          onClick={() => {
            setToskip(toSkip - 100);
            setPage(page - 1);
          }}
        >
          Page précédente
        </button>
        <p>Page : {page}</p>
        <button
          disabled={page === 15 && true}
          onClick={() => {
            setToskip(toSkip + 100);
            setPage(page + 1);
          }}
        >
          Page suivante
        </button>
      </div>

      <div className="characters-list">
        {data.results.map((character) => {
          const url =
            character.thumbnail.path + "." + character.thumbnail.extension;
          return (
            <div className="char-in-list" key={character._id}>
              <Link className="" to={`/comics/${character._id}`}>
                <h3>{character.name}</h3>
                <img alt="character" src={url} className="character-img" />
                <p>{character.description}</p>
              </Link>
              <FontAwesomeIcon
                className="heart"
                icon="heart"
                onClick={() => {
                  addFavorite(character);
                }}
              />
            </div>
          );
        })}
      </div>

      <div className="what-page">
        <button
          disabled={page === 1 && true}
          onClick={() => {
            setToskip(toSkip - 100);
            setPage(page - 1);
          }}
        >
          Page précédente
        </button>
        <p>Page : {page}</p>
        <button
          disabled={page === 15 && true}
          onClick={() => {
            setToskip(toSkip + 100);
            setPage(page + 1);
          }}
        >
          Page suivante
        </button>
      </div>
    </div>
  );
};

export default Home;
