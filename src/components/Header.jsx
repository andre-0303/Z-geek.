import { Link } from "react-router-dom";
import Logo from "../../public/logo.png";

const Header = () => (
  <header className="flex justify-between p-4 bg-gamer-black">
    <Link to="/" className="flex flex-row justify-center items-center gap-2">
      <img
        src={Logo}
        alt="logo"
        className="h-[90px] invert sepia hue-rotate-[290deg] saturate-[900%]"
      />
      <h2 className="font-bold text-2xl text-gamer-primary">Z-Geek</h2>
    </Link>
    <nav className="flex mt-7">
      <ul className="flex flex-row gap-4 text-gamer-textSecondary text-lg">
        <li>
          <Link to="/" className="hover:text-gamer-primary">
            Início
          </Link>
        </li>
        <li>
          <Link to="/jogos" className="hover:text-gamer-primary">
            Jogos
          </Link>
        </li>
        <li>
          <Link to="/contatos" className="hover:text-gamer-primary">
            Contatos
          </Link>
        </li>
        <li>
          <Link to="/sobre" className="hover:text-gamer-primary">
            Sobre
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
