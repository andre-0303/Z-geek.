import { Link } from "react-router-dom";
import Logo from "../../public/logo.png";

const Header = () => (
  <header>
    <Link to="/">
      <img src={Logo} alt="logo" className="h-[100px]" />
    </Link>
    <nav>
      <ul>
        <li>
          <Link to="/">Início</Link>
        </li>
        <li>
          <Link to="/jogos">Jogos</Link>
        </li>
        <li>
          <Link to="/contatos">Contatos</Link>
        </li>
        <li>
          <Link to="/sobre">Sobre</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
