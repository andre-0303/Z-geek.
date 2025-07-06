import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../../lib/supabaseClient";

const CadastroPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSignUp(e) {
    e.preventDefault();
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert(`Erro ao cadastrar: ${error.message}`);
      return;
    }

    alert("Cadastro realizado com sucesso! Faça login agora.");
    navigate("/login");
  }

  return (
    <div>
      <h2>Criar conta</h2>
      <form>
        <label>Email:</label>
        <input
          type="email"
          placeholder="Digite seu e-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Senha:</label>
        <input
          type="password"
          placeholder="Digite sua senha"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={handleSignUp}>
          Criar conta
        </button>
      </form>
    </div>
  );
};

export default CadastroPage;
