import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const CharacInf = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  //const params = useParams();
  // console.log(params); affiche un objet avec une clé characterId:

  const { characterId } = useParams();
  //console.log(characterId);

  useEffect(() => {
    const fecthData = async () => {
      try {
        const response = await axios.get(
          `https://backend-marvel-achille.herokuapp.com/comics/${characterId}`
        );
        //console.log(response.data);
        setData(response.data);
        //const url = data.thumbnail.path + "." + data.thumbnail.extension;
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fecthData();
  }, [characterId]);

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <>
      <div className="charInf">
        <h2>{data.name}</h2>
        <p>{data.description}</p>
        <img
          src={data.thumbnail.path + "." + data.thumbnail.extension}
          alt="character"
          className="characterPic"
        />
        <p>Comics où l'on retrouve ce personnage :</p>
      </div>
      <div className="char-comics container">
        {data.comics.map((comic, index) => {
          const url = comic.thumbnail.path + "." + comic.thumbnail.extension;
          return (
            <article key={index}>
              <h3>{comic.title}</h3>
              <img alt="comic" src={url} className="comicofcharimg" />
            </article>
          );
        })}
      </div>
    </>
  );
};

export default CharacInf;
