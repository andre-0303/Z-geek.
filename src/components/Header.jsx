import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../public/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center p-4 bg-gamer-black relative z-50">
      <Link to="/" className="flex flex-row justify-center items-center gap-2">
        <img
          src={Logo}
          alt="logo"
          className="h-[60px] invert sepia hue-rotate-[290deg] saturate-[900%]"
        />
        <h2 className="font-bold text-2xl text-gamer-primary">Z-Geek</h2>
      </Link>

      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden flex flex-col justify-center items-center gap-1"
      >
        <span className="w-8 h-1 bg-gamer-primary rounded"></span>
        <span className="w-8 h-1 bg-gamer-primary rounded"></span>
        <span className="w-8 h-1 bg-gamer-primary rounded"></span>
      </button>

      <nav className="hidden md:flex mt-2">
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

      {isMenuOpen && (
        <nav className="absolute top-full left-0 w-full bg-gamer-black md:hidden">
          <ul className="flex flex-col gap-4 text-gamer-textSecondary text-lg p-4">
            <li>
              <Link
                to="/"
                className="hover:text-gamer-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
            </li>
            <li>
              <Link
                to="/jogos"
                className="hover:text-gamer-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Jogos
              </Link>
            </li>
            <li>
              <Link
                to="/contatos"
                className="hover:text-gamer-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Contatos
              </Link>
            </li>
            <li>
              <Link
                to="/sobre"
                className="hover:text-gamer-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
