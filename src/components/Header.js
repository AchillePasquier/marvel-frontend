import { Link } from "react-router-dom";
import LogoMarvel from "../images/logo-marvel.png";

const Header = () => {
  return (
    <header>
      <div className="header container">
        <Link to={"/"}>
          <img src={LogoMarvel} alt="Logo-Marvel" className="logoMarvel" />
        </Link>
        <nav>
          <Link to={"/"}>
            <button>Personnages</button>
          </Link>
          <Link to={"/comics"}>
            <button>Comics</button>
          </Link>
          <Link to={"/favorites"}>
            <button>Favoris</button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
