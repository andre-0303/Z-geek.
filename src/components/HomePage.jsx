import { useAuth } from "../App";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";

const HomePage = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  async function handleLogout() {
    const { error } = await supabase.auth.signOut();

    if (error) {
      alert(`Erro ao sair: ${error.message}`);
      return;
    }

    logout();
    navigate("/login");
  }

  function handleJogos() {
    navigate("/jogos");
  }

  return (
    <>
      <div className="relative bg-[url('/banner.jpg')] bg-cover bg-center min-h-screen">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative z-10 flex p-5 justify-end">
          <button
            onClick={handleLogout}
            className="bg-gamer-primary p-2 px-10 rounded-md text-white font-bold"
          >
            Sair
          </button>
        </div>

        <div className="relative z-10 flex justify-center items-center min-h-[80vh] flex-col">
          <h1 className="text-white text-4xl font-bold">Bem-vindo ao Z-Geek</h1>
          <h3 className="text-gray-300 text-xl mt-4">
            Aqui você encontra as melhores indicações de games da atualidade!
          </h3>
          <button
            onClick={handleJogos}
            className="bg-gamer-primary text-white p-2 px-8 mt-6 rounded-md hover:scale-105 transition"
          >
            Ver jogos
          </button>
        </div>
      </div>
    </>
  );
};

export default HomePage;
