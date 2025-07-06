import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../../lib/supabaseClient";
import { useAuth } from "../../../App";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  function handleSingUp() {
    navigate("/cadastro");
  }

  function ValidationDesabled() {
    if (email === "" || password === "") {
      return true;
    } else {
      return false;
    }
  }

  async function handleSignIn(e) {
    e.preventDefault();

    setLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error("Erro completo do Supabase:", error);
      alert(`Erro ao fazer login: ${error.message}`);
      setLoading(false);
      return;
    }

    setLoading(false);
    login();
    navigate("/");
    alert("Login realizado com sucesso!");
  }

  return (
    <>
      <div>
        <form>
          <div>
            <h2>Faça seu login</h2>
            <label htmlFor="email" className="">
              Email:
            </label>
            <input
              type="email"
              placeholder="Digite seu E-mail"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <label htmlFor="password" className="">
              Senha:
            </label>
            <input
              type="password"
              placeholder="Digite sua senha"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <button
              type="submit"
              className=""
              onClick={handleSignIn}
              disabled={ValidationDesabled()}
            >
              {loading ? "Carregando" : "Acessar"}
            </button>
            <button type="submit" onClick={handleSingUp}>
              Sem conta? Criar conta
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
