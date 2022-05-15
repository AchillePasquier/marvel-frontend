import { useEffect, useState } from "react";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Comics = ({ addFavorite }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsloading] = useState(true);
  const [toSkip, setToskip] = useState(0);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchMarvelBack = async () => {
      try {
        const response = await axios.get(
          `https://backend-marvel-achille.herokuapp.com/comics?limit=100&skip=${toSkip}&name=${search}`
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
        placeholder="Rechercher des Comics"
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
        {data.results.map((comic) => {
          const url = comic.thumbnail.path + "." + comic.thumbnail.extension;
          return (
            <div className="char-in-list" key={comic._id}>
              <article className="">
                <h3>{comic.title}</h3>
                <img alt="comic" src={url} className="character-img" />
                <p>{comic.description}</p>
              </article>
              <FontAwesomeIcon
                className="heart"
                icon="heart"
                onClick={() => {
                  addFavorite(comic);
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

export default Comics;
