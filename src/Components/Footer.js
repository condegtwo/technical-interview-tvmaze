import tvmLogo from "../Images/tvm-logo.png";
import "../Styles/Footer.scss";

const Footer = () => {
  return (
    <footer>
      <span className="tag">powered by: </span>
      <a
        href="https://www.tvmaze.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="tvm-logo" src={tvmLogo} alt="tvm-logo" />
      </a>
    </footer>
  );
};

export default Footer;
