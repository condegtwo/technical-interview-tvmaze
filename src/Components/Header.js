import { Link } from "react-router-dom";
import logo from "../Images/logo.svg";
import "../Styles/Header.scss";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} className="logo" alt="logo" />
      </Link>

      <Link className="title" to="/">
        <span className="show">Show</span>
        <span className="finder">Finder</span>
      </Link>
    </header>
  );
};

export default Header;
