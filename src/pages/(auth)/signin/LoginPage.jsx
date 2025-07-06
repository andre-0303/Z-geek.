import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../../lib/supabaseClient";
import { useAuth } from "../../../App";
import { Mail, Lock } from "lucide-react";

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
    return email === "" || password === "";
  }

  async function handleSignIn(e) {
    e.preventDefault();

    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
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
    <div className="relative min-h-screen flex justify-center items-center bg-gamer-gray px-4">
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      <form className="relative z-10 bg-gamer-dark p-6 sm:p-8 rounded-md shadow-lg w-full max-w-sm sm:max-w-md space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gamer-primary mb-4 sm:mb-6">
          Faça seu login
        </h2>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-gamer-textSecondary text-sm sm:text-base"
          >
            Email:
          </label>
          <div className="flex items-center border border-gray-600 rounded-md p-2 sm:p-3 bg-gray-800 focus-within:ring-2 focus-within:ring-gamer-primary">
            <Mail className="w-5 h-5 text-gamer-primary mr-2" />
            <input
              id="email"
              type="email"
              placeholder="Digite seu E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent flex-1 outline-none text-white placeholder-gray-400 text-sm sm:text-base"
            />
          </div>
        </div>

        {/* Campo Senha */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="password"
            className="text-gamer-textSecondary text-sm sm:text-base"
          >
            Senha:
          </label>
          <div className="flex items-center border border-gray-600 rounded-md p-2 sm:p-3 bg-gray-800 focus-within:ring-2 focus-within:ring-gamer-primary">
            <Lock className="w-5 h-5 text-gamer-primary mr-2" />
            <input
              id="password"
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-transparent flex-1 outline-none text-white placeholder-gray-400 text-sm sm:text-base"
            />
          </div>
        </div>

        <button
          type="submit"
          onClick={handleSignIn}
          disabled={ValidationDesabled()}
          className={`w-full p-3 sm:p-4 rounded-md text-white font-bold transition ${
            ValidationDesabled()
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-gamer-primary hover:scale-105"
          }`}
        >
          {loading ? "Carregando..." : "Acessar"}
        </button>

        <button
          type="button"
          onClick={handleSingUp}
          className="w-full p-3 sm:p-4 rounded-md text-white font-bold bg-gamer-secondary hover:scale-105 transition"
        >
          Sem conta? Criar conta
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
