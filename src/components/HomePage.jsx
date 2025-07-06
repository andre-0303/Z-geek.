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

  return (
    <>
      <div>
        <div className="flex flex-row justify-between p-5">
          <h1>ababa</h1>
          <button
            onClick={handleLogout}
            className="bg-gamer-primary p-2 px-10 rounded-md"
          >
            Sair
          </button>
        </div>
      </div>
    </>
  );
};

export default HomePage;
